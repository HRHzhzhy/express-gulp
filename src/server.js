import express from 'express'
import log4js from 'log4js'
import { scheduleTask } from './controllers/schedule/tasks'
import { log } from './tools/log'
import { mail } from './tools/mail'
scheduleTask()
const app = express()
app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }))

app.get('/', (req, res) => {
  log.debug('debug info', req.originalUrl)
  // let opts = {
  //   to: '1121829929@qq.com',
  //   subject: 'nodemailer2.5.0邮件发送',
  //   // text: 'Hello world', // 文本
  //   html: `<h2>nodemailer基本使用:</h2><h3>
  //   <a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">
  //   http://blog.csdn.net/zzwwjjdj1/article/details/51878392</a></h3>`,
  //   attachments: [
  //     {
  //       filename: 'package.json',
  //       path: './package.json'
  //     },
  //     {
  //       filename: 'content',
  //       content: '发送内容'
  //     }
  //   ]
  // }
  // mail(opts, (err, info) => {
  //   log.debug(err, info)
  // })
  log.error('error mail test')
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
