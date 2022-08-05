import { RouterTree } from '../main/routerTree.js';
import type { Middleware } from '../main/types.js';

/**全局中间件队列 */
export const globalMiddlewares: Middleware[] = [];

export const routerTree = new RouterTree();

export default {
  /**
   * 添加全局中间件
   * @param middleware  中间件函数
   */
  use(middleware: Middleware) {
    globalMiddlewares.push(middleware);
  },
  /**
   * get 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  get(path: string, ...middlewares: Middleware[]) {
    routerTree.add('GET', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * post 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  post(path: string, ...middlewares: Middleware[]) {
    routerTree.add('POST', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * put 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  put(path: string, ...middlewares: Middleware[]) {
    routerTree.add('PUT', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * delete 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  del(path: string, ...middlewares: Middleware[]) {
    routerTree.add('DELETE', path, ...globalMiddlewares, ...middlewares);
  },
  /**
   * 
   */
  connect(options: object) {

  }
};
