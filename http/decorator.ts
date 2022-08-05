import app from './index.js';
import type { Middleware } from '../main/types.js';

export function Controller() {
  return function (controller: new () => void): void {
    new controller();
  }
}

/**
 * get router
 * @param path 
 * @param middlewares 
 */
export function Get(path: string, ...middlewares: Middleware[]) {
  return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    app.get(path, ...middlewares, descriptor.value);
  }
}

/**
 * post router
 * @param path 
 * @param middlewares
 */
export function Post(path: string, ...middlewares: Middleware[]) {
  return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    app.post(path, ...middlewares, descriptor.value);
  }
}

/**
 * put router
 * @param path 
 * @param middlewares 
 */
export function Put(path: string, ...middlewares: Middleware[]) {
  return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    app.put(path, ...middlewares, descriptor.value);
  }
}

/**
 * delete router
 * @param path 
 * @param middlewares 
 */
export function Del(path: string, ...middlewares: Middleware[]) {
  return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    app.del(path, ...middlewares, descriptor.value);
  }
}
