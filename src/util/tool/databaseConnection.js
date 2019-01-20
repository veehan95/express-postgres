'use strict'
import 'module-alias/register'
import "@babel/polyfill"
import { Client } from 'pg'
import { database } from '@config/postgres.json'

let client

export default class PgConnection {

  /**
   * @function getClient
   * @return {Client} query function
   * @description return client
   */
  getClient() {
    client = new Client(database)
    client.connect()
    return client
  }
  

  /**
   * @function end
   * @description end the connection to postgresql
   */
  async end() {
    return client.end()
  }

}
