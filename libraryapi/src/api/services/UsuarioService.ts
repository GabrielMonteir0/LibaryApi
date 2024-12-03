import {Request} from "express"
import { Usuario } from '../models/UsuarioModel';
import { dataSource } from '../../db/dataSource';

const repositorioUsuario = dataSource.getRepository(Usuario)

export class UsuarioService{
    
    async postaUsuario(req: Request){
        var usuario = new Usuario()
        usuario.nome = req.body.nome
        usuario.endereco = req.body.endereco
        usuario.email = req.body.email
        usuario.telefone = req.body.telefone
        usuario.livroEmprestado = undefined
        await repositorioUsuario.save(usuario)
        return usuario
    }
    
    async pegaTodosUsuarios(req: Request){
        const listaTodosUsuarios = await repositorioUsuario.find()
        return listaTodosUsuarios
    }

    async pegaUsuarioPorNome(req: Request){
        console.log("pegando usuário por login")
        const usuario = await repositorioUsuario.findBy({nome: req.body.nome})
        return usuario[0]
    }

    async pegaUsuarioPorId(req: Request){
        const usuario = await repositorioUsuario.findBy({
            id: parseInt(req.params.id)
        })
        return usuario[0]
    }

    async atualizaUsuarioPorId(req: Request){
        var usuario = await repositorioUsuario.findBy({
            id: parseInt(req.params.id)
        })
        if (usuario[0] === undefined){
            return usuario[0]
        }
        if (req.body.nome != undefined){
            usuario[0].nome = req.body.nome
        }
        if (req.body.endereco != undefined){
            usuario[0].endereco = req.body.endereco
        }
        if (req.body.email != undefined){
            usuario[0].email = req.body.email
        }
        if (req.body.telefone != undefined){
            usuario[0].telefone = req.body.telefone
        }
        if (req.body.livroEmprestado != undefined){
            usuario[0].livroEmprestado = req.body.livroEmprestado
        }
        repositorioUsuario.save(usuario[0])
        return usuario[0]
    }

    async deletaUsuarioPorId(req: Request){
        var usuario = await repositorioUsuario.findBy({
            id: parseInt(req.params.id)
        })
        if (usuario[0] === undefined){
            return usuario[0]
        }
        else{
            repositorioUsuario.remove(usuario[0])
            return usuario[0]
        }
    }
}