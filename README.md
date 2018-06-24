# apollo-gql-server-sqlize
Apollo graphql server, graphql, mongoose, sequelize, postgress

-------- General Settings ------------

1. add an index.js file

2. init a node project :
npm init

3. configure lint :
yarn add eslint
./node_modules/.bin/eslint --init
and then configure eslintrc.js file.

4. add a /server/server.js file

5. configure dotenv :
yarn add dotenv
in index.js file and before any load :

```js
//dot env configuration
var dotenv = require('dotenv')
dotenv.load()

//launch server after loading env var
import './server/server.js'
```

6. add nodemon so that it will automatically reload the app on everychange
```js
yarn add nodemon --dev
```
https://javierfernandes.gitbooks.io/rest-api-babel-express/content/nodeapp.html


7. add babel to run ES6
```js
yarn add babel-cli babel-preset-es2015 babel-preset-stage-0
```

8. add  .babelrc
```js
{
  "presets": ["es2015", "stage-0"]
}
```

9. modify package.json to run with babel
```js
"start": "nodemon --exec babel-node -- index.js"
```

10. add .env file that will contains all app confs env params

11. customize logger file
```js
yarn add morgan winston winston-daily-rotate-file
```

-------- End Settings ------------

-------- Apollo Server Settings ------------

12. install apollo server 
```js
yarn add apollo-server@rc graphql
```

-------- End Settings ------------


-------- Mongoose Settings ------------
13. add mongoose
```js
yarn add mongoose
```
-------- End Settings ------------

-------- Postgres Settings ------------
14. install sequelize http://docs.sequelizejs.com/manual/installation/getting-started.html

```js
yarn add sequelize-cli sequelize pg pg-hstore
```

15. configure sequelize

Add .sequelizerc on which you define sequelize path for configuration :

```js
var path = require('path');
module.exports = {
  'config': path.resolve('./db/psql/config', 'config.json'),
  'migrations-path': path.resolve('./db/psql', 'migrations'),
  'models-path': path.resolve('./db/psql', 'models'),
  'seeders-path': path.resolve('./db/psql', 'seeders')
}
```

Add new model :
```js
node_modules/.bin/sequelize model:create --name UserEntity --attributes "firstName: string, lastName: string, email: string,birthday: date, job: string, created_at : date, updated_at : date"
```

This will generate : a UserEntity file under models folder. a migrations file under migrations folder.

run below command to create table :

```js
node_modules/.bin/sequelize db:migrate
```

-------- End Settings ------------

16. From mongoose to psql, things that must changes :
models
graphql resolve
We keep everything else. 
On UsersList.js file we show an example with mongoose and psql queries :

```js
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
```

For more details on how to use sequelize for queries and CRUD :
https://github.com/helabenkhalfallah/node-express-mongoose-sqlize