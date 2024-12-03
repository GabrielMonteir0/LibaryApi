// importando core da rota
import * as express from "express"
import { Request, Response } from "express"

//importando controller
import { DevolucaoController } from "../controllers/DevolucaoController"
const devolucaoController = new DevolucaoController()

//criando rotas
export const devolucaoRoute  = express.Router()

devolucaoRoute.post("/devolucao", (req: Request,res: Response) => devolucaoController.postaDevolucao(req,res))

