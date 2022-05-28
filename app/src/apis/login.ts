import api from 'apip';

api.post('/login', ctx => {
  ctx.body = {
    type: 'login',
    body: ctx.request.body
  }
})