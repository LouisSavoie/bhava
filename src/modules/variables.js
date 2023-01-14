import * as dotenv from 'dotenv'
dotenv.config()

export const variables = () => {
  const vars = {}
  if (process.argv[2] === 'dev') {
    vars.MONGODBURI = process.env.BHAVADEV_MONGODBURI
    vars.TOKEN = process.env.BHAVADEV_TOKEN
    vars.APPID = process.env.BHAVADEV_APPID
    vars.SERVERID = process.env.BHAVADEV_SERVERID
    return vars
  }

  if (process.argv[2] === 'test') {
    vars.MONGODBURI = process.env.BHAVATESTER_MONGODBURI
    vars.TOKEN = process.env.BHAVATESTER_TOKEN
    vars.APPID = process.env.BHAVATESTER_APPID
    vars.SERVERID = process.env.BHAVATESTER_SERVERID
    return vars
  }

  vars.MONGODBURI = process.env.BHAVA_MONGODBURI
  vars.TOKEN = process.env.BHAVA_TOKEN
  vars.APPID = process.env.BHAVA_APPID
  vars.SERVERID = null
  return vars
}
