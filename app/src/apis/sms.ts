import api from 'apip';

api.get('/sms/:name/:sub', ctx => {
  const { params } = ctx;
  ctx.body = params
})