import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Livro{
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column("text") 
    titulo: string | undefined
    
    @Column("text")
    autor: string | undefined

    @Column("text")
    genero: string | undefined

    @Column("text")
    ano: number | undefined

    @Column("int", {nullable: true})
    vezesEmprestados: number | undefined

    @Column("text", {nullable: true})
    aQuemEstaEmprestado: number | undefined

    @Column("text", {nullable: true})
    dataEmprestimo: string | undefined
    
    @Column("text", {nullable: true})
    dataDevolucao: string | undefined
    
}