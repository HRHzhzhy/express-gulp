import log4js from 'log4js'
const writeLog = (type, params) => {
  // get params, use '|' as a cut-off rule
  log4js.getLogger(type)[type](params.join('|'))
}
export const error = (...params) => {
  writeLog('error', params)
}
export const info = (...params) => {
  writeLog('info', params)
}
export const trace = (...params) => {
  writeLog('trace', params)
}
export const debug = (...params) => {
  writeLog('debug', params)
}
export default exports
