//express config 
import { ApolloServer } from 'apollo-server'

//app import
import gqlProvider from '../grapql'
import AppLogger from '../core/logger/AppLogger'

//mongoose part
import DBConnect from '../db/mongo/db/DBConnect'
DBConnect()

// configure server GraphQL schema
const server = new ApolloServer({ schema: gqlProvider })

// start server
const portNumber = process.env.GRAPHQL_APP_PORT || 4000
server.listen(portNumber).then(({ url }) => {
  AppLogger.info('server started :  ' + url)
})