'use strict'
import 'module-alias/register'
import "@babel/polyfill"
import { default as config } from "@config/config.json"
import { timestamper } from '@epTools'

const createTable = (intentDict, objName) => {
  const a = 1
  return new Promise((resolve, reject) => {
    if (false) reject(new Error('done'))

    let action, target
    ({action, target} = intentDict)
    resolve([`${action}${target}`, scriptNamer(action, target, objName)])
  })
}

/**
 * @function intentBreaker
 * @param {dictionary<string>} intent - all relevent informations of intent
 * @return directory of script, action, target
 */
const intentBreaker = (intent_) => {
  switch (intent_.target.toLowerCase()) {
    case 'table':
      return {action: 'alter', target: 'table'}
    case 'database':
      return {action: 'alter', target: 'database'}
    default:
      throw new Error("Unkown intent")
  }
}

/**
 * @function messageBuilder
 * @param {string} directory_ - directory where script created
 * @param {string} scriptName_ - name of script created
 * @return crteate status message
 */
const messageBuilder = (directory_, scriptName_) =>
  `${scriptName_} has been created in ${directory_}`

/**
 * @function scriptNamer
 * @param {string} scriptName_ - name of script to create
 * @return the name of script to be created
 */
const scriptNamer = (action, target, name) => {
  if (name === undefined || name.length <= 0) {
    throw new Error("Missing script name")
  }
  return timestamper.attach(`${action}_${target}_${name}`, config.scriptNaming)
}

/**
 * @class scriptBuilder
 * @description the exported class to build scripts
 */
export default class ScriptBuilder {
  /**
   * @functions create
   * @param {object<string>} intent_ - all information related to intent
   * @param {string} scriptName_ - name of script
   * @return create status
   */
  create(args) {
    return createTable({action: args[0], target: args[1]}, args[2])
      .then(resolved => messageBuilder(resolved[0], resolved[1]))
      .catch(err => { throw err })
  }
}
