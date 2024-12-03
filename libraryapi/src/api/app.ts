

// importando rotas
import { livroRoute } from "./routes/livroRoute";
import { usuarioRoute } from "./routes/usuarioRoute";
import { emprestimoRoute } from "./routes/emprestimoRoute";
import { devolucaoRoute } from "./routes/devolucaoRoute";


//importando core da api
import * as express from "express"
import * as bodyParser from "body-parser";
import * as cors from "cors"

// criando o app
export const app = express()

//aplicando middlewares
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

//utilizando rotas da api
app.use("/api", livroRoute)
app.use("/api", usuarioRoute) 
app.use("/api", emprestimoRoute) 
app.use("/api", devolucaoRoute) 

