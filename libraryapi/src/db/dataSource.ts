import "reflect-metadata"
import { DataSource } from "typeorm"

//importando entidades do banco
import { Usuario } from "../api/models/UsuarioModel"
import { Livro } from "../api/models/LivroModel"

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "trabalho-faculdade",
    synchronize: true,
    logging: true,
    entities: [Usuario, Livro],
    subscribers: [],
    migrations: [],
    })



    
