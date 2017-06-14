import express from 'express'
import log4js from 'log4js'

import { debug } from './tools/log'
const app = express()

app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }))

app.get('/', (req, res) => {
  debug('debug info', req.originalUrl)
  res.json({
    test: 'test',
    ary: ['a', 'b'],
    obj: {
      obj1: 'obj1'
    }
  })
})

app.get('/home/:mine', (req, res) => {
  res.json({
    test: 'test',
    ary: ['a', 'b'],
    obj: {
      obj1: 'obj1'
    },
    baseUrl: req.baseUrl,
    hostName: req.hostname,
    ip: req.ip,
    originalUrl: req.originalUrl,
    // /home/mine
    params: req.params,
    // query: req.qurey,
    path: req.path
  })
})

app.listen('9999', () => {
  console.log('linstening 9999')
})
