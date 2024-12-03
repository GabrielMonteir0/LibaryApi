import * as express from "express"
import { Request, Response} from "express"

import { UsuarioController } from "../controllers/UsuarioController"
const usuarioController = new UsuarioController()

// criando rotas
export const usuarioRoute = express.Router()

usuarioRoute.post("/usuario", (req: Request, res: Response) => usuarioController.postaUsuario(req, res))
usuarioRoute.get("/usuario", (req: Request, res: Response) => usuarioController.pegaTodosUsuarios(req,res))
usuarioRoute.get("/usuario/:id", (req: Request, res: Response) => usuarioController.pegaUsuarioPorId(req,res))
usuarioRoute.patch("/usuario/:id", (req: Request, res: Response) => usuarioController.atualizaUsuarioPorId(req,res))
usuarioRoute.delete("/usuario/:id", (req: Request, res: Response) => usuarioController.deletaUsuarioPorId(req,res))