/**
 * 网络请求与响应上下文
 */
export interface CTX {
  method: string
  header: object
  path: string
  host: string
  query: object
  href: string
  origin: string
  req: object
  res: object
  url: string
  request: { header: object, body: object }
  response: object
  params: object
  status?: number
  body: object | string
  get: (name: string) => unknown
  vary: () => void
  [name: string]: any
}

/**
 * 执行下一个 middleware
 */
export interface Next { (): Promise<void> }

/**
 * 中间件函数
 */
export interface Middleware {
  (ctx: CTX, next?: Next): Promise<void> | void
}