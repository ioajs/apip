import { RouterTree } from './routerTree.js';
/**
 * 网络请求与响应上下文
 */
export interface CTX {
    method: string;
    header: object;
    path: string;
    host: string | undefined;
    query: object;
    href: string;
    origin: string;
    req: object;
    res: object;
    url: string | undefined;
    tree: RouterTree['tree'];
    params: {
        [name: string]: any;
    };
    status?: number;
    request: {
        header: {
            [name: string]: string;
        };
        body: object | undefined;
    };
    response: object;
    body: object | string;
    get: (name: string) => unknown;
    vary: () => void;
    [name: string]: any;
}
/**
 * 中间件函数
 */
export interface Middleware {
    (ctx: CTX, next: () => Promise<void>): Promise<unknown> | unknown;
}
