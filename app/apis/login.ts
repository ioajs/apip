import app from 'apip/http';

app.post('/login', ctx => {
  ctx.body = {
    type: 'login',
    body: ctx.request.body
  }
})