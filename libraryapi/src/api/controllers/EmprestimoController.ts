import { Request, Response } from "express";
import {UsuarioPegaLivroEmprestado} from '../usecases/UsuarioPegaLivroEmprestado'


enum ErroEmprestimo{
    EMPRESTIMO_REQUISICAO_INVALIDA = "A requisição inserida foi considerada inválida",
    EMPRESTIMO_LISTA_NAO_ENCONTRADA = "Não foi possível devolver uma lista com os emprestimos",
    EMPRESTIMO_NAO_ENCONTRADO = "Não foi possível encontrar o Emprestimo procurado",
    EMPRESTIMO_NAO_ATUALIZADO = "Não foi possível atualizar este Emprestimo",
    EMPRESTIMO_NAO_DELETADO = "Não foi possível deletar este Emprestimo"
}

export class EmprestimoController{

    async postaEmprestimo(req: Request, res: Response){
        try{
            UsuarioPegaLivroEmprestado.execute(req.body.nomeUsuario, req.body.tituloLivro, req.body.dataDevolucao)
            res.status(200).json({message: `${req.body.tituloLivro} foi emprestado com sucesso para ${req.body.nomeUsuario} com data de devoulação prevista para ${req.body.dataDevolucao}`})
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroEmprestimo.EMPRESTIMO_REQUISICAO_INVALIDA)
        }       
    }

}