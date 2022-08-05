import path from 'path';
import fsp from 'fs/promises';
/**
 * 目录、模块递归加载器
 * @param absolutePath 绝对路径
 * @param container 数据存储容器
 */
async function loader(absolutePath, container = {}) {
    const childrens = await fsp.readdir(absolutePath);
    const promises = [];
    for (const item of childrens) {
        const subPath = path.join(absolutePath, item);
        const promise = fsp.stat(subPath).then(async (stat) => {
            if (stat.isFile()) {
                // 仅导入扩展名为 .js 的文件
                if (subPath.substring(subPath.length - 3) === '.js') {
                    console.log('>', subPath);
                    container[item] = await import(subPath);
                }
            }
            else {
                container[item] = await loader(subPath);
            }
        });
        promises.push(promise);
    }
    await Promise.all(promises);
    return container;
}
/**
 * 从指定目录中批量导入模块
 * @param dirPath 目录路径
 * @param container 导入容器
 */
export default function imports(dirPath, container = {}) {
    const { stack } = new Error();
    // @ts-ignore
    const atPath = stack.split('\n')[2];
    // @ts-ignore
    const [filePath] = atPath.match(/(\/[^/]+)+/);
    const pathSplit = decodeURI(filePath).split('/');
    pathSplit.pop();
    const absolutePath = path.join(pathSplit.join('/'), dirPath);
    return loader(absolutePath, container);
}
