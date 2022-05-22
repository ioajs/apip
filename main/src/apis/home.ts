import api from 'apip';

api.get('/', function (ctx) {
  ctx.body = { data: 'hello ioa' }
})
