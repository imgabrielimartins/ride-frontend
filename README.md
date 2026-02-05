# 🚗 Ride Frontend

<div align="center">
  
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  
  **Uma plataforma moderna para gestão de caronas e transporte compartilhado**
  
  [Demo](#demonstração) • [Funcionalidades](#funcionalidades) • [Instalação](#instalação) • [Documentação](#uso)
  
</div>

---

## 📋 Descrição

O **Velo Frontend** é uma aplicação web moderna desenvolvida com React e TypeScript, projetada para facilitar a gestão de caronas e transporte compartilhado. A plataforma oferece uma interface intuitiva e responsiva, permitindo que usuários encontrem, ofereçam e gerenciem caronas de forma eficiente e segura.

### 🎯 Objetivos

- Facilitar a conexão entre motoristas e passageiros
- Reduzir custos de transporte através do compartilhamento de veículos
- Contribuir para a redução de emissões de carbono
- Proporcionar uma experiência de usuário moderna e acessível

### 👥 Público-Alvo

- Estudantes e profissionais que buscam alternativas de transporte econômicas
- Motoristas que desejam compartilhar custos de viagem
- Empresas interessadas em soluções de mobilidade para colaboradores
- Comunidades que valorizam sustentabilidade e economia colaborativa

---

## ✨ Funcionalidades

### 🔐 Autenticação e Perfil
- ✅ Cadastro e login de usuários
- ✅ Gerenciamento de perfil pessoal
- ✅ Autenticação segura com tokens JWT

### 🚘 Gestão de Caronas
- ✅ Buscar caronas disponíveis por origem e destino
- ✅ Oferecer novas caronas com detalhes de rota e horário
- ✅ Visualizar histórico de caronas realizadas
- ✅ Sistema de avaliação de motoristas e passageiros

### 💬 Comunicação
- ✅ Chat em tempo real entre usuários
- ✅ Notificações de solicitações e confirmações
- ✅ Sistema de mensagens diretas

### 📱 Interface Responsiva
- ✅ Design adaptável para desktop, tablet e mobile
- ✅ Tema claro/escuro (modo noturno)
- ✅ Animações e transições suaves
- ✅ Acessibilidade aprimorada

---

## 🛠️ Tecnologias Utilizadas

### Frontend Core
- **React** 18+ - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server de alta performance

### Gerenciamento de Estado e Roteamento
- **React Router DOM** - Navegação e roteamento
- **Context API** / **Redux** - Gerenciamento de estado global

### Estilização
- **CSS Modules** / **Styled Components** - Estilização componentizada
- **Tailwind CSS** (opcional) - Framework CSS utility-first

### Comunicação com API
- **Axios** - Cliente HTTP para requisições
- **React Query** - Gerenciamento de cache e requisições

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para código JavaScript/TypeScript
- **Prettier** - Formatador de código
- **Vite** - Hot Module Replacement (HMR)

---

## 📦 Instalação

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 16 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** - Gerenciador de pacotes

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/ride-frontend.git
   cd ride-frontend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   VITE_API_URL=http://localhost:8080/api
   VITE_APP_NAME=Ride Frontend
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação**
   
   Abra seu navegador em: [http://localhost:5173](http://localhost:5173)

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos estarão disponíveis na pasta `dist/`.

Para visualizar o build de produção localmente:

```bash
npm run preview
# ou
yarn preview
```

---

## 🚀 Uso

### Exemplo de Estrutura de Componentes

```typescript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Navegação Principal

- **`/`** - Página inicial com busca de caronas
- **`/login`** - Autenticação de usuários
- **`/cadastro`** - Registro de novos usuários
- **`/perfil`** - Gerenciamento de perfil
- **`/minhas-caronas`** - Histórico e caronas ativas
- **`/oferecer-carona`** - Formulário para criar nova carona

### Exemplo de Requisição à API

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Buscar caronas disponíveis
const fetchRides = async (origin: string, destination: string) => {
  const response = await api.get('/rides', {
    params: { origin, destination }
  });
  return response.data;
};
```

---

## 🎨 Demonstração

### Screenshots

> 📸 _Adicione capturas de tela da aplicação aqui_

**Página Inicial**
```
[Placeholder para screenshot da home]
```

**Busca de Caronas**
```
[Placeholder para screenshot da busca]
```

**Perfil do Usuário**
```
[Placeholder para screenshot do perfil]
```

### Demo Online

🌐 **[Acesse a demonstração ao vivo](https://ride-frontend-demo.vercel.app)** _(Placeholder - substitua pelo link real)_

---

## 🤝 Contribuição

Contribuições são muito bem-vindas! Se você deseja contribuir com o projeto, siga os passos abaixo:

### Como Contribuir

1. **Fork o projeto**
   - Clique no botão "Fork" no topo da página

2. **Clone seu fork**
   ```bash
   git clone https://github.com/seu-usuario/ride-frontend.git
   cd ride-frontend
   ```

3. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/minha-nova-feature
   ```

4. **Faça suas alterações e commit**
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade X"
   ```

5. **Push para sua branch**
   ```bash
   git push origin feature/minha-nova-feature
   ```

6. **Abra um Pull Request**
   - Vá até o repositório original
   - Clique em "New Pull Request"
   - Descreva suas alterações detalhadamente

### Padrões de Código

- Siga as convenções do ESLint e Prettier configurados
- Escreva commits semânticos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário

### Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/ride-frontend/issues) descrevendo:
- O comportamento esperado
- O comportamento atual
- Passos para reproduzir
- Screenshots (se aplicável)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### O que isso significa?

✅ Uso comercial permitido  
✅ Modificação permitida  
✅ Distribuição permitida  
✅ Uso privado permitido  
❌ Responsabilidade limitada  
❌ Sem garantia

---

## 👤 Autor & Contato

<div align="center">

### Desenvolvido com ❤️ por [Seu Nome]

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:seu-email@example.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://seu-portfolio.com)

---

### 🌟 Se este projeto foi útil, considere dar uma estrela!

**Projeto desenvolvido como parte do bootcamp Generation Brasil** 🇧🇷

</div>

---

## 📚 Recursos Adicionais

- [Documentação do React](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/)

---

<div align="center">
  
  **2026 © Ride Frontend - Todos os direitos reservados**
  
  Feito com 💙 e ☕
  
</div>
