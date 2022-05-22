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
  body: ''
  get: (name: string) => unknown
  vary: () => void
  [name: string]: any
}

export interface Next {
  (): Promise<void>
}
