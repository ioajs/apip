import type { Middleware } from './types.js';
export declare const symbolName: unique symbol;
export declare const symbolWildcard: unique symbol;
export declare const symbolMiddleware: unique symbol;
/**
 * 路由索引树
 */
export declare class RouterTree {
    /**路由字典树 */
    tree: {
        [method: string]: any;
    };
    /**
     * 添加路由索引
     * @param method 请求类型
     * @param path 请求路径
     * @param middlewares 中间件队列
     */
    add(method: string, path: string, ...middlewares: Middleware[]): string[];
}
