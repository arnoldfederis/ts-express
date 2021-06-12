export const env = (key: string, defaultValue?: any) => {
  let value;

  ({[key]: value} = require('dotenv').config({ path: './src/bootstrap/.env' }).parsed)

  if (!value) {
    return defaultValue
  }

  if (value.indexOf(',') > -1) {
    return value.split(',')
  }

  return value;
}
