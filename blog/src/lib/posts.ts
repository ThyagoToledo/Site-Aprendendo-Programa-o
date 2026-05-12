export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  emoji: string
  content: string
}

export function getAllPosts(): Post[] {
  return getExamplePosts()
}

export function getPostBySlug(slug: string): Post | null {
  const examples = getExamplePosts()
  return examples.find(post => post.slug === slug) || null
}

function getExamplePosts(): Post[] {
  return [
    {
      slug: 'introducao-html5',
      title: 'Introdução ao HTML5: Tags Semânticas e Estrutura',
      date: '2025-01-15',
      excerpt: 'Aprenda sobre as principais tags semânticas do HTML5 e como estruturar suas páginas web de forma mais eficiente e acessível.',
      category: 'HTML & CSS',
      emoji: '🏗️',
      content: `# Introdução ao HTML5: Tags Semânticas e Estrutura

O HTML5 trouxe muitas melhorias para o desenvolvimento web, especialmente com suas tags semânticas que nos ajudam a criar estruturas mais claras e acessíveis.

## Tags Semânticas Principais

### Header
A tag \`<header>\` define o cabeçalho de uma seção ou página:

\`\`\`html
<header>
  <h1>Título do Site</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/sobre">Sobre</a>
  </nav>
</header>
\`\`\`

### Nav
Use \`<nav>\` para menus de navegação:

\`\`\`html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contato">Contato</a></li>
  </ul>
</nav>
\`\`\`

### Main
O conteúdo principal da página vai dentro de \`<main>\`:

\`\`\`html
<main>
  <article>
    <h1>Título do Artigo</h1>
    <p>Conteúdo do artigo...</p>
  </article>
</main>
\`\`\`

## Vantagens das Tags Semânticas

1. **Melhor SEO**: Motores de busca entendem melhor a estrutura
2. **Acessibilidade**: Leitores de tela navegam mais facilmente
3. **Manutenção**: Código mais limpo e organizaado
4. **Padrões**: Seguem as boas práticas web modernas

## Próximos Passos

Agora que você conhece as tags semânticas, pratique criando estruturas HTML mais significativas em seus projetos!`
    },
    {
      slug: 'css-flexbox-guia-completo',
      title: 'CSS Flexbox: Guia Completo para Layout Responsivo',
      date: '2025-01-12',
      excerpt: 'Domine o CSS Flexbox e crie layouts responsivos de forma simples e eficiente. Aprenda todas as propriedades e casos de uso práticos.',
      category: 'HTML & CSS',
      emoji: '📐',
      content: `# CSS Flexbox: Guia Completo para Layout Responsivo

O Flexbox é uma das ferramentas mais poderosas do CSS para criar layouts flexíveis e responsivos.

## Conceitos Básicos

O Flexbox trabalha com dois elementos principais:
- **Flex Container**: o elemento pai
- **Flex Items**: os elementos filhos

## Propriedades do Container

### Display Flex
Para ativar o flexbox:

\`\`\`css
.container {
  display: flex;
}
\`\`\`

### Flex Direction
Controla a direção dos itens:

\`\`\`css
.container {
  flex-direction: row; /* padrão */
  flex-direction: column;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
}
\`\`\`

### Justify Content
Alinhamento no eixo principal:

\`\`\`css
.container {
  justify-content: flex-start; /* padrão */
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
\`\`\`

### Align Items
Alinhamento no eixo secundário:

\`\`\`css
.container {
  align-items: stretch; /* padrão */
  align-items: center;
  align-items: flex-start;
  align-items: flex-end;
}
\`\`\`

## Propriedades dos Items

### Flex Grow
Controla o crescimento do item:

\`\`\`css
.item {
  flex-grow: 1; /* cresce para ocupar espaço disponível */
}
\`\`\`

### Flex Shrink
Controla o encolhimento:

\`\`\`css
.item {
  flex-shrink: 1; /* padrão - pode encolher */
  flex-shrink: 0; /* não encolhe */
}
\`\`\`

## Exemplo Prático

\`\`\`html
<div class="header">
  <div class="logo">Logo</div>
  <nav class="nav">
    <a href="#">Home</a>
    <a href="#">Sobre</a>
    <a href="#">Contato</a>
  </nav>
</div>
\`\`\`

\`\`\`css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav {
  display: flex;
  gap: 1rem;
}
\`\`\`

## Dicas Importantes

1. Use flexbox para componentes e elementos em linha
2. Para layouts de página completa, considere CSS Grid
3. Combine justify-content e align-items para controle total
4. Teste sempre em diferentes tamanhos de tela

O Flexbox revolucionou como fazemos layouts CSS - pratique e domine essa ferramenta essencial!`
    },
    {
      slug: 'javascript-funcoes-avancadas',
      title: 'JavaScript: Funções Avançadas e Arrow Functions',
      date: '2025-01-10',
      excerpt: 'Explore conceitos avançados de funções em JavaScript, incluindo arrow functions, callbacks, promises e async/await.',
      category: 'JavaScript',
      emoji: '⚡',
      content: `# JavaScript: Funções Avançadas e Arrow Functions

As funções são fundamentais em JavaScript. Vamos explorar conceitos avançados que todo desenvolvedor deve conhecer.

## Arrow Functions

Introduzidas no ES6, oferecem uma sintaxe mais concisa:

\`\`\`javascript
// Função tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function
const somar = (a, b) => a + b;

// Com um parâmetro
const dobrar = x => x * 2;

// Sem parâmetros
const cumprimentar = () => 'Olá!';
\`\`\`

## Diferenças Importantes

### Contexto (this)
Arrow functions não têm seu próprio \`this\`:

\`\`\`javascript
const objeto = {
  nome: 'João',
  
  // Função tradicional - this = objeto
  tradicional: function() {
    return \`Olá, \${this.nome}\`;
  },
  
  // Arrow function - this = contexto externo
  arrow: () => {
    return \`Olá, \${this.nome}\`; // undefined
  }
};
\`\`\`

## Callbacks e Higher-Order Functions

Funções que recebem outras funções como parâmetro:

\`\`\`javascript
const numeros = [1, 2, 3, 4, 5];

// Map - transforma elementos
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

// Filter - filtra elementos
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

// Reduce - reduz a um valor
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma); // 15
\`\`\`

## Promises e Async/Await

Para lidar com código assíncrono:

\`\`\`javascript
// Promise
const buscarDados = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dados carregados!');
    }, 2000);
  });
};

// Usando .then()
buscarDados()
  .then(dados => console.log(dados))
  .catch(erro => console.error(erro));

// Usando async/await
const carregarDados = async () => {
  try {
    const dados = await buscarDados();
    console.log(dados);
  } catch (erro) {
    console.error(erro);
  }
};
\`\`\`

## Destructuring em Parâmetros

Extraia valores diretamente nos parâmetros:

\`\`\`javascript
// Destructuring de objeto
const criarUsuario = ({ nome, email, idade = 18 }) => {
  return { nome, email, idade };
};

const usuario = criarUsuario({
  nome: 'Maria',
  email: 'maria@email.com'
});

// Destructuring de array
const [primeiro, segundo] = ['a', 'b', 'c'];
\`\`\`

## Closures

Funções que "lembram" de variáveis do escopo externo:

\`\`\`javascript
const criarContador = () => {
  let count = 0;
  
  return {
    incrementar: () => ++count,
    decrementar: () => --count,
    valor: () => count
  };
};

const contador = criarContador();
console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.valor()); // 2
\`\`\`

## Exercícios Práticos

1. Crie uma função que filtre números pares de um array
2. Implemente um sistema de cache usando closures
3. Faça uma função async que simule uma API call

Dominar funções em JavaScript é essencial para se tornar um desenvolvedor mais eficiente!`
    },
    {
      slug: 'react-hooks-essenciais',
      title: 'React Hooks: useState, useEffect e Hooks Personalizados',
      date: '2025-01-08',
      excerpt: 'Aprenda os React Hooks essenciais e como criar seus próprios hooks personalizados para reutilizar lógica entre componentes.',
      category: 'React & Next.js',
      emoji: '⚛️',
      content: `# React Hooks: useState, useEffect e Hooks Personalizados

Os React Hooks revolucionaram como escrevemos componentes funcionais, permitindo usar estado e outras funcionalidades sem classes.

## useState: Gerenciando Estado

O hook mais básico para adicionar estado local:

\`\`\`jsx
import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
  
  const incrementar = () => {
    setCount(count + 1);
    // ou setCount(prevCount => prevCount + 1);
  };
  
  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
}
\`\`\`

## useEffect: Efeitos Colaterais

Para executar código em momentos específicos do ciclo de vida:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function ExemploEffect() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Executa uma vez após o primeiro render
  useEffect(() => {
    fetch('/api/usuarios')
      .then(response => response.json())
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      });
  }, []); // Array vazio = executa uma vez
  
  // Executa quando 'count' mudar
  useEffect(() => {
    document.title = \`\${usuarios.length} usuários\`;
  }, [usuarios.length]);
  
  // Cleanup (limpeza)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer ativo');
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  if (loading) return <div>Carregando...</div>;
  
  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nome}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Hook Personalizado

Crie hooks reutilizáveis para lógica comum:

\`\`\`jsx
// hooks/useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usando o hook personalizado
function ListaUsuarios() {
  const { data: usuarios, loading, error } = useFetch('/api/usuarios');
  
  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  
  return (
    <ul>
      {usuarios?.map(usuario => (
        <li key={usuario.id}>{usuario.nome}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Hook para Local Storage

\`\`\`jsx
// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Exemplo de uso
function Configuracoes() {
  const [tema, setTema] = useLocalStorage('tema', 'claro');
  
  return (
    <div>
      <p>Tema atual: {tema}</p>
      <button onClick={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}>
        Alternar Tema
      </button>
    </div>
  );
}
\`\`\`

## Boas Práticas

### 1. Organize suas dependências
\`\`\`jsx
useEffect(() => {
  // código do efeito
}, [dep1, dep2]); // todas as dependências listadas
\`\`\`

### 2. Separe efeitos por responsabilidade
\`\`\`jsx
// ❌ Um useEffect fazendo muitas coisas
useEffect(() => {
  fetchUser();
  updateTitle();
  setupEventListeners();
}, []);

// ✅ Efeitos separados
useEffect(() => {
  fetchUser();
}, []);

useEffect(() => {
  updateTitle();
}, [user]);

useEffect(() => {
  setupEventListeners();
  return cleanup;
}, []);
\`\`\`

### 3. Use hooks personalizados para lógica reutilizável
\`\`\`jsx
// ✅ Hook reutilizável
function useApi(endpoint) {
  // lógica do fetch
}

// Use em vários componentes
const usuarios = useApi('/usuarios');
const produtos = useApi('/produtos');
\`\`\`

## Próximos Passos

1. Explore outros hooks: useContext, useReducer, useMemo
2. Pratique criando hooks personalizados
3. Estude patterns avançados como compound components

Os hooks tornam o React mais poderoso e expressivo - domine-os para ser mais produtivo!`
    },
    {
      slug: 'nextjs-app-router',
      title: 'Next.js 13+: App Router e Server Components',
      date: '2025-01-05',
      excerpt: 'Descubra as novidades do Next.js 13+ com App Router, Server Components e como eles revolucionam o desenvolvimento React.',
      category: 'React & Next.js',
      emoji: '🔥',
      content: `# Next.js 13+: App Router e Server Components

O Next.js 13 trouxe mudanças significativas com o App Router e Server Components. Vamos explorar essas novidades revolucionárias.

## App Router vs Pages Router

O novo sistema de roteamento baseado em diretórios:

\`\`\`
app/
├── page.tsx         # /
├── about/
│   └── page.tsx     # /about
├── blog/
│   ├── page.tsx     # /blog
│   └── [slug]/
│       └── page.tsx # /blog/[slug]
└── layout.tsx       # Layout raiz
\`\`\`

## Server Components

Componentes que executam no servidor por padrão:

\`\`\`tsx
// app/posts/page.tsx - Server Component
async function PostsPage() {
  // Esta fetch roda no servidor
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());
  
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export default PostsPage;
\`\`\`

## Client Components

Para interatividade no cliente, use a diretiva 'use client':

\`\`\`tsx
// components/SearchBox.tsx - Client Component
'use client';

import { useState } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Buscar posts..."
    />
  );
}
\`\`\`

## Layouts Aninhados

Crie layouts que se compõem automaticamente:

\`\`\`tsx
// app/layout.tsx - Layout raiz
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <header>
          <nav>/* Navegação global */</nav>
        </header>
        <main>{children}</main>
        <footer>/* Rodapé global */</footer>
      </body>
    </html>
  );
}

// app/blog/layout.tsx - Layout do blog
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-container">
      <aside>
        <h2>Categorias</h2>
        {/* Sidebar do blog */}
      </aside>
      <div className="blog-content">
        {children}
      </div>
    </div>
  );
}
\`\`\`

## Loading e Error UI

Estados especiais com arquivos convencionais:

\`\`\`tsx
// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Carregando posts...</p>
    </div>
  );
}

// app/blog/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="error">
      <h2>Algo deu errado!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>
        Tentar novamente
      </button>
    </div>
  );
}

// app/blog/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h2>Post não encontrado</h2>
      <p>O post que você procura não existe.</p>
    </div>
  );
}
\`\`\`

## Data Fetching

### Server Components (recomendado)
\`\`\`tsx
// Fetch no Server Component
async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetch(\`/api/posts/\${params.slug}\`, {
    // Cache estratégias
    next: { revalidate: 3600 } // Revalida a cada hora
  }).then(res => res.json());
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
\`\`\`

### Route Handlers (API Routes)
\`\`\`tsx
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newPost = await createPost(body);
  return NextResponse.json(newPost);
}
\`\`\`

## Metadata API

SEO dinâmico simplificado:

\`\`\`tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function Post({ params }) {
  // Componente do post
}
\`\`\`

## Streaming e Suspense

Carregamento progressivo de conteúdo:

\`\`\`tsx
// app/dashboard/page.tsx
import { Suspense } from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      
      <Suspense fallback={<div>Carregando estatísticas...</div>}>
        <Stats />
      </Suspense>
      
      <Suspense fallback={<div>Carregando atividades...</div>}>
        <RecentActivity />
      </Suspense>
    </div>
  );
}

// Stats é um Server Component que faz fetch
async function Stats() {
  const stats = await getStats();
  return <div>{/* Render das estatísticas */}</div>;
}
\`\`\`

## Vantagens do App Router

1. **Performance**: Server Components reduzem bundle do JS
2. **SEO**: Melhor renderização no servidor
3. **Developer Experience**: Convenções mais intuitivas
4. **Streaming**: Carregamento progressivo
5. **Colocation**: Layouts, loading, error no mesmo local

## Migração Gradual

Você pode usar ambos os sistemas:
- Pages Router: \`pages/\` (compatibilidade)
- App Router: \`app/\` (funcionalidades novas)

O App Router representa o futuro do Next.js - comece a adotá-lo em novos projetos!`
    },
    {
      slug: 'nodejs-apis-restful',
      title: 'Node.js: Criando APIs RESTful com Express e Middleware',
      date: '2025-01-03',
      excerpt: 'Aprenda a criar APIs RESTful robustas com Node.js, Express, middleware personalizados e boas práticas de segurança.',
      category: 'Node.js',
      emoji: '🚀',
      content: `# Node.js: Criando APIs RESTful com Express e Middleware

Vamos criar uma API RESTful completa com Node.js e Express, seguindo as melhores práticas.

## Configuração Inicial

\`\`\`bash
mkdir minha-api
cd minha-api
npm init -y
npm install express cors helmet morgan dotenv
npm install -D nodemon @types/node typescript
\`\`\`

### Estrutura do Projeto
\`\`\`
minha-api/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── models/
│   └── app.js
├── .env
├── server.js
└── package.json
\`\`\`

## Configurando o Express

\`\`\`javascript
// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware de segurança
app.use(helmet());

// CORS
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Logging
app.use(morgan('combined'));

// Parse JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Algo deu errado!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint não encontrado',
    path: req.originalUrl
  });
});

module.exports = app;
\`\`\`

## Middleware Personalizado

\`\`\`javascript
// src/middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Token de acesso requerido' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    
    req.user = user;
    next();
  });
};

// src/middleware/validation.js
const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e email são obrigatórios'
    });
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      error: 'Email inválido'
    });
  }
  
  next();
};

// src/middleware/rateLimiting.js
const rateLimit = require('express-rate-limit');

const createRateLimit = (windowMs, max) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      error: 'Muitas tentativas, tente novamente mais tarde'
    },
    standardHeaders: true,
    legacyHeaders: false
  });
};

module.exports = {
  authenticateToken,
  validateUser,
  createRateLimit
};
\`\`\`

## Controllers

\`\`\`javascript
// src/controllers/userController.js
const users = []; // Simulando um banco de dados

const getAllUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    
    let filteredUsers = users;
    
    if (search) {
      filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
    
    res.json({
      users: paginatedUsers,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: filteredUsers.length,
        pages: Math.ceil(filteredUsers.length / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find(u => u.id === id);
    
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Verificar se email já existe
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email já cadastrado' });
    }
    
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    
    res.status(201).json({
      message: 'Usuário criado com sucesso',
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    // Verificar se novo email já existe em outro usuário
    if (email) {
      const existingUser = users.find(u => u.email === email && u.id !== id);
      if (existingUser) {
        return res.status(409).json({ error: 'Email já cadastrado' });
      }
    }
    
    users[userIndex] = {
      ...users[userIndex],
      ...(name && { name }),
      ...(email && { email }),
      updatedAt: new Date().toISOString()
    };
    
    res.json({
      message: 'Usuário atualizado com sucesso',
      user: users[userIndex]
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    users.splice(userIndex, 1);
    
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
\`\`\`

## Routes

\`\`\`javascript
// src/routes/users.js
const express = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const {
  authenticateToken,
  validateUser,
  createRateLimit
} = require('../middleware');

const router = express.Router();

// Rate limiting
const generalLimit = createRateLimit(15 * 60 * 1000, 100); // 100 req per 15min
const createLimit = createRateLimit(15 * 60 * 1000, 5);   // 5 creates per 15min

// Apply rate limiting to all routes
router.use(generalLimit);

// GET /api/users - Listar usuários
router.get('/', getAllUsers);

// GET /api/users/:id - Buscar usuário por ID
router.get('/:id', getUserById);

// POST /api/users - Criar usuário
router.post('/',
  createLimit,
  validateUser,
  createUser
);

// PUT /api/users/:id - Atualizar usuário
router.put('/:id',
  authenticateToken,
  validateUser,
  updateUser
);

// DELETE /api/users/:id - Deletar usuário
router.delete('/:id',
  authenticateToken,
  deleteUser
);

module.exports = router;
\`\`\`

## Server Principal

\`\`\`javascript
// server.js
require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`🚀 Servidor rodando na porta \${PORT}\`);
  console.log(\`📚 Documentação: http://localhost:\${PORT}/api/docs\`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 Servidor finalizando...');
  process.exit(0);
});
\`\`\`

## Variáveis de Ambiente

\`\`\`bash
# .env
NODE_ENV=development
PORT=3000
JWT_SECRET=seu-jwt-secret-super-secreto
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
\`\`\`

## Scripts do Package.json

\`\`\`json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js",
    "test": "jest"
  }
}
\`\`\`

## Testando a API

\`\`\`bash
# Listar usuários
curl -X GET http://localhost:3000/api/users

# Criar usuário
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"João Silva","email":"joao@email.com"}'

# Buscar usuário por ID
curl -X GET http://localhost:3000/api/users/1

# Atualizar usuário (requer autenticação)
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer seu-token" \
  -d '{"name":"João Santos"}'
\`\`\`

## Próximos Passos

1. Integrar com banco de dados (MongoDB, PostgreSQL)
2. Adicionar testes unitários e de integração
3. Implementar documentação com Swagger
4. Adicionar logging estruturado
5. Deploy com Docker

Esta estrutura fornece uma base sólida para APIs RESTful escaláveis!`
    }
  ]
}
