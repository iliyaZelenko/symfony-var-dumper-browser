// , Request, Response
import * as fs from 'fs-extra'
import injectHtml from '~/injectHtml/InjectHtml'
import AppServer from '~/AppServer'
import App from '~/App'

export default (app: App, appServer: AppServer) => {
  const express = appServer.getExpress()
  const fileToWatch = app.getFileToWatch()

  express.get('/', async (req, res) => {
    const html = await fs.readFile(fileToWatch, 'utf8')

    res.send(
      injectHtml(html, appServer.getPort())
    )
  })

  express.get('/admin', (req, res) => {
    res.send('Admin page')
  })
}
