<div align="center">

<img src="https://github.com/user-attachments/assets/0175136b-50b2-4d23-acc1-433add1042cd" alt="Chat2Order Banner" width="100%" style="border-radius: 12px;" />

<br />
<br />

# Chat2Order — Backend API

**Automação de pedidos via chat, do zero à produção.**

[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com)
[![Jest](https://img.shields.io/badge/Jest-Tests-C21325?style=flat-square&logo=jest&logoColor=white)](https://jestjs.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

</div>

---

## 📖 Sobre o Projeto

O **Chat2Order** é uma API backend moderna que automatiza o ciclo de vida de pedidos originados via chat — desde a captura da mensagem até o processamento e persistência do pedido no banco de dados.

A solução foi projetada para negócios que operam via canais de mensageria (WhatsApp, chatbots, plataformas próprias) e precisam de uma camada robusta de backend para estruturar, validar e gerenciar esses pedidos com confiabilidade e escala.

> **Problema resolvido:** Pedidos via chat são caóticos por natureza — texto livre, sem estrutura, sem rastreabilidade. O Chat2Order transforma essa interação em um fluxo de dados organizado, persistido e auditável.

---

## ✨ Funcionalidades

- 🗂 **Gestão de Pedidos** — Criação, atualização e consulta de pedidos com ciclo de vida completo
- 💬 **Processamento de Mensagens** — Pipeline para interpretar e estruturar mensagens recebidas via chat
- 🔐 **Autenticação & Autorização** — Controle de acesso seguro para operadores e sistemas integrados
- 🗄 **Persistência de Dados** — Integração com banco de dados relacional via Prisma ORM
- 🐳 **Containerização** — Ambiente 100% reproduzível com Docker e Docker Compose
- 🧪 **Testes Automatizados** — Cobertura com Jest para garantir confiabilidade das regras de negócio

---

## 🛠 Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js 20.x |
| Linguagem | TypeScript 5.x |
| Framework HTTP | Express 4.x |
| ORM | Prisma |
| Banco de Dados | PostgreSQL |
| Containerização | Docker + Docker Compose |
| Testes | Jest |

---

## 📁 Estrutura do Projeto

```
chat2order-backend/
├── src/
│   ├── controllers/       # Handlers das rotas HTTP
│   ├── services/          # Regras de negócio e lógica de aplicação
│   ├── repositories/      # Abstração de acesso ao banco via Prisma
│   ├── middlewares/        # Autenticação, validação e tratamento de erros
│   ├── routes/            # Definição e agrupamento das rotas
│   ├── dtos/              # Data Transfer Objects e schemas de validação
│   └── utils/             # Helpers e funções utilitárias
├── prisma/
│   ├── schema.prisma      # Definição do schema do banco de dados
│   └── migrations/        # Histórico de migrations
├── tests/                 # Testes unitários e de integração
├── docker-compose.yml     # Orquestração dos containers
├── Dockerfile             # Imagem da aplicação
├── .env.example           # Template de variáveis de ambiente
└── tsconfig.json          # Configuração do TypeScript
```

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js 20+](https://nodejs.org)
- [Docker](https://www.docker.com) e Docker Compose
- [Git](https://git-scm.com)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/chat2order-backend.git
cd chat2order-backend
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o `.env` com suas configurações:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/chat2order"
PORT=3000
JWT_SECRET="sua_chave_secreta"
```

### 3. Suba os containers

```bash
docker compose up -d
```

### 4. Execute as migrations

```bash
npx prisma migrate dev
```

### 5. Inicie o servidor em modo desenvolvimento

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

---

## 🧪 Testes

```bash
# Rodar todos os testes
npm run test

# Rodar com cobertura
npm run test:coverage

# Rodar em modo watch
npm run test:watch
```

---

## 📡 Endpoints Principais

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/orders` | Cria um novo pedido |
| `GET` | `/orders` | Lista todos os pedidos |
| `GET` | `/orders/:id` | Busca pedido por ID |
| `PATCH` | `/orders/:id/status` | Atualiza status do pedido |
| `POST` | `/messages/process` | Processa mensagem de chat |

> Documentação completa da API disponível via Swagger em `/api-docs` ao rodar o projeto localmente.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga o fluxo abaixo:

1. Fork o projeto
2. Crie uma branch para sua feature: `git checkout -b feat/minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: adiciona minha feature'`
4. Push para a branch: `git push origin feat/minha-feature`
5. Abra um Pull Request

> Utilize [Conventional Commits](https://www.conventionalcommits.org/pt-br/) para padronizar as mensagens de commit.

---

## 📄 Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](LICENSE) para mais informações.

---

<div align="center">

Desenvolvido com ☕ e TypeScript

</div>

Chat2Order – AI-powered order automation
<img width="1536" height="1024" alt="ChatGPT Image 30_04_2026, 10_44_08" src="https://github.com/user-attachments/assets/b6aab380-9616-4b28-8f13-0a2310d39542" />
<img width="1536" height="1024" alt="ChatGPT Image 30_04_2026, 11_08_24" src="https://github.com/user-attachments/assets/a8dbb64a-aaf5-47e3-9747-089b965e55bc" />
<img width="1536" height="1024" alt="ChatGPT Image 30_04_2026, 11_44_51" src="https://github.com/user-attachments/assets/06bb27ee-9afa-45e6-9199-4c1e5d36f193" />
