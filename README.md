# API Connect

API REST para gerenciamento de usuários, desenvolvida como MVP para validação de uma nova ideia de negócio. Fornece operações completas de CRUD (criação, listagem, busca, atualização e remoção) para servir de base de dados para a interface front-end da aplicação.

## Objetivo

Disponibilizar uma API funcional, organizada e padronizada para que a equipe de front-end possa consumir dados de usuários de forma previsível, seguindo os princípios REST e a semântica correta de códigos de status HTTP.

## Tecnologias utilizadas

- Node.js
- Express
- cors
- dotenv
- nodemon

## Estrutura do projeto

api-connect/
├── src/
│ ├── server.js
│ ├── app.js
│ ├── routes/
│ │ └── users.routes.js
│ ├── controllers/
│ │ └── users.controller.js
│ ├── services/
│ │ └── users.service.js
│ ├── data/
│ │ └── users.json
│ └── middlewares/
│ └── validateUser.js
├── .env
├── .gitignore
└── package.json

## Como executar localmente

### Pré-requisitos
- Node.js instalado (versão 18 ou superior)

### Passo a passo

1. Clone o repositório:
```bash
git clone https://github.com/davizn0/API-Connect.git
cd API-Connect
```

2. Instale as dependências:
```bash
npm install
```

3. Crie o arquivo `.env` na raiz do projeto com o seguinte conteúdo:

PORT=3000

4. Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```

5. A API estará disponível em `http://localhost:3000`

## Endpoints

Todas as respostas seguem o envelope padronizado: `{ "data": ... }` para sucesso e `{ "error": "..." }` para falhas.

| Método | Endpoint | Descrição | Corpo da requisição | Status de sucesso | Status de erro |
|---|---|---|---|---|---|
| GET | `/users` | Lista todos os usuários | — | 200 | — |
| GET | `/users/:id` | Busca um usuário pelo ID | — | 200 | 404 (não encontrado) |
| POST | `/users` | Cadastra um novo usuário | `{ "nome": "string", "email": "string" }` | 201 | 400 (dados inválidos) |
| PUT | `/users/:id` | Atualiza um usuário existente | `{ "nome": "string", "email": "string" }` | 200 | 404 (não encontrado) / 400 (dados inválidos) |
| DELETE | `/users/:id` | Remove um usuário existente | — | 204 | 404 (não encontrado) |

### Exemplo de requisição — Criar usuário

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"Ana Silva","email":"ana.silva@email.com"}'
```

**Resposta (201):**
```json
{
  "data": {
    "id": 1,
    "nome": "Ana Silva",
    "email": "ana.silva@email.com"
  }
}
```

### Exemplo de requisição — Erro de validação

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"Ana Silva"}'
```

**Resposta (400):**
```json
{
  "error": "O campo \"email\" é obrigatório e deve ser um e-mail válido."
}
```

## Autor

Davi Lucas