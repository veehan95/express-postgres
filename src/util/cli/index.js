'use strict'
import 'module-alias/register'
import "@babel/polyfill"
import { logger } from '@epTools'
import CLI from './cli'

const cli = new CLI()

cli.command(process.argv.slice(2)).then(x => logger.info(x))
.catch(error => logger.error(error))
