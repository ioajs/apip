import http from 'apip/http';
import nats from 'apip/nats';
import imports from 'apip/imports';
import demo from './middleware/demo.js';
http.use(demo({ origin: '*' }));
http.use(async (ctx, next) => {
    // console.log(ctx.href);
    await next();
});
http.listen(8080);
nats.use(demo({ paht: '*' }));
nats.connect({});
await imports('./apis/');
