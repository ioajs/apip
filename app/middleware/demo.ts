import type { Middleware, CTX } from 'apip';

export default function (options: object): Middleware {
  return function (ctx: CTX, next) {
    ctx.test = options;
    next();
  }
}
