# apollo-gql-server-sqlize
Apollo graphql server, graphql, sqlize, postgress

-------- Settings ------------

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


-------- End Settings ------------