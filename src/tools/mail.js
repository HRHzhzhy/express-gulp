import nodemailer from 'nodemailer'
import { log } from './log'
import { mailInfo } from '../config/mail.config'
const transporter = nodemailer.createTransport({
  service: mailInfo.service,
  auth: {
    user: mailInfo.user,
    pass: mailInfo.auth
  }
})
const mailOption = {
  from: mailInfo.user,
  to: mailInfo.support,
  subject: mailInfo.subject
}
/**
 * send mail to user
 * @param {Object} opts {"to":"user@mail.com","subject":"mail title","html":"<h2>mail content:</h2><h3>\n<a href="https://www.google.com"> \n Google</a></h3>","attachments":[{"filename":"file","path":"file path"}]}
 * @param {Function} cb
 */
export const mail = (opts, cb) => {
  Object.assign(mailOption, opts)
  return transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      log.debug(`${JSON.stringify(mailOption)} err: ${err}`)
    }
    if (typeof cb === 'function') {
      cb(err, info)
    }
  })
}
