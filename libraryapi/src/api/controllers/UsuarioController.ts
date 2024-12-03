import {Request, Response} from "express"

import { UsuarioService } from "../services/UsuarioService"
const usuarioService = new UsuarioService()

enum ErroUsuario{
    USUARIO_REQUISICAO_INVALIDA = "A requisição inserida foi considerada inválida",
    USUARIO_LISTA_ERRO = "Houve um erro quando tentamos buscar a lista",
    USUARIO_NAO_ACHADO = "Não foi possível encontrar este usuário",
    USUARIO_NAO_ATUALIZADO = "Não foi possível atualizar este usuário",
    USUARIO_NAO_DELETADO = "Não foi possível deletar este usuário"
}
export class UsuarioController{
    
    async postaUsuario(req: Request, res: Response){
        try{
            const usuario = await usuarioService.postaUsuario(req)
            res.status(200).json(usuario)
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroUsuario.USUARIO_REQUISICAO_INVALIDA)
        }
        
    }

    async pegaTodosUsuarios(req: Request, res: Response){
        try{
           const listaUsuarios = await usuarioService.pegaTodosUsuarios(req) 
            res.status(200).json(listaUsuarios)
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroUsuario.USUARIO_REQUISICAO_INVALIDA)
        }
    }

    async pegaUsuarioPorId(req: Request, res: Response){
        try{
            const usuario = await usuarioService.pegaUsuarioPorId(req)
            if (usuario != null){
                res.status(200).json(usuario)
            }
            else{
                res.status(404).send(ErroUsuario.USUARIO_NAO_ACHADO)
            }
        } catch(erro){
            res.status(400).send(ErroUsuario.USUARIO_REQUISICAO_INVALIDA)
        }
    }

    async atualizaUsuarioPorId(req: Request, res: Response){
        try{
            const usuario = await usuarioService.atualizaUsuarioPorId(req)
            if (usuario != undefined){
                res.status(200).json(usuario)
            }
            else{
                res.status(404).send(ErroUsuario.USUARIO_NAO_ATUALIZADO)
            }
        } catch(erro){
            console.log(erro)
            res.status(400).send(ErroUsuario.USUARIO_REQUISICAO_INVALIDA)
        }
    }

    async deletaUsuarioPorId(req: Request, res: Response){
        try{
            const usuario = await usuarioService.deletaUsuarioPorId(req)
            if (usuario != null){
                res.status(200).json(usuario)
            }
            else{
                res.status(404).send(ErroUsuario.USUARIO_NAO_DELETADO)
            }
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroUsuario.USUARIO_REQUISICAO_INVALIDA)
        }
    }
}