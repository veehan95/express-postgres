'use strict'
import { default as pinoLib } from 'pino'
import { default as pinoSetting } from '@config/logger.json'

const pino = pinoLib(pinoSetting)

export default class Pino {

  static info(str) { pino.info(str) }

  static debug(str) { pino.debug(str) }

  static error(err) { pino.error(err) }

  static warn(str) { pino.warn(str) }

  static fatal(str) { pino.fatal(str) }

}
