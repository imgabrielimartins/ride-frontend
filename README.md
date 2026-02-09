🚗 Ride
Plataforma de Caronas Inteligente e Mobilidade Colaborativa
<p align="center"> <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-22c55e?style=for-the-badge" /> <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge" /> </p> <p align="center"> Aplicação web moderna desenvolvida com foco em performance, escalabilidade e experiência do usuário. </p>
📌 Sumário

📖 Sobre o Projeto

🎯 Objetivos

🧠 Arquitetura

✨ Funcionalidades

🛠 Tecnologias

📂 Estrutura de Pastas

⚙️ Configuração do Projeto

🔌 Integração com API

🧪 Testes

🚀 Deploy

📈 Melhorias Futuras

🤝 Contribuição

👩‍💻 Autora

📄 Licença

📖 Sobre o Projeto

O Ride é uma Single Page Application (SPA) desenvolvida para facilitar a conexão entre motoristas e passageiros, promovendo mobilidade compartilhada de forma eficiente e sustentável.

O projeto foi construído aplicando boas práticas modernas de desenvolvimento frontend, incluindo:

Arquitetura escalável

Tipagem forte com TypeScript

Gerenciamento de estado estruturado

Consumo otimizado de APIs REST

Interface responsiva e acessível

🎯 Objetivos

Desenvolver uma aplicação performática utilizando Vite

Aplicar boas práticas com React 18+

Implementar controle de autenticação com JWT

Estruturar comunicação com backend via Axios

Utilizar React Query para cache e sincronização de dados

Criar uma experiência de usuário moderna e fluida

🧠 Arquitetura

A aplicação segue princípios de separação de responsabilidades e modularização:

Camada de Apresentação → Componentes e páginas

Camada de Serviços → Comunicação com API

Camada de Estado Global → Context API ou Redux

Camada de Hooks Customizados

Camada de Utilitários

Fluxo simplificado:

Usuário → Interface → Service → API → Resposta → Atualização de Estado → Renderização

✨ Funcionalidades
🔐 Autenticação

Cadastro de usuários

Login com validação

Persistência de sessão

Proteção de rotas privadas

Armazenamento seguro de token JWT

🚘 Gestão de Caronas

Buscar caronas por origem e destino

Criar nova carona

Editar ou cancelar carona

Histórico de viagens

Sistema de avaliações

💬 Comunicação

Chat entre motorista e passageiro

Notificações de confirmação

Feedback pós-viagem

📱 Experiência do Usuário

Layout responsivo (mobile-first)

Tema claro/escuro

Transições suaves

Interface intuitiva

Foco em acessibilidade

🛠 Tecnologias
Frontend

React 18+

TypeScript

Vite

Gerenciamento de Estado

Context API / Redux Toolkit

React Query

Roteamento

React Router DOM

Comunicação com API

Axios

Estilização

CSS Modules

Styled Components

Tailwind CSS (opcional)

Qualidade de Código

ESLint

Prettier

Commit Semântico (Conventional Commits)

📂 Estrutura de Pastas
src/
 ├── assets/
 ├── components/
 │    ├── Button/
 │    ├── Navbar/
 │    └── CardRide/
 ├── pages/
 │    ├── Home/
 │    ├── Login/
 │    ├── Register/
 │    ├── Profile/
 │    └── MyRides/
 ├── routes/
 ├── services/
 │    └── api.ts
 ├── contexts/
 ├── hooks/
 ├── types/
 ├── utils/
 └── main.tsx

⚙️ Configuração do Projeto
📦 Pré-requisitos

Node.js 16+

npm ou yarn

🔧 Instalação
# Clone o repositório
git clone https://github.com/seu-usuario/ride.git

# Entre na pasta
cd ride

# Instale dependências
npm install

# Rode o projeto
npm run dev


Acesse:

http://localhost:5173

🔌 Variáveis de Ambiente

Crie um arquivo .env na raiz:

VITE_API_URL=http://localhost:8080/api
VITE_APP_NAME=Ride

🔌 Integração com API

Exemplo de configuração do Axios:

import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


Exemplo de requisição:

export const fetchRides = async (origin: string, destination: string) => {
  const response = await api.get('/rides', {
    params: { origin, destination }
  });
  return response.data;
};

🧪 Testes

Planejamento para:

Testes unitários com Vitest

Testes de componentes com React Testing Library

Testes E2E com Cypress

Execução futura:

npm run test

🚀 Deploy

Build de produção:

npm run build


Preview local:

npm run preview


Deploy recomendado:

Vercel

Netlify

Render

📈 Melhorias Futuras

Integração com WebSocket para chat em tempo real

Sistema de geolocalização

Mapa interativo (Google Maps ou Leaflet)

PWA

Dark mode automático baseado no sistema

Sistema de notificações push

Integração com gateway de pagamento

🤝 Contribuição

Fork o projeto

Crie uma branch:

git checkout -b feature/minha-feature


Commit:

git commit -m "feat: adiciona nova funcionalidade"


Push:

git push origin feature/minha-feature


Abra um Pull Request

👩‍💻 Autora

Gabrieli Martins
Frontend Developer | React | TypeScript

GitHub: https://github.com/seu-usuario

LinkedIn: https://linkedin.com/in/seu-perfil

📄 Licença

Este projeto está sob a licença MIT.
