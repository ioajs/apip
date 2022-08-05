/// <reference types="node" />
import http from 'node:http';
import { RouterTree } from '../main/routerTree.js';
export declare const routerTree: RouterTree;
/**
 * 将 http request 请求转换为 ctx,
 */
export declare function request(req: http.IncomingMessage, res: http.ServerResponse): Promise<void>;
