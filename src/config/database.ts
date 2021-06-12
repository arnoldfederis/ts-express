import { env } from '../bootstrap/Helpers'

const database = {
  host: env('DB_HOST', 'localhost'),

  name: env('DB_NAME', 'my_db'),

  port: env('DB_PORT', '27017'),
}

export default database;
