import app from 'apip/http';
app.get('/sms/:name/:sub', ctx => {
    const { params } = ctx;
    ctx.body = params;
});
