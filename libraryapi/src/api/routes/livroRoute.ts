// importando core da rota
import * as express from "express"
import { Request, Response } from "express"

//importando controller
import { LivroController } from "../controllers/LivroController"
const livroController = new LivroController()

//criando rotas
export const livroRoute  = express.Router()

livroRoute.post("/livro", (req: Request,res: Response) => livroController.postaLivro(req,res))
livroRoute.get("/livro/", (req: Request,res: Response) => livroController.pegaTodosLivros(req,res))
livroRoute.get("/livro/:id", (req: Request,res: Response) => livroController.pegaLivroPorId(req,res))
livroRoute.patch("/livro/:id", (req: Request,res: Response) => livroController.atualizaLivroPorId(req,res))
livroRoute.delete("/livro/:id", (req: Request,res: Response) => livroController.deletaLivroPorId(req,res))

