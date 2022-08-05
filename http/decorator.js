import app from './index.js';
export function Controller() {
    return function (controller) {
        new controller();
    };
}
/**
 * get router
 * @param path
 * @param middlewares
 */
export function Get(path, ...middlewares) {
    return function (target, propertyKey, descriptor) {
        app.get(path, ...middlewares, descriptor.value);
    };
}
/**
 * post router
 * @param path
 * @param middlewares
 */
export function Post(path, ...middlewares) {
    return function (target, propertyKey, descriptor) {
        app.post(path, ...middlewares, descriptor.value);
    };
}
/**
 * put router
 * @param path
 * @param middlewares
 */
export function Put(path, ...middlewares) {
    return function (target, propertyKey, descriptor) {
        app.put(path, ...middlewares, descriptor.value);
    };
}
/**
 * delete router
 * @param path
 * @param middlewares
 */
export function Del(path, ...middlewares) {
    return function (target, propertyKey, descriptor) {
        app.del(path, ...middlewares, descriptor.value);
    };
}
