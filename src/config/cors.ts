import { env } from '../bootstrap/Helpers'

const cors = {
  origin: env('CORS_ORIGIN', '*'),

  methods: env('CORS_METHODS', ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE']),

  preflightContinue: env('CORS_PREFLIGHT_CONTINUE', false),

  optionsSuccessStatus: env('CORS_OPTION_SUCCESS_STATUS', 204),

  allowedHeaders: env('CORS_ALLOWED_HEADERS', '*'),
}

export default cors
