'use strict'
import Pino from './pinoLogger'
import TimeStamper from './timestamper'

const timestamper = TimeStamper
const logger = Pino

export {
  logger,
  timestamper
}
