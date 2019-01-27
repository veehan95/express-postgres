'use strict'
import 'module-alias/register'
import { default as cliMessage } from '@message/cli.json'
import { default as command } from '@config/cli.json'
import "@babel/polyfill"
import ScriptBuilder from './ScriptBuilder'

const functions = {
  generate: (args) => {
    const scriptBuilder = new ScriptBuilder()
    return scriptBuilder.create(args.slice(1))
  },
  help: () => ['Help'].concat(Object.keys(command).map(command => command)).join('\r\n\t'),
  migrate: () => "TODO: migrate",
}

const commandSearcher = (commandInput) => {
  for (var i = 0; i < Object.keys(command).length; i++) {
    if (Object.keys(command)[i].split('|').indexOf(commandInput) >= 0) return Object.keys(command)[i]
  }
  return false
}

export default class CLI {

  constructor() {}

  async command(args) {
    const commandSearchResult = commandSearcher(args[0])
    if (commandSearchResult) {
      return functions[command[commandSearchResult].function](args)
    } else {
      throw new Error(cliMessage.commandError)
    }
  }

}
