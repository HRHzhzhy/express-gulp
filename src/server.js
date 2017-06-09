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

app.get('/home', (req, res) => {
  res.json({
    test: 'test',
    ary: ['a', 'b'],
    obj: {
      obj1: 'obj1'
    }
  })
})
app.listen('9999', () => {
  console.log('linstening 9999')
})
