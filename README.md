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
  src/
    server.js
    app.js
    routes/
        users.routes.js
    controllers/
        users.controller.js
    services/
        users.service.js
    data/
        users.json
    middlewares/
        validateUser.js
    .env
    .gitignore
    package.json

## Como executar localmente

### Pré-requisitos
- Node.js

### Passo a passo

1. Clone o repositório:
```
git clone https://github.com/davizn0/API-Connect
cd API-Connect
```

2. Instale as dependências:
```
npm install
```

3. Crie o arquivo `.env` na raiz do projeto com o seguinte conteúdo:

PORT=3000

4. Inicie o servidor em modo de desenvolvimento:
```
npm run dev
```

5. A API estará disponível em `http://localhost:3000`

## Endpoints

Todas as respostas seguem o envelope padronizado: `{ "data": ... }` para sucesso e `{ "error": "..." }` para falhas.

GET - Lista todos os usuários
GET - Busca um usuário pelo ID
POST - Cadastra um novo usuário
PUT - Atualiza um usuário existente
DELETE - Remove um usuário existente

### Exemplo de requisição — Criar usuário

```
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"Ana Silva","email":"ana.silva@email.com"}'
```

**Resposta:**
```
{
  "data": {
    "id": 1,
    "nome": "Ana Silva",
    "email": "ana.silva@email.com"
  }
}
```

### Exemplo de requisição — Erro de validação

```
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"Ana Silva"}'
```

**Resposta:**
```
{
  "error": "O campo \"email\" é obrigatório e deve ser um e-mail válido."
}
```

## Autor

Davi Lucas
