import * as express from 'express'
import { Express } from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'

import appConfig from '../config/app'
import apiRoute from '../routes/api'
import corsConfig from '../config/cors'

class App {
  public app: Express = express()

  constructor() {
    this.app
      .use(cors(corsConfig))
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }))
      .use('/api', apiRoute)
  }

  initServer() {
    this.app.listen(appConfig.port, () => console.log(`Your ${appConfig.name} is running on http://localhost:${appConfig.port}`))
  }
}

export default new App()
