import { env } from '../bootstrap/Helpers'

const app = {
  port: env('APP_PORT', 4000),

  name: env('APP_NAME', 'Typescript Express'),

  enable_cors: env('CORS_ENABLE', false)
}

export default app;
