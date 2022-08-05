import { RouterTree } from '../main/routerTree.js';
import type { Middleware } from '../main/types.js';
/**全局中间件队列 */
export declare const globalMiddlewares: Middleware[];
export declare const routerTree: RouterTree;
declare const _default: {
    /**
     * 添加全局中间件
     * @param middleware  中间件函数
     */
    use(middleware: Middleware): void;
    /**
     * get 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    get(path: string, ...middlewares: Middleware[]): void;
    /**
     * post 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    post(path: string, ...middlewares: Middleware[]): void;
    /**
     * put 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    put(path: string, ...middlewares: Middleware[]): void;
    /**
     * delete 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    del(path: string, ...middlewares: Middleware[]): void;
    /**
     *
     */
    connect(options: object): void;
};
export default _default;
