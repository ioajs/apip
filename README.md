## apip

为 serverless 优化的精简 http server，用于替换 koa.js，并继续兼容 koa 中间件生态。

包含一个精简的 koa 洋葱圈模型和基础路由实现，以及装饰器风格的的路由声明。

## Example

```ts
import api, { Controller, Get, Post } from 'apip';
import cors from '@koa/cors';

api.use(cors({ origin: '*' }));

api.listen(8080);

api.get('/', function (ctx) {
  ctx.body = 'hello word'
})

api.post('/user', function (ctx) {
  ctx.body = 'post'
})

api.put('/user/:id'', function (ctx) {
  ctx.body = 'put'
})

api.del('/user/:id', function (ctx) {
  ctx.body = 'delete'
})

@Controller()
class Demo {
  @Get('/test')
  test(ctx) {
    ctx.body = { body: 123 }
  }
  @Post('/test')
  test(ctx) {
    ctx.body = { body: 123 }
  }
}
```
