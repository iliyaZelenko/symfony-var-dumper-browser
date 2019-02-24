import chalk from 'chalk'
import * as express from 'express'
import { Server, createServer } from 'http'
import { Express } from 'express-serve-static-core'
import * as opn from 'opn'
import routing from '~/routing'
import App from '~/App'

export default class AppServer {
  private readonly DEFAULT_PORT = 9000
  private readonly express: Express // : express.Application
  private readonly server: Server
  private readonly port: number
  private readonly host: string
  private readonly open: boolean
  private readonly app: App

  public constructor (app: App, port: number, host: string, open: boolean) {
    this.app = app
    this.port = port
    this.host = host
    this.open = open

    this.express = express()
    this.server = createServer(this.express)
  }

  public start (): this {
    this.listen()
    this.routing()

    return this
  }

  public getServer (): Server {
    return this.server
  }

  public getExpress (): Express {
    return this.express
  }

  public getPort (): number {
    return this.DEFAULT_PORT
  }

  protected listen (): void {
    this.server.listen(this.port, this.host, () => {
      if (this.open) {
        // открывает в дефолтном браузере
        opn(`http://${this.host}:` + this.port)
      }

      console.log(chalk.green(`Site is running on port ${chalk.bold(this.port.toString())}.`))
    })
  }

  protected routing (): void {
    routing(this.app, this)
  }
}
