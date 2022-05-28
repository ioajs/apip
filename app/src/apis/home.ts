import api from 'apip';

api.get('/', ctx => {
  ctx.body = { data: 'hello ioa' }
})
