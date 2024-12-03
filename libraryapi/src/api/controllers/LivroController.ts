import { Request, Response } from "express";

import { LivroService } from "../services/LivroService";
const livroService = new LivroService()

enum ErroLivro{
    LIVRO_REQUISICAO_INVALIDA = "A requisição inserida foi considerada inválida",
    LIVRO_LISTA_NAO_ENCONTRADA = "Não foi possível devolver uma lista com os livros",
    LIVRO_NAO_ENCONTRADO = "Não foi possível encontrar o Livro procurado",
    LIVRO_NAO_ATUALIZADO = "Não foi possível atualizar este Livro",
    LIVRO_NAO_DELETADO = "Não foi possível deletar este Livro"
}

export class LivroController{

    async postaLivro(req: Request, res: Response){
        try{
            const livro = await livroService.postaLivro(req)
            res.status(200).json(livro)
        } catch(erro){
            console.error(erro)
            res.status(200).send(ErroLivro.LIVRO_REQUISICAO_INVALIDA)
        }       
    }

    async pegaTodosLivros(req: Request, res: Response){
        try{
            const listaLivros = await livroService.pegaTodosLivros()
            res.status(200).json(listaLivros)
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroLivro.LIVRO_LISTA_NAO_ENCONTRADA)
        }
    }

    async pegaLivroPorId(req: Request, res: Response){
        try{
            const livro = await livroService.pegaLivroPorId(req)
            if (livro != null){
                res.status(200).json(livro)
            }
            else{
                res.status(404).send(ErroLivro.LIVRO_NAO_ENCONTRADO)
            }
            
        } catch(erro){
            res.status(404).send(ErroLivro.LIVRO_NAO_ENCONTRADO)
        }  
    }

    async atualizaLivroPorId(req: Request, res: Response){
        try{
            const livro = await livroService.atualizaLivroPorId(req)
            if (livro != null){
                res.status(200).json(livro)
            }
            else{
                res.status(404).send(ErroLivro.LIVRO_NAO_ATUALIZADO)
            }
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroLivro.LIVRO_NAO_ATUALIZADO)
        }
    }

    async deletaLivroPorId(req: Request, res: Response){
        try{
            const livro = await livroService.deletaLivroPorId(req)
            if (livro != null){
                res.status(200).json(livro)
            }
            else{
                res.status(404).send(ErroLivro.LIVRO_NAO_DELETADO)
            }
            res.status(200).json(livro)
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroLivro.LIVRO_NAO_DELETADO)
        }
    }
}