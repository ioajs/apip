import type { CTX } from 'apip';
import { Controller, Get, Post } from 'apip/http';

@Controller()
class Demo {
  @Get('/test')
  get(ctx: CTX) {
    ctx.body = {
      type: 'test',
      body: 555
    }
  }
  @Post('/test')
  post(ctx: CTX) {
    ctx.body = { body: 123 }
  }
}