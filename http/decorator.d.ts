import type { Middleware } from '../main/types.js';
export declare function Controller(): (controller: new () => void) => void;
/**
 * get router
 * @param path
 * @param middlewares
 */
export declare function Get(path: string, ...middlewares: Middleware[]): (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * post router
 * @param path
 * @param middlewares
 */
export declare function Post(path: string, ...middlewares: Middleware[]): (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * put router
 * @param path
 * @param middlewares
 */
export declare function Put(path: string, ...middlewares: Middleware[]): (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * delete router
 * @param path
 * @param middlewares
 */
export declare function Del(path: string, ...middlewares: Middleware[]): (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => void;
