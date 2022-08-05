import test from 'jtm';
import axios from 'axios';
test('get /', async (t) => {
    const { data } = await axios.get("/");
    t.deepEqual(data, { data: 'hello ioa' });
});
test('get /user', async (t) => {
    const { data } = await axios.get("/user");
    t.deepEqual(data, [
        { name: 'lili' },
        { name: 'dog' }
    ]);
});
test('get /user/:id', async (t) => {
    const { data } = await axios.get("/user/1");
    t.deepEqual(data, { id: '1', name: 'dog' });
});
test('get /sms/:name/:sub', async (t) => {
    const { data } = await axios.get("/sms/sub/1232");
    t.deepEqual(data, {
        name: "sub",
        sub: "1232"
    });
});
