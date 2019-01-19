'use strict'
import { default as cliMessage } from '@message/cli.json'
import ScriptBuilder from './ScriptBuilder'

export default class CLI {

  constructor() {}

  command(args) {
    switch (args[0].toLowerCase()) {
      case 'generate':
      case 'g':
        const scriptBuilder = new ScriptBuilder()

        return scriptBuilder.create(args[1], args[2])
      case 'help':
      case 'h':
        return cliMessage.help;
      case 'migrate':
      case 'm':
        return "TODO: migrate";
      default:
        throw new Error(cliMessage.commandError)
    }
  }

}
