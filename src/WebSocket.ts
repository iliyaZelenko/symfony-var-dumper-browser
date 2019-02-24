import * as socketIo from 'socket.io'
import * as fs from 'fs'
import * as fsExtra from 'fs-extra'
import App from '~/App'
import injectHtml, { processUpdatedHtml, getArticlesCount } from '~/injectHtml/InjectHtml'

export default class WebSocket {
  private io: SocketIO.Server
  private app: App
  private initialContent?: string | false
  private fileToWatch: any // string
  private currentSocket?: SocketIO.Socket // string

  public constructor (app: App) {
    this.app = app
    this.io = socketIo(this.app.getAppServer().getServer())
  }

  public start () {
    this.listen()
  }

  private async listen () {
    // в мс
    const watchFileInterval = 500
    this.fileToWatch = this.app.getFileToWatch()
    let watcher

    // console.log('!!!', fileToWatch)
    let initAdded = false

    this.io.on('connect', async (socket: SocketIO.Socket) => {
      // console.log('Client connected.')
      this.currentSocket = socket

      this.initialContent = await this.getFileContent(this.fileToWatch)

      if (!initAdded) {
        // сразу после подключения менять весь контент
        const html = await this.generateInitialHtml(this.initialContent)
        this.currentSocket.emit('apply full content', html)

        initAdded = true
      }

      // TODO watch советует использовать дока
      watcher = this.watchFile.bind(this)
      fs.watchFile(this.fileToWatch, { interval: watchFileInterval }, watcher)

      this.currentSocket.on('feedback', console.log)

      this.currentSocket.on('disconnect', () => {
        fs.unwatchFile(this.fileToWatch, watcher)
        delete this.currentSocket

        // console.log('Client disconnected.')
      })
    })
  }

  private async getFileContent (fileToWatch) {
    return fsExtra.readFile(fileToWatch, 'utf8')
  }

  private async generateInitialHtml (content) {
    return injectHtml(content, this.app.getAppServer().getPort())
  }

  private async watchFile (curr, prev) {
    // console.log('Content changed.')
    if (!this.currentSocket) {
      // такого сценария не должно произойти
      return
    }

    const content = await this.getFileContent(this.fileToWatch)

    if (this.initialContent === '') {
      const html = await this.generateInitialHtml(content)

      this.currentSocket.emit('apply full content', html, getArticlesCount(html))

      // ignore initialContent next time
      this.initialContent = false
    } else {
      const html = processUpdatedHtml(content)

      if (html) {
        this.currentSocket.emit('changed', html)
      }
    }
    // console.log(`the current mtime is: ${curr.mtime}`)
    // console.log(`the previous mtime was: ${prev.mtime}`)
  }
}
