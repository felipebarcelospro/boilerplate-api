import { Request, Response } from 'express'

export const get = (request: Request, response: Response): Response => {
  return response.send({ message: 'APP API v1' })
}
