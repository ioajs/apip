import { Controller, Get, Post } from 'apip';

@Controller()
class Demo {
  @Get('/test')
  get(ctx) {
    ctx.body = {
      type: 'login',
      body: 555
    }
  }
  @Post('/test')
  post(ctx) {
    ctx.body = { body: 123 }
  }
}