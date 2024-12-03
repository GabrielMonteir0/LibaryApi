import { dataSource } from "../../db/dataSource";
import { pegaDataAgora } from "../../helpers/pegaDataAgora";
import { Livro } from "../models/LivroModel";
import { Usuario } from "../models/UsuarioModel";
import { LivroService } from "../services/LivroService";
import { UsuarioService } from "../services/UsuarioService";

const repositorioLivro = dataSource.getRepository(Livro)
const repositorioUsuario = dataSource.getRepository(Usuario)


export class UsuarioDevolveLivroEmprestado{
    static async  execute(nomeUsuario: string, tituloLivro: string){
        const usuario = await new UsuarioService().pegaUsuarioPorNome({body: {nome: nomeUsuario}})
        const livro = await new LivroService().pegaLivroPorTitulo({params: {titulo: tituloLivro}})
        console.log('quem pegou o livro ? ', livro.aQuemEstaEmprestado)
        if (livro.aQuemEstaEmprestado == null) throw new Error('O livro que se pretende devolver não está emprestado')
        if (usuario.livroEmprestado == null) throw new Error('O usuário não tomou nenhum livro emprestado')
        console.log('livro emprestado: ', usuario.livroEmprestado)
        console.log('id do livro: ', livro.id)
        if (usuario.livroEmprestado !== livro.id) throw new Error(`O usuário não tomou emprestado o livro ${livro.titulo}` )
        const dataEmprestimo = livro.dataEmprestimo
        usuario.livroEmprestado = null
        livro.aQuemEstaEmprestado = null
        livro.dataEmprestimo = null
        livro.dataDevolucao = pegaDataAgora()
        repositorioLivro.save(livro)
        repositorioUsuario.save(usuario)
        return ({
            titulo: livro.titulo,
            usuario: usuario.nome,
            dataEmprestimo: dataEmprestimo,
            dataDevolucao: pegaDataAgora()

        })
    }
}