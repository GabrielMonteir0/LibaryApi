import { pegaDataAgora } from "../../helpers/pegaDataAgora"

import {Request} from "express"

import { Livro } from "../models/LivroModel"

import { dataSource } from "../../db/dataSource"
const repositorioLivro = dataSource.getRepository(Livro)

export class LivroService{

    async postaLivro(req: Request): Promise<Livro>{
        var livro = new Livro()
        livro.titulo = req.body.titulo
        livro.autor = req.body.autor
        livro.genero = req.body.genero
        livro.ano = req.body.ano
        livro.vezesEmprestados = 0
        livro.aQuemEstaEmprestado = undefined
        livro.dataEmprestimo = undefined
        livro.dataDevolucao = undefined
        await repositorioLivro.save(livro)
        return livro
    }
    
    async pegaTodosLivros(): Promise<Livro[] | null> {
        const listaTodosLivros = await repositorioLivro.find()
        return listaTodosLivros
    }

    async pegaLivroPorId(req: Request): Promise<Livro | null>{
        const livro = await repositorioLivro.findBy({
            id: parseInt(req.params.id)
        })
        return livro[0]
    }

    async pegaLivroPorTitulo(req: Request): Promise<Livro | null>{
        const livro = await repositorioLivro.findBy({
            titulo: req.params.titulo
        })
        return livro[0]
    }
    
    async atualizaLivroPorId(req: Request): Promise<Livro[] | any>{
        var livro = await repositorioLivro.findBy({
            id: parseInt(req.params.id)
        })
        if(livro[0] === undefined){
            return livro[0]
        }
        if (req.body.titulo != undefined){
            livro[0].titulo = req.body.titulo
        }
        if (req.body.autor != undefined){
            livro[0].autor = req.body.autor
        }
        if (req.body.genero != undefined){
            livro[0].genero = req.body.genero
        }
        if (req.body.ano != undefined){
            livro[0].ano = req.body.ano
        }
        if (req.body.vezesEmprestados != undefined){
            livro[0].vezesEmprestados = req.body.vezesEmprestados
        }
        if (req.body.aQuemEstaEmprestado != undefined){
            livro[0].aQuemEstaEmprestado = req.body.aQuemEstaEmprestado
        }
        if (req.body.dataEmprestimo != undefined){
            livro[0].dataEmprestimo = req.body.dataEmprestimo
        }
        if (req.body.dataDevolucao != undefined){
            livro[0].dataDevolucao = req.body.dataDevolucao
        }
        repositorioLivro.save(livro[0])
        return livro[0]
    }

    async deletaLivroPorId(req: Request): Promise<Livro | any>{
        const livro = await repositorioLivro.findBy({
            id: parseInt(req.params.id)
        })
        if (livro[0] === undefined){
            return livro[0]
        }
        else{
            repositorioLivro.remove(livro[0])
            return livro[0]
        }
        
    }
}