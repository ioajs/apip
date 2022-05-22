import http from 'node:http';
import routerMiddleware from './middleware.js';
import type { CTX, Next } from './types.js';

export default class Koa {
  middlewares = [];
  use(func: (ctx: object, next?: Next) => unknown) {
    this.middlewares.push(func);
  }
  listen(port: number) {

    const server = http.createServer({
      // requestTimeout: 4000,
      // headersTimeout: 1000
    });

    const { middlewares } = this;

    server.on('request', async (req, res) => {

      res.writeHead(200, { 'Content-Type': 'text/html' });

      let bodyString = '';

      req.on('data', chunk => bodyString += chunk.toString());

      await new Promise((resolve, rejects) => {
        req.on('end', resolve);
        req.on('error', rejects);
      });

      let body: object;

      if (bodyString !== '') {
        body = JSON.parse(bodyString);
      }

      interface Header {
        Host?: string
      }

      const header: Header = {};

      let key = undefined;
      for (const item of req.rawHeaders) {
        if (key) {
          header[key] = item;
          key = undefined;
        } else {
          key = item;
        }
      }

      const { Host } = header;

      const { href, origin, pathname, searchParams } = new URL(req.url, `http://${Host}`);

      const query = {};

      for (const [key, value] of searchParams) {
        query[key] = value;
      }

      const { method } = req;

      const ctx: CTX = {
        method,
        header,
        path: pathname,
        host: Host,
        query,
        params: {},
        href,
        origin,
        req,
        res,
        url: req.url,
        request: { header, body },
        response: {},
        get(name: string) { return header[name]; },
        vary() { },
        body: ''
      };

      const [entry] = middlewares;

      let index = 0;

      await entry(ctx, async function next() {

        index++;

        const middleware = middlewares[index];

        if (middleware) {

          let lock = false;

          await middleware(ctx, () => {
            if (lock === false) {
              lock = true;
              return next();
            } else {
              throw new Error(`禁止在同一个中间件中多次重复调用 next()`);
            }
          });

        } else {

          await routerMiddleware(ctx);

        }

      });

      if (typeof ctx.body === 'object') {
        res.end(JSON.stringify(ctx.body));
      } else {
        res.end(ctx.body);
      }

    })

    server.on('clientError', (err, socket) => {
      socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    })

    server.listen(port);

    console.log(`\x1b[36mhttp://localhost:${port}\x1b[30m`);

  }
};