'use strict'
import 'module-alias/register'
import { logger } from '@epTools'
import CLI from './cli'

const cli = new CLI()

try {
  logger.info(cli.command(process.argv.slice(2)))
} catch (e) {
  logger.error(e)
}
