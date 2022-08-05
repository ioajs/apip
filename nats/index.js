import { RouterTree } from '../main/routerTree.js';
/**全局中间件队列 */
export const globalMiddlewares = [];
export const routerTree = new RouterTree();
export default {
    /**
     * 添加全局中间件
     * @param middleware  中间件函数
     */
    use(middleware) {
        globalMiddlewares.push(middleware);
    },
    /**
     * get 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    get(path, ...middlewares) {
        routerTree.add('GET', path, ...globalMiddlewares, ...middlewares);
    },
    /**
     * post 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    post(path, ...middlewares) {
        routerTree.add('POST', path, ...globalMiddlewares, ...middlewares);
    },
    /**
     * put 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    put(path, ...middlewares) {
        routerTree.add('PUT', path, ...globalMiddlewares, ...middlewares);
    },
    /**
     * delete 请求
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    del(path, ...middlewares) {
        routerTree.add('DELETE', path, ...globalMiddlewares, ...middlewares);
    },
    /**
     *
     */
    connect(options) {
    }
};
