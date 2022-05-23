import http from 'node:http';
import request from './request.js';
import { addRouter } from './routerTree.js';
import type { Middleware } from './types.js';
export * from "./decorator.js";

export const globalMiddlewares = []; // 全局中间件队列

export default {
  use(func: Middleware) {

    globalMiddlewares.push(func);

  },
  listen(port: number) {

    const server = http.createServer({
      // requestTimeout: 4000,
      // headersTimeout: 1000
    });

    server.on('request', request)

    server.on('clientError', (err, socket) => {
      socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    })

    server.listen(port);

    console.log(`\x1b[36mhttp://localhost:${port}\x1b[30m`);

  },
  /**
   * get 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  get(path: string, ...middlewares: Middleware[]) {
    addRouter('GET', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * post 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  post(path: string, ...middlewares: Middleware[]) {
    addRouter('POST', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * put 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  put(path: string, ...middlewares: Middleware[]) {
    addRouter('PUT', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * delete 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  del(path: string, ...middlewares: Middleware[]) {
    addRouter('DELETE', path, ...globalMiddlewares, ...middlewares);
  },
};
