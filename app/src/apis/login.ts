import api from 'apip';

api.post('/login', function (ctx) {
  ctx.body = {
    type: 'login',
    body: ctx.request.body
  }
})