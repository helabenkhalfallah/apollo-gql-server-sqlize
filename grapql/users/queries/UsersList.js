import { GraphQLList } from 'graphql'
// import AppModels from '../../../db/mongo/models/index'
import User from '../types/User'
import PsqlDB from '../../../db/psql/models'
import AppLogger from '../../../core/logger/AppLogger'

// Query with mongoose
/* export default {
  type: new GraphQLList(User),
  resolve() {
    const users = AppModels.UserModel.find().exec()
    if (!users) {
      throw new Error('Error getting users')
    }
    return users
  }
} */

// Query with psql
export default {
  type: new GraphQLList(User),
  resolve() {
    return new Promise((resolve, reject) => {
      PsqlDB.users.findAll().then(users => {
        // retrieve all users
        AppLogger.info('PsqlDB findAll users : ' + users)
        resolve(users)
      }).catch((error) => {
        // return error
        AppLogger.info('PsqlDB findAll error : ' + error)
        reject(error)
      })
    })
  }
}