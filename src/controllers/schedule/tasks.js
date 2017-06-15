import { setSchedule } from '../../tools/schedule'

export const scheduleTask = () => {
  setSchedule('3 * * * * *', () => {
    console.log('this is a schedule', new Date())
  })
}
export default exports
