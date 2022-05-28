## apip

为 serverless 优化的精简 http server，用于替换 koa.js，并继续兼容 koa 中间件生态。

包含一个精简的 koa 洋葱圈模型和基础路由实现（支持装饰器风格的路由），以及可选的批量模块导入功能。

## Example

```ts
import api, { Controller, Get, Post, imports } from "apip";
import cors from "@koa/cors";

api.use(cors({ origin: "*" }));

api.listen(8080);

api.get("/", (ctx) => {
  ctx.body = "hello word";
});

api.post("/user", (ctx) => {
  ctx.body = "post";
});

api.put("/user/:id", (ctx) => {
  ctx.body = "put";
});

api.del("/user/:id", (ctx) => {
  ctx.body = "delete";
});

// 装饰器风格的路由
@Controller()
class Demo {
  @Get("/demo")
  test(ctx) {
    ctx.body = { body: 123 };
  }
  @Post("/demo")
  test(ctx) {
    ctx.body = { body: 123 };
  }
}

// 从指定目录中批量导入多个模块
await imports('./middleware/');
await imports('./apis/');
```
