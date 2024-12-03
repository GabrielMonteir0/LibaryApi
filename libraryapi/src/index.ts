// importando .env
require("dotenv-safe").config({silent: true});

// importando dataSource
import { dataSource } from './db/dataSource';

//importando app
import {app} from "./api/app"

dataSource.initialize().then( () =>{
    dataSource.synchronize(true)
    console.log(`Banco inicializado porta ${process.env.PORTA_BANCO}`)
    app.listen(process.env.PORTA_API, () =>{
        console.log(`API inicializada na porta ${process.env.PORTA_API}`)
    })
}, (erro) =>{
    console.error(erro)
})

