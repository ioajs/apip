import api from 'apip';

api.get('/user', function (ctx) {
  ctx.body = { name: 'lili' }
})

api.get('/user/:id', function (ctx) {
  const { params } = ctx;
  ctx.body = params
})