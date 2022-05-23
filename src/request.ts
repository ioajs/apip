import http from 'node:http';
import type { CTX } from './types.js';
import routerMiddleware from './middleware.js';

export default async (req: http.IncomingMessage, res: http.ServerResponse) => {

  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  
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

  await routerMiddleware(ctx);

  if (typeof ctx.body === 'object') {
    res.end(JSON.stringify(ctx.body));
  } else {
    res.end(ctx.body);
  }

}