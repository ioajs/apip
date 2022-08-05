import { RouterTree } from '../main/routerTree.js';
import { middleware } from '../main/middleware.js';
export const routerTree = new RouterTree();
const { tree } = routerTree;
/**
 * 将 http request 请求转换为 ctx,
 */
export async function request(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    let bodyString = '';
    req.on('data', chunk => bodyString += chunk.toString());
    await new Promise((resolve, rejects) => {
        req.on('end', resolve);
        req.on('error', rejects);
    });
    let body;
    if (bodyString !== '') {
        body = JSON.parse(bodyString);
    }
    const header = {};
    let key = undefined;
    for (const item of req.rawHeaders) {
        if (key) {
            header[key] = item;
            key = undefined;
        }
        else {
            key = item;
        }
    }
    const { Host } = header;
    const { href, origin, pathname, searchParams } = new URL(req.url || '', `http://${Host}`);
    const query = {};
    for (const [key, value] of searchParams) {
        query[key] = value;
    }
    const method = req.method || '';
    const ctx = {
        method,
        header,
        path: pathname,
        host: Host,
        query,
        params: {},
        href,
        origin,
        req,
        res,
        url: req.url,
        tree,
        request: { header, body },
        response: {},
        get(name) { return header[name]; },
        vary() { },
        body: ''
    };
    await middleware(ctx);
    if (typeof ctx.body === 'object') {
        res.end(JSON.stringify(ctx.body));
    }
    else {
        res.end(ctx.body);
    }
}
