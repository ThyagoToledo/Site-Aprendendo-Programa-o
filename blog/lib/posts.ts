// blog/lib/posts.ts

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  emoji: string;
};

// Exemplo de posts. Adicione todos os posts reais aqui!
export const posts: Post[] = [
  {
    slug: "introducao-html5",
    title: "Introdução ao HTML5: Tags Semânticas e Estrutura",
    excerpt: "Aprenda sobre as principais tags semânticas do HTML5 e como estruturar suas páginas web de forma mais eficiente...",
    content: "<p>Conteúdo completo do post sobre HTML5...</p>",
    date: "2025-01-15",
    category: "HTML & CSS",
    emoji: "📄"
  },
  {
    slug: "css-flexbox-guia-completo",
    title: "CSS Flexbox: Guia Completo para Layout Responsivo",
    excerpt: "Domine o CSS Flexbox e crie layouts responsivos de forma simples e eficiente...",
    content: "<p>Conteúdo completo do post sobre Flexbox...</p>",
    date: "2025-01-12",
    category: "HTML & CSS",
    emoji: "📐"
  },
  {
    slug: "javascript-funcoes-avancadas",
    title: "JavaScript: Funções Avançadas e Arrow Functions",
    excerpt: "Explore conceitos avançados de funções em JavaScript, incluindo arrow functions, callbacks, promises e async/await...",
    content: "<p>Conteúdo completo do post sobre funções JS...</p>",
    date: "2025-01-10",
    category: "JavaScript",
    emoji: "⚡"
  },
  {
    slug: "react-hooks-useState-useEffect",
    title: "React Hooks: useState, useEffect e Hooks Personalizados",
    excerpt: "Aprenda os React Hooks essenciais e como criar seus próprios hooks personalizados...",
    content: "<p>Conteúdo completo do post sobre React Hooks...</p>",
    date: "2025-01-08",
    category: "React & Next.js",
    emoji: "🧩"
  },
  {
    slug: "nextjs-13-app-router-server-components",
    title: "Next.js 13+: App Router e Server Components",
    excerpt: "Descubra as novidades do Next.js 13+ com App Router, Server Components e como eles revolucionam o desenvolvimento...",
    content: "<p>Conteúdo completo do post sobre Next.js 13+...</p>",
    date: "2025-01-05",
    category: "React & Next.js",
    emoji: "🔥"
  },
  {
    slug: "nodejs-apis-restful-express-middleware",
    title: "Node.js: Criando APIs RESTful com Express e Middleware",
    excerpt: "Aprenda a criar APIs RESTful robustas com Node.js, Express, middleware personalizados e boas práticas de desenvolvimento...",
    content: "<p>Conteúdo completo do post sobre Node.js APIs...</p>",
    date: "2025-01-03",
    category: "Node.js",
    emoji: "🚀"
  }
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
