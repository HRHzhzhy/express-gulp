import log4js from 'log4js'
import { mail } from './mail'
// import { mail }
const writeLog = (type, params) => {
  if (process.env.NODE_ENV === 'production' && type === 'error') {
    mail({
      html: params.join('|')
    })
  }
  // get params, use '|' as a cut-off rule
  log4js.getLogger(type)[type](params.join('|'))
}
const error = (...params) => {
  writeLog('error', params)
}
const info = (...params) => {
  writeLog('info', params)
}
const trace = (...params) => {
  writeLog('trace', params)
}
const debug = (...params) => {
  writeLog('debug', params)
}
export const log = {
  error: error,
  info: info,
  trace: trace,
  debug: debug
}
export default exports
