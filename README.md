Índice

    Instalando o Node.js
    Instalando o PostgreSQL
    Configurando a Conexão entre a API e o Banco de Dados
    Rodando o Projeto

Instalando o Node.js

O Node.js é uma plataforma que permite rodar código JavaScript fora do navegador. Ele será utilizado para criar nossa API.
Passo 1: Baixar o Node.js

    Acesse o site oficial do Node.js.
    Baixe a versão mais recente recomendada para a maioria dos usuários.

Passo 2: Instalando o Node.js

    No Windows ou macOS, o instalador é fornecido como um arquivo .msi ou .pkg. Execute o instalador e siga as instruções na tela.
    No Linux, você pode instalar o Node.js usando o gerenciador de pacotes. Para sistemas baseados no Debian (Ubuntu, por exemplo), execute os seguintes comandos:

sudo apt update
sudo apt install nodejs
sudo apt install npm

Passo 3: Verificar a Instalação

Após a instalação, verifique se o Node.js foi instalado corretamente, executando o seguinte comando no terminal:

node -v
npm -v

Isso retornará as versões do Node.js e do npm (gerenciador de pacotes do Node.js), confirmando que a instalação foi bem-sucedida.
Instalando o PostgreSQL

O PostgreSQL é um banco de dados relacional que usaremos para armazenar as informações da biblioteca virtual.
Passo 1: Baixar o PostgreSQL

    Acesse o site oficial do PostgreSQL.
    Escolha o instalador adequado para o seu sistema operacional (Windows, macOS ou Linux) e faça o download.

Passo 2: Instalando o PostgreSQL

    No Windows ou macOS, execute o instalador e siga as instruções na tela.
    No Linux, você pode instalar o PostgreSQL usando o gerenciador de pacotes. Para sistemas baseados no Debian, execute os seguintes comandos:

sudo apt update
sudo apt install postgresql postgresql-contrib

Passo 3: Verificar a Instalação

Após a instalação, verifique se o PostgreSQL está funcionando corretamente. Execute o seguinte comando no terminal:

psql --version

Isso retornará a versão do PostgreSQL, confirmando que a instalação foi bem-sucedida.
Configurando a Conexão entre a API e o Banco de Dados

Agora que temos o Node.js e o PostgreSQL instalados, vamos configurar a conexão entre a API e o banco de dados.
Passo 1: Criar o Banco de Dados

    Abra o terminal e entre no PostgreSQL com o seguinte comando:

sudo -u postgres psql

    Crie um banco de dados chamado library_api:

CREATE DATABASE library_api;

    Crie um usuário com permissões para acessar o banco de dados:

CREATE USER library_user WITH PASSWORD 'sua_senha';

    Dê permissões ao usuário para acessar o banco de dados:

GRANT ALL PRIVILEGES ON DATABASE library_api TO library_user;

    Saia do PostgreSQL:

\q

Passo 2: Instalar Pacotes Necessários no Node.js

Agora, precisamos instalar as dependências para conectar a API ao banco de dados PostgreSQL. Execute o seguinte comando no diretório do seu projeto Node.js para instalar os pacotes pg (cliente PostgreSQL para Node.js) e dotenv (para gerenciar variáveis de ambiente):

npm install pg dotenv

Passo 3: Configurar as Variáveis de Ambiente

Crie um arquivo chamado .env no diretório raiz do projeto para armazenar as variáveis de conexão com o banco de dados:

touch .env

Adicione as seguintes variáveis ao arquivo .env (substitua pelos valores corretos):

DB_HOST=localhost
DB_PORT=5432
DB_USER=library_user
DB_PASSWORD=sua_senha
DB_NAME=library_api

Passo 4: Conectar ao Banco de Dados no Código

No seu código Node.js, crie um arquivo chamado db.js para gerenciar a conexão com o PostgreSQL. Exemplo:

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool;

Esse código usa a biblioteca pg para criar um pool de conexões com o PostgreSQL e usa as variáveis de ambiente do arquivo .env para configurar a conexão.
Rodando o Projeto

Agora que configuramos a conexão com o banco de dados, vamos rodar o projeto.
Passo 1: Iniciar o Projeto Node.js

Certifique-se de que todas as dependências foram instaladas e que você tem um arquivo server.js ou equivalente que inicie sua API. No terminal, no diretório do projeto, execute o seguinte comando para rodar a aplicação:

node server.js

Se você estiver usando o npm para gerenciar os scripts, também pode rodar o comando:

npm start

Passo 2: Testar a API

Após rodar a API, você pode testá-la utilizando ferramentas como Postman ou curl. Verifique se a API está respondendo corretamente às requisições HTTP.

Agora você está pronto para utilizar a API com o banco de dados PostgreSQL! Certifique-se de seguir as práticas de segurança e manutenção ao trabalhar com dados sensíveis e ao desenvolver novos recursos para o seu projeto.
