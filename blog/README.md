#  Blog Next.js - Aprendendo Programação

Este é um blog moderno desenvolvido com Next.js 14+ e Tailwind CSS que complementa o site principal "Aprendendo Programação".

##  Funcionalidades

- **Blog dinâmico** com artigos sobre programação
- **Sistema de categorias** para organizar o conteúdo
- **Design responsivo** com Tailwind CSS
- **SEO otimizado** com metadata dinâmica
- **Integração perfeita** com o site principal
- **Deploy no Vercel** com build otimizado

##  Estrutura do Projeto

```
blog/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página inicial do blog
│   │   ├── posts/
│   │   │   └── [slug]/         # Páginas dinâmicas dos posts
│   │   ├── categorias/         # Página de categorias
│   │   └── globals.css         # Estilos globais
│   └── lib/
│       └── posts.ts            # Lógica dos posts
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

##  Instalação e Execução

### 1. Instalar Dependências
```bash
cd blog
npm install
```

### 2. Executar em Desenvolvimento
```bash
npm run dev
```

O blog estará disponível em: `http://localhost:3001`

### 3. Build para Produção
```bash
npm run build
```

##  Adicionando Novos Posts

Para adicionar novos posts, você tem duas opções:

### Opção 1: Modificar o arquivo `posts.ts`
Edite o array `getExamplePosts()` em `src/lib/posts.ts` e adicione novos posts:

```typescript
{
  slug: 'meu-novo-post',
  title: 'Meu Novo Post Incrível',
  date: '2025-01-20',
  excerpt: 'Uma breve descrição do post...',
  category: 'JavaScript',
  content: `# Meu Novo Post

Conteúdo do post em markdown...`
}
```

### Opção 2: Sistema de Arquivos (Futuro)
Você pode criar uma pasta `content/posts/` e adicionar arquivos `.md`:

```
content/
└── posts/
    ├── meu-post.md
    └── outro-post.md
```

##  Personalização

### Cores e Tema
Edite `tailwind.config.js` para personalizar as cores:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#667eea',
      secondary: '#764ba2'
    }
  }
}
```

### Layout
Modifique `src/app/layout.tsx` para alterar o header, navegação ou footer.

##  Deploy no Vercel

O blog está configurado para deploy automático no Vercel:

1. **Push para GitHub**: Todas as mudanças são deployadas automaticamente
2. **Builds Otimizados**: Next.js gera páginas estáticas para melhor performance
3. **URLs Amigáveis**: Sistema de rotas dinâmicas

### Configuração no Vercel
O arquivo `vercel.json` na raiz do projeto já está configurado para:
- Servir o blog em `/blog/*`
- Manter o site principal funcionando
- Build otimizado do Next.js

##  Integração com o Site Principal

O blog está totalmente integrado ao site principal:

- **Link na navegação**: Botão " Blog" no menu principal
- **Navegação consistente**: Links de volta ao site principal
- **Design harmonioso**: Mesma paleta de cores e tipografia

##  Próximos Passos

### Funcionalidades Futuras:
1. **Sistema de busca** nos posts
2. **Comentários** com GitHub Issues ou Disqus
3. **Newsletter** para notificar novos posts
4. **Tags** para organização mais detalhada
5. **Modo escuro** para melhor UX
6. **Analytics** para acompanhar métricas

### Melhorias Técnicas:
1. **MDX** para componentes React em posts
2. **Cache avançado** para melhor performance
3. **Sitemap** automático para SEO
4. **RSS Feed** para assinantes
5. **Otimização de imagens** automática

##  Tecnologias Utilizadas

- **Next.js 14+**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior robustez
- **Tailwind CSS**: Framework CSS para design rápido
- **Tailwind Typography**: Plugin para estilização de conteúdo
- **Gray Matter**: Parser para frontmatter em Markdown
- **Vercel**: Plataforma de deploy e hospedagem

##  Contribuindo

Para contribuir com novos posts ou melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Adicione seus posts ou modificações
4. Faça um pull request

##  Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para detalhes.

---

** Contato**
- Email: thyago10a2007@gmail.com
- GitHub: [@ThyagoToledo](https://github.com/ThyagoToledo)

** Se este projeto foi útil para você, considere dar uma estrela no GitHub!**
