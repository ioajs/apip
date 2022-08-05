## apip

专为 Serverless 环境构建，基于事件的轻量级微型框架，以 Koa Context 作为通用数据交互标准，替换并兼容 Koa.js 中间件生态。

Apip 核心仅包含一个精简的 Koa 洋葱圈模型和基础路由实现，其它功能均为可选，可以按需导入。

框架刻意设计为单例模式（实际应用中极少会出现在单个进程中创建多个 Koa 实例的场景），当需要创建多个实例时，拆分应用是更好的选择。

支持多种事件源，不管是 HTTP、RPC、消息队列还是其它，只要遵循 Koa Context 数据结构，即为有效事件，内置可选的 HTTP 事件绑定。

## Example

```ts
import { CTX } from "apip";
import app from "apip/http";
import grpc from "@apip/grpc";
import nats from "@apip/nats";
import cors from "@koa/cors";

app.use(cors({ origin: "*" }));

async function hello(ctx) {
  ctx.body = "hello word";
}

app.get("/", hello);
grpc.get("/", hello);
nats.get("/", hello);

app.post("/user", (ctx) => {
  ctx.body = "post";
});

nats.post("/user", (ctx) => {
  ctx.body = "post";
});

app.put("/user/:id", (ctx) => {
  ctx.body = "put";
});

app.del("/user/:id", (ctx) => {
  ctx.body = "delete";
});

app.listen(8080);
grpc.connect();
nats.connect();

import { Controller, Get, Post, Put, Del } from "apip/http";

// 装饰器风格的路由
@Controller()
class Demo {
  @Get("/home")
  home(ctx) {
    ctx.body = { body: "get" };
  }
  @Post("/home")
  home(ctx) {
    ctx.body = { body: "post" };
  }
  @Put("/home")
  home(ctx) {
    ctx.body = { body: "put" };
  }
  @Del("/home")
  home(ctx) {
    ctx.body = { body: "delete" };
  }
}

import imports from "apip/imports";

// 从指定目录中批量导入多个模块
await imports("./middleware/");
await imports("./apis/");
```