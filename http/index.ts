import http from 'node:http';
import { routerTree, request } from './request.js';
import type { Middleware } from '../main/types.js';
export * from "./decorator.js"

/**全局中间件队列 */
export const globalMiddlewares: Middleware[] = [];

export default {
  /**
   * 添加全局中间件
   * @param middleware  中间件函数
   */
  use(middleware: Middleware) {
    globalMiddlewares.push(middleware);
  },
  /**
   * Get 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  get(path: string, ...middlewares: Middleware[]) {
    routerTree.add('GET', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * Post 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  post(path: string, ...middlewares: Middleware[]) {
    routerTree.add('POST', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * Put 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  put(path: string, ...middlewares: Middleware[]) {
    routerTree.add('PUT', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * Delete 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  del(path: string, ...middlewares: Middleware[]) {
    routerTree.add('DELETE', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * HTTP 端口监听
   * @param port 端口号
   */
  listen(port: number) {

    const server = http.createServer({
      // requestTimeout: 4000,
      // headersTimeout: 1000
    });

    server.on('request', request);

    server.on('clientError', (err, socket) => {
      socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    })

    server.listen(port);

    console.log(`\x1b[36mhttp://localhost:${port}\x1b[30m`);

  }
};
