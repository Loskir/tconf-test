const {Optional, String, Record} = require('runtypes')
const {default: loadConfig} = require('tconf')

const Config = Record({
  test: Optional(String),
})

const config = loadConfig({
  path: './config',
  schema: Config,
})

console.log(config)
