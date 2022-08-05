import type { Middleware } from '../main/types.js';
export * from "./decorator.js";
/**全局中间件队列 */
export declare const globalMiddlewares: Middleware[];
declare const _default: {
    /**
     * 添加全局中间件
     * @param middleware  中间件函数
     */
    use(middleware: Middleware): void;
    /**
     * Get 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    get(path: string, ...middlewares: Middleware[]): void;
    /**
     * Post 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    post(path: string, ...middlewares: Middleware[]): void;
    /**
     * Put 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    put(path: string, ...middlewares: Middleware[]): void;
    /**
     * Delete 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    del(path: string, ...middlewares: Middleware[]): void;
    /**
     * HTTP 端口监听
     * @param port 端口号
     */
    listen(port: number): void;
};
export default _default;
