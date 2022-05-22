import api from 'apip';
import cors from '@koa/cors';
import './apis/index.js';

api.use(cors({ origin: '*' }));

api.use(async function (ctx, next) {
  // console.log(ctx.href);
  await next();
});

api.listen(8080);
