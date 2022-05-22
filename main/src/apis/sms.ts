import api from 'apip';

api.get('/sms/:name/:sub', function (ctx) {
  const { params } = ctx;
  ctx.body = params
})