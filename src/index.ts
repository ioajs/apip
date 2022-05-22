import Koa from './koa.js';
import router from './router.js';
import type { Next } from './types.js';

export * from "./decorator.js";

const koa = new Koa();

export default {
  use(func: (ctx: object, next?: Next) => unknown) {
    koa.use(func);
  },
  listen(port: number) {
    koa.listen(port);
  },
  /**
   * get 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  get(path: string, ...middlewares: Function[]) {
    router.add('GET', path, ...middlewares);
  },
  /**
   * post 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  post(path: string, ...middlewares: Function[]) {
    router.add('POST', path, ...middlewares);
  },
  /**
   * put 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  put(path: string, ...middlewares: Function[]) {
    router.add('PUT', path, ...middlewares);
  },
  /**
   * delete 请求
   * @param path 请求路径
   * @param middlewares 中间件队列
   */
  del(path: string, ...middlewares: Function[]) {
    router.add('DELETE', path, ...middlewares);
  },
};
