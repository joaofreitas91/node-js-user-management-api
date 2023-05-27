# Documentação da API - Gerenciamento de usuários

## Descrição

Esta API é um serviço web RESTful desenvolvido em Node.js. Ele fornece endpoints para gerenciar usuários, permitindo operações como recuperar todos os usuários, obter um usuário por ID, criar um novo usuário, atualizar um usuário e excluir um usuário.

## Tecnologias utilizadas

API desenvolvida apenas com **NodeJS** e suas bibliotecas nativas.

## Pré requisitos

- **NodeJS** e **npm** instalados.

## Clone o repositório

```sh
git clone https://github.com/your-username/your-repo.git
```
## Instale as dependências

Navigate to the project directory and install the required dependencies:
  
  ```sh
  cd your-repo
  npm install
  ```
## Inicie o servidor

Inicialize o servidor usando o seguinte comando:
  
  ```sh
  npm run dev
  ```
A API está disponível na url: http://localhost:3333.

## API Endpoints

### Listar todos os usuários

- **URL:** `/users`
- **Method:** GET
- **Query Parameters:**
  - `search` (optional) - Search query para filtrar usuários pelo nome ou email.
- **Success Response:**
  - **Code:** 200 OK

### Retornar um usuário por ID

- **URL:** `/users/:id`
- **Method:** GET
- **URL Parameters:**
  - `id` - ID do usuário retornado.
- **Success Response:**
  - **Code:** 200 OK

### Criar novo usuário

- **URL:** `/users`
- **Method:** POST
- **Request Body:**
  - `name` - Nome do usuário (obrigatório).
  - `email` - Email do usuário (obrigatório).
- **Success Response:**
  - **Code:** 201 Created

### Atualizar um usuário

- **URL:** `/users/:id`
- **Method:** PUT
- **URL Parameters:**
  - `id` - ID do usuário a ser atualizado.
- **Request Body:**
  - `name` - Atualizado nome do usuário (obrigatório).
  - `email` - Atualizado email do usuário (obrigatório).
- **Success Response:**
  - **Code:** 204 No Content

### Remover um usuário

- **URL:** `/users/:id`
- **Method:** DELETE
- **URL Parameters:**
  - `id` - ID do usuário a ser removido.
- **Success Response:**
  - **Code:** 204 No Content


## Extra - Exemplo de Streams com NodeJS

[Documentação da API - Trabalhando com Streams em NodeJS](./streams/README.md)