'use strict'
import { default as pinoLib } from 'pino'
import { default as config } from '@config/config.json'

const pino = pinoLib(config.pinoSetting)

export default class Pino {

  static info(str) { pino.info(str) }

  static debug(str) { pino.debug(str) }

  static error(err) { pino.error(err) }

  static warn(str) { pino.warn(str) }

  static fatal(str) { pino.fatal(str) }

}
