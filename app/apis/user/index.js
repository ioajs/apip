import app from 'apip/http';
app.get('/user', ctx => {
    ctx.body = [
        { name: 'lili' },
        { name: 'dog' }
    ];
});
app.get('/user/:id', ctx => {
    const { params } = ctx;
    ctx.body = {
        ...params,
        name: 'dog'
    };
});
