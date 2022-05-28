import cors from '@koa/cors';
import api, { imports } from 'apip';

console.time()

api.use(cors({ origin: '*' }));

api.use(async (ctx, next) => {
  // console.log(ctx.href);
  await next();
});

api.listen(8080);

await imports('./apis/');

console.timeEnd();
