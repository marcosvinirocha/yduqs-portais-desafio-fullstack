# 🚀 Desafio Fullstack YDUQS Portais

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="100" alt="React Logo" />
</p>

<p align="center">Aplicação fullstack para o Desafio YDUQS Portais - Plataforma de gerenciamento de cursos e matrículas</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Configuração do Ambiente](#-configuração-do-ambiente)
- [Executando a Aplicação](#-executando-a-aplicação)
- [Testes](#-testes)
- [Documentação da API](#-documentação-da-api)
- [Padrões de Arquitetura](#-padrões-de-arquitetura)
- [Contribuição](#-contribuição)

---

## 🎯 Sobre o Projeto

Esta é uma aplicação fullstack desenvolvida como parte do processo seletivo da YDUQS. O objetivo é construir uma plataforma onde os usuários podem visualizar ofertas de cursos, selecionar um curso e realizar a matrícula. Este repositório contém o frontend da aplicação em React, enquanto o backend está em um repositório separado, implementado em NestJS com banco de dados PostgreSQL.

> **ℹ️ Acesse o backend do projeto:** https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend

**Recursos principais:**
- Autenticação e gerenciamento de usuários
- Sistema de cadastro com validação rigorosa de dados
- Interface responsiva para visualização de cursos e matrículas
- API RESTful bem documentada
- Testes automatizados (unitários e de integração)

---

## 🛠️ Tecnologias Utilizadas

### Backend
O backend deste projeto está em um repositório separado e foi desenvolvido com:

- **Node.js** (v18+)
- **NestJS** - Framework para aplicações Node.js escaláveis
- **TypeScript** - Superset do JavaScript com tipagem estática
- **PostgreSQL** - Banco de dados relacional
- **Prisma** - ORM com migrations
- **Swagger** - Documentação interativa da API
- **Jest** - Framework de testes
- **Docker** - Contêinerização de serviços

> Acesse o repositório do backend para mais detalhes: https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend

### Frontend
- **React** (v19) - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para melhor manutenibilidade
- **Vite** - Ferramenta de build rápida
- **Tailwind CSS** - Framework de estilização utilitário
- **Redux Toolkit** - Gerenciamento de estado
- **React Router DOM** - Navegação entre páginas
- **Axios** - Cliente HTTP para chamadas à API

---

## 🏗️ Estrutura do Projeto

```
yduqs-portais-desafio-fullstack-frontend/
└── frontend/             # Aplicação React
    ├── src/
    │   ├── components/   # Componentes reutilizáveis
    │   ├── pages/        # Páginas da aplicação
    │   ├── store/        # Configuração do Redux
    │   └── services/     # Serviços de API
    ├── public/
    └── package.json
```

> **ℹ️ Nota:** O backend deste projeto está em um repositório separado. Para mais detalhes sobre a API e sua estrutura, acesse: https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend

---

## ⚙️ Pré-requisitos

Antes de configurar o projeto, certifique-se de ter os seguintes itens instalados:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Docker** e **Docker Compose**
- **Git**

---

## 🔧 Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone https://github.com/<seu-usuario>/yduqs-portais-desafio-fullstack-frontend.git
cd yduqs-portais-desafio-fullstack-frontend
```

### 2. Configuração do Backend

O backend deste projeto está em um repositório separado. Para configurar e executar o backend, acesse:

[https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend](https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend)

### 3. Configuração do Frontend

#### Acesse o diretório frontend:

```bash
cd ../frontend  # ou cd /path/to/frontend
```

#### Instale as dependências:

```bash
npm install
```

---

## 🚀 Executando a Aplicação

### 1. Executar o Backend

O backend deste projeto está em um repositório separado. Para executar o backend, siga as instruções no repositório:

[https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend](https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend)

O backend estará disponível em `http://localhost:3000` e a documentação da API em `http://localhost:3000/api`.

### 2. Executar o Frontend

Na pasta raiz deste repositório (`frontend`), execute:

```bash
# Iniciar o servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em `http://localhost:5173` (ou conforme mostrado no terminal).

---

## 🧪 Testes

### Backend

Os testes do backend estão no repositório separado. Para executar os testes do backend, acesse:

[https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend](https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend)

### Frontend

Na pasta `frontend`, execute:

```bash
# Executar testes (se implementados)
npm run test
```

---

## 📚 Documentação da API

A API do backend é documentada com Swagger e está disponível em:

`http://localhost:3000/api`

A documentação inclui endpoints interativos com exemplos de requisições e respostas.

> **ℹ️** Para detalhes sobre os endpoints da API e sua documentação completa, acesse o repositório do backend: https://github.com/marcosvinirocha/yduqs-portais-desafio-fullstack-backend

### Endpoints Disponíveis

#### Gerenciamento de Usuários

- **POST** `/user` - Criar um novo usuário com validação completa
- **DELETE** `/user` - Excluir todos os usuários (para fins de desenvolvimento)

**Validações incluídas:**
- Email deve ser válido
- CPF deve ser válido (11 dígitos)
- Campos obrigatórios: nome, aniversário, data de formatura, celular
- Formatos de data: DD/MM/AAAA

---

## 🏗️ Padrões de Arquitetura

### Backend (NestJS)

- **Arquitetura em camadas**: controllers, services, repositories
- **Injeção de dependência**: para fácil testabilidade e manutenção
- **Validação com DTOs**: usando class-validator para validações de entrada
- **Modularização**: módulos separados para diferentes domínios da aplicação

### Frontend (React)

- **Componentização**: componentes reutilizáveis e bem estruturados
- **Gerenciamento de estado**: com Redux Toolkit
- **Roteamento**: com React Router DOM
- **Responsividade**: interfaces adaptáveis a diferentes dispositivos
- **Clean Code**: código limpo e bem documentado

---

## 🤝 Contribuição

1. Faça um **fork** do projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/nova-feature`)
3. Faça **commits** descritivos (`git commit -m 'Adiciona nova feature'`)
4. Faça **push** para a branch (`git push origin feature/nova-feature`)
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está licenciado sob a [licença MIT](LICENSE).

---

## 👨‍💻 Autor

Desafio Fullstack - Processo Seletivo YDUQS Portais

---

<p align="center">Desenvolvido com ❤️ para o processo seletivo da YDUQS</p>