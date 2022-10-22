import express from 'express'
import createRouter, { router } from 'express-file-routing'
import path from 'path'

class Server {
  private app: express.Application

  constructor() {
    this.app = express()

    this.router()
    this.providers()
  }

  private router(): void {
    const config = {
      directory: path.join(__dirname, 'routes')
    }

    createRouter(this.app, config)
    this.app.use('/', router(config))

    console.log('- Router initialized')
  }

  private providers(): void {
    console.log('- Providers initialized')
  }

  public start(): void {
    this.app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  }
}

const server = new Server()
server.start()
