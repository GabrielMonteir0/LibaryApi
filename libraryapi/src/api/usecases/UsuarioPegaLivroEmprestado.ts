import { pegaDataAgora } from "../../helpers/pegaDataAgora";
import { LivroService } from "../services/LivroService";
import { UsuarioService } from "../services/UsuarioService";

import { dataSource } from "../../db/dataSource"
import { Livro } from "../models/LivroModel";
import { Usuario } from "../models/UsuarioModel";

const repositorioLivro = dataSource.getRepository(Livro)
const repositorioUsuario = dataSource.getRepository(Usuario)



export class UsuarioPegaLivroEmprestado{
    static async  execute(nomeUsuario: string, tituloLivro: string, dataDevolucao: string){
        const usuario = await new UsuarioService().pegaUsuarioPorNome({body: {nome: nomeUsuario}})
        const livro = await new LivroService().pegaLivroPorTitulo({params: {titulo: tituloLivro}})
        if (livro.aQuemEstaEmprestado !== null) throw new Error('O livro já está emprestado')
        if (usuario.livroEmprestado !== null) throw new Error('O usuário já tomou um livro emprestado e precisa devolver seu livro antes de pegar outro')
        usuario.livroEmprestado = livro.id
        livro.vezesEmprestados++
        livro.aQuemEstaEmprestado = usuario.id
        livro.dataEmprestimo = pegaDataAgora()
        livro.dataDevolucao = dataDevolucao
        repositorioLivro.save(livro)
        repositorioUsuario.save(usuario)
    }
}