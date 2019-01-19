'use strict'
import 'module-alias/register'
import { default as builderJson } from "@config/builder.json"

const messageBuilder = (intent_, scriptName_) => {
  return `${scriptName_} has been created in ${builderJson.directory[intent_]}`
}

export default class ScriptBuilder {

  create(intent_, scriptName_) {
    let intent
    switch (intent_.toLowerCase()) {
      case 'database':
        intent = 'database'
        break
      default:
        throw new Error("Unkown intent")
    }
    if (scriptName_ === undefined || scriptName_.length <= 0) throw new Error("Invalid script name")

    return messageBuilder(intent_, scriptName_)
  }

}
