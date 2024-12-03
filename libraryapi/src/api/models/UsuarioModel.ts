import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"
@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column("text")
    nome: string | undefined

    @Column("text")
    endereco: string | undefined

    @Column("text")
    email: string | undefined

    @Column("text")
    telefone: string | undefined

    @Column("int", {nullable: true})
    livroEmprestado: number | undefined
}