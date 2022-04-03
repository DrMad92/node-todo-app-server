import { Request, Response } from 'express'

interface HelloResponse {
  hello: string
}

const helloBuilder: (name: string) => HelloResponse = (name: string) => ({
  hello: name,
})

export const rootHandler = (_req: Request, res: Response) =>
  res.send('API is working 🤓')

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req
  const response = helloBuilder(params.name)

  return res.json(response)
}
