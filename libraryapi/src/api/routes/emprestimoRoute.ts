// importando core da rota
import * as express from "express"
import { Request, Response } from "express"

//importando controller
import { EmprestimoController } from "../controllers/EmprestimoController"
const emprestimoController = new EmprestimoController()

//criando rotas
export const emprestimoRoute  = express.Router()

emprestimoRoute.post("/emprestimo", (req: Request,res: Response) => emprestimoController.postaEmprestimo(req,res))

