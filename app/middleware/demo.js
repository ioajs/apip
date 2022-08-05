export default function (options) {
    return function (ctx, next) {
        ctx.test = options;
        next();
    };
}
