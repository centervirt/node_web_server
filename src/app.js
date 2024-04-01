import { envs } from './config/env.js'
import { startServer } from './server/server.js'
//const { startServer } = require('./server/server') la forma anterios sin usar type module



const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })

}

(async() => {
    main()
})()


console.log ('Comenzamos a levantar el server !')