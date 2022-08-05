import type { CTX } from './types.js';
/**
 * 路由参数解析、匹配并执行中间件
 * @param ctx 请求上下文
 */
export declare function middleware(ctx: CTX): Promise<{
    code: number;
    error: string;
} | undefined>;
