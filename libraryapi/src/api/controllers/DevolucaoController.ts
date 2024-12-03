import { Request, Response } from "express";
import { UsuarioDevolveLivroEmprestado } from "../usecases/UsuarioDevolveLivroEmprestado";


enum ErroDevolucao{
    DEVOLUCAO_REQUISICAO_INVALIDA = "A requisição inserida foi considerada inválida",
    DEVOLUCAO_LISTA_NAO_ENCONTRADA = "Não foi possível devolver uma lista com os devolucaos",
    DEVOLUCAO_NAO_ENCONTRADO = "Não foi possível encontrar o Devolucao procurado",
    DEVOLUCAO_NAO_ATUALIZADO = "Não foi possível atualizar este Devolucao",
    DEVOLUCAO_NAO_DELETADO = "Não foi possível deletar este Devolucao"
}

export class DevolucaoController{

    async postaDevolucao(req: Request, res: Response){
        try{
            const informacoesDevolucao = UsuarioDevolveLivroEmprestado.execute(req.body.nomeUsuario, req.body.tituloLivro)
            console.log((await informacoesDevolucao).titulo)
            res.status(200).json(await informacoesDevolucao)
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroDevolucao.DEVOLUCAO_REQUISICAO_INVALIDA)
        }       
    }

}