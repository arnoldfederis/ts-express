import { Request, Response } from 'express'
import { env } from "../../bootstrap/Helpers";

class HomeController {
  public index({ res }: { res: Response }) {
    res.send({
      app_name: `${env('APP_NAME')}`
    })
  }

  public show(req: Request, res: Response) {
    res.send({
      params: req.params
    })
  }
}

export default new HomeController()
