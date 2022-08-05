import app from 'apip/http';

app.get('/', ctx => {
  ctx.body = { data: 'hello ioa' }
})
