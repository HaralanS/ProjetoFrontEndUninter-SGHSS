# Projeto Front-end — SGHSS

Este repositório contém o front-end do projeto SGHSS (Sistema de Gestão Hospitalar) desenvolvido com React e Vite. A aplicação fornece telas para login, dashboard, agendamento, consultas, e gerenciamento básico de usuários e profissionais.

## Principais funcionalidades

- Interface em React com rotas para diferentes perfis (admin, funcionário, usuário).
- Páginas para: Dashboard, Agendas, Consultas, Usuários, Home e autenticação (Login/SignIn).
- Componentes reutilizáveis organizados por pastas e módulos CSS.

## Tecnologias

- React
- Vite
- React Router
- CSS Modules
- Material UI (parte das dependências)

## Estrutura do projeto (resumo)

- `src/` – código fonte da aplicação
  - `components/` – componentes reutilizáveis (NavBar, Header, Footer, Cards, etc.)
  - `pages/` – páginas públicas e privadas (Home, Login, Dashboard, User, Admin...)
  - `data/` – dados de exemplo (JSON/JS usados para mock)
  - `assets/` – imagens e ícones

## Pré-requisitos

- Node.js (recomenda-se v14 ou superior)
- npm ou yarn

## Como rodar (desenvolvimento)

1. Instale as dependências:

```
npm install
```

2. Inicie o servidor de desenvolvimento:

```
npm run dev
```

3. Abra o navegador em `http://localhost:5173` (ou porta indicada pelo Vite).

## Build para produção

Gerar uma versão otimizada:

```
npm run build
```

Pré-visualizar o build gerado:

```
npm run preview
```

## Scripts úteis

- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — cria o build de produção
- `npm run preview` — pré-visualiza o build
- `npm run lint` — executa o ESLint

## Contribuindo

Sinta-se à vontade para abrir issues e pull requests. Para contribuições locais:

1. Fork o repositório
2. Crie uma branch com sua feature: `git checkout -b feature/nome-da-feature`
3. Faça commits claros e abertos (commit messages)
4. Envie o pull request para revisão

## Observações

Este projeto contém dados de exemplo em `src/data/` que facilitam o desenvolvimento sem backend. Para integração com uma API real, substitua os mocks pelas chamadas HTTP apropriadas.

