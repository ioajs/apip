/** 导入容器 */
interface Container {
    [name: string]: unknown;
}
/**
 * 从指定目录中批量导入模块
 * @param dirPath 目录路径
 * @param container 导入容器
 */
export default function imports(dirPath: string, container?: Container): Promise<Container>;
export {};
