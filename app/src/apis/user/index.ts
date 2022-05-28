import api from 'apip';

api.get('/user', ctx => {
  ctx.body = { name: 'lili' }
})

api.get('/user/:id', ctx => {
  const { params } = ctx;
  ctx.body = params
})