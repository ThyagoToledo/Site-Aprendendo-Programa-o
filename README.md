# Site Aprendendo Programação + Blog Next.js

<p align="center">
  <img src="Icons/Logo.png" alt="Aprendendo Programação Logo" width="250px" style="border-radius: 24px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);" />
</p>

Projeto educativo multi-página focado no ensino de desenvolvimento de software, incluindo web development, Java e desenvolvimento mobile. Agora com blog moderno em Next.js!

## Estrutura do Projeto

```
Site-Aprendendo-Programacao/
├── 📄 index.html                    # Página inicial educativa
├── 📄 apresentacoes.html            # Apresentações dos projetos
├── 📄 portal.html                   # Portal completo (7 seções)
├── 📁 blog/                         # 🆕 Blog Next.js moderno
│   ├── src/app/                     # App Router do Next.js
│   ├── package.json                 # Dependências do blog
│   ├── next.config.js               # Configuração Next.js
│   ├── tailwind.config.js           # Configuração Tailwind
│   └── README.md                   # Documentação do blog
├── 📁 assets/                       # Recursos estáticos
│   ├── 📁 css/                      # Arquivos de estilo
│   │   ├── style.css                # Estilos principais
│   │   ├── apresentacoes.css        # Estilos das apresentações
│   │   └── portal.css               # Estilos do portal
│   └── 📁 js/                       # Scripts JavaScript
│       ├── script.js                # Funcionalidades gerais
│       ├── apresentacoes.js         # Sistema de abas
│       └── portal.js                # Interações do portal
├── 📁 doc/                          # 🆕 Documentação modularizada
│   ├── correcoes_vercel.md          # Histórico de correções do deploy
│   ├── deploy_guide.md              # Guia de deploy na Vercel
│   ├── libraries_frameworks.md      # Referência de bibliotecas e frameworks
│   └── requisitos.md                # Requisitos e especificações do projeto
├── 📁 Icons/                        # 🆕 Ícones e imagens do repositório
│   ├── 📄 Favicon.png               # Ícone do site
│   └── 📄 Logo.png                  # Logo principal do projeto
├── 📁 Videos/                       # Diretório para vídeos futuros
├── 📄 package.json                  # Configuração npm
├── 📄 vercel.json                   # Configuração Vercel
├── 📄 README.md                     # Este arquivo (Hub)
├── 📄 .gitignore                    # Arquivos ignorados pelo Git
└── 📄 .editorconfig                 # Configuração do editor
```

## Páginas e Seções (14+ implementadas)

###  **Página Principal** (`index.html`)
- Header com navegação
- Conceitos fundamentais do HTML
- Explicação sobre Frameworks vs Bibliotecas
- Canais educativos do YouTube
- Footer com informações de contato

###  **Apresentações** (`apresentacoes.html`)
- **Projeto Web**: HTML/CSS/JavaScript
- **Java Merlin o Guru**: Aplicação desktop
- **Mobile Kotlin Bobbie Goods**: App Android
- Sistema de abas interativo
- Placeholders para vídeos de apresentação

###  **Portal Completo** (`portal.html`)
1. **Sobre**: Informações da equipe
2. **Contato**: Formulários funcionais
3. **Blog**: Posts sobre programação
4. **Galeria**: Imagens responsivas
5. **Serviços**: Cards de tecnologias
6. **FAQ**: Perguntas frequentes expansíveis
7. **Login/Cadastro**: Sistema de autenticação

### **Blog Next.js** (`blog/`) - NOVO!
- **Sistema dinâmico** com 6+ artigos sobre programação
- **Categorias organizadas**: HTML/CSS, JavaScript, React, Node.js
- **Design moderno** com Tailwind CSS
- **SEO otimizado** com metadata dinâmica
- **Integração perfeita** com o site principal
- **Deploy otimizado** para Vercel

## Tecnologias e Funcionalidades

### Frontend Tradicional
- **HTML5** - Estrutura semântica com elementos modernos
- **CSS3** - Estilos avançados com Grid, Flexbox e animações
- **JavaScript ES6+** - Funcionalidades interativas e navegação suave

### Blog Moderno (Next.js)
- **Next.js 14+** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior robustez
- **Tailwind CSS** - Framework CSS para design responsivo
- **Server Components** - Renderização otimizada no servidor
- **Static Generation** - Performance máxima com pré-renderização

### Recursos CSS Avançados
- **CSS Grid & Flexbox** - Layouts responsivos e flexíveis
- **Linear Gradients** - Gradientes para backgrounds e elementos
- **CSS Transitions** - Animações suaves para interações
- **Media Queries** - Design totalmente responsivo
- **CSS Custom Properties** - Variáveis para cores consistentes

### JavaScript Moderno
- **Event Listeners** - Manipulação de eventos do DOM
- **Smooth Scrolling** - Navegação suave entre seções
- **DOM Manipulation** - Interações dinâmicas com elementos
- **ES6 Arrow Functions** - Sintaxe moderna do JavaScript

### Integrações Externas
- **YouTube iFrames** - Vídeos incorporados responsivos
- **External Images** - Imagens de perfil de canais e ícones
- **Responsive Video Containers** - Players com aspect ratio 16:9


## Conteúdo das Páginas

### Página Inicial (index.html)
#### 1. Conceitos Fundamentais do HTML
- **O que é HTML?** - Linguagem de marcação e suas características
- **Estrutura Básica** - DOCTYPE, html, head, body
- **Tags Principais** - h1-h6, p, a, img e suas funções
- **Atributos HTML** - class, id, src, href e outros

#### 2. Frameworks
- **Definição detalhada** - O que são e como funcionam
- **Benefícios** - Rapidez, padronização, segurança, comunidade
- **Vídeo incorporado** - YouTube explicativo sobre frameworks

#### 3. Bibliotecas
- **Definição de bibliotecas** - Diferenças conceituais
- **Framework vs Biblioteca** - Comparação visual em cards
- **Vídeo @DotcodeEdu** - Explicação especializada

#### 4. Canais de Entretenimento
- **CriaScript** - Canal de programação com shorts divertidos
- **Por que entretenimento?** - Benefícios do aprendizado divertido

### Página de Apresentações (apresentacoes.html)
#### Sistema de Abas Interativo:

** Projeto Web**
- Site educacional desenvolvido com HTML5, CSS3 e JavaScript
- Funcionalidades: conteúdo educacional, design responsivo, integração de vídeos
- Tech stack: HTML5, CSS3, JavaScript, Design Responsivo

** Java Merlin o Guru**
- Aplicação Java demonstrando OOP e design patterns
- Características: sistema inteligente, arquitetura sólida, testes unitários
- Tech stack: Java, OOP, Design Patterns, Maven/Gradle

** Mobile Kotlin Bobbie Goods**
- Aplicativo Android desenvolvido em Kotlin
- Funcionalidades: interface nativa, sincronização, performance, segurança
- Tech stack: Kotlin, Android, Material Design, MVVM

## Hub de Documentação

A documentação técnica detalhada do projeto está centralizada e organizada na pasta [doc/](doc/):

* **[Requisitos do Projeto](doc/requisitos.md)**: Conjunto de regras, estrutura de páginas mínimas exigidas, padrões de responsividade, critérios de avaliação e especificações para a produção de vídeos.
* **[Guia de Bibliotecas e Frameworks](doc/libraries_frameworks.md)**: Detalhamento técnico e conceitual sobre a diferença entre frameworks (ex: React, Angular, Vue.js) e bibliotecas (ex: jQuery, Lodash).
* **[Guia de Deploy na Vercel](doc/deploy_guide.md)**: Roteiro completo de deploy contínuo para o site estático e para a integração com o Blog Next.js na Vercel.
* **[Resolução de Erros da Vercel](doc/correcoes_vercel.md)**: Histórico de correções para erros de build, rotas no `vercel.json` e soluções de deploy do App Router.

## Como Usar

### Site Principal (HTML/CSS/JS)
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/ThyagoToledo/Site-Aprendendo-Programacao.git
   cd Site-Aprendendo-Programacao
   ```

2. **Abra no navegador**:
   - Abra `index.html` diretamente no navegador
   - Ou use um servidor local: `npm run dev`

### Blog Next.js 
1. **Configuração automatizada**:
   ```bash
   # Execute o script de configuração
   setup-blog.bat
   ```

2. **Configuração manual**:
   ```bash
   cd blog
   npm install
   npm run dev
   ```

3. **Acesse o blog**:
   - Blog: `http://localhost:3001`
   - Site principal: `http://localhost:3000`

## Deploy no Vercel

O projeto está configurado para deploy automático no Vercel com suporte ao blog Next.js:

### Configuração Incluída:
- **vercel.json** - Configuração para site HTML + blog Next.js
- **Assets estáticos** - HTML, CSS e JS otimizados
- **Build do Next.js** - Blog compilado automaticamente
- **Roteamento híbrido** - `/blog/*` para Next.js, resto para HTML estático

### Passos para Deploy:
1. **Fork/Clone** do repositório no GitHub
2. **Conectar** o repositório ao Vercel
3. **Deploy automático** - Vercel detecta automaticamente a configuração
4. **URL personalizada** - Configurar domínio personalizado se necessário

## Preparação para Vídeos

### Abas Preparadas:
Cada aba na página de apresentações está preparada para receber vídeos:

1. **Web Project** - Placeholder para vídeo da apresentação do site
2. **Java Merlin o Guru** - Placeholder para demonstração da aplicação Java  
3. **Mobile Kotlin Bobbie Goods** - Placeholder para demo do app Android

### Para Adicionar Vídeos:
1. **Upload** dos vídeos no YouTube
2. **Substituir** o placeholder pelo iframe do YouTube
3. **Manter** o design responsivo existente

## Conteúdo Multimídia

### Vídeos Incorporados:
1. **Framework Explicativo**
   - Fonte: YouTube
   - URL: youtube.com/embed/0WCGyMTmT2A
   - Responsivo com aspect ratio 16:9

2. **Biblioteca por @DotcodeEdu**
   - Fonte: YouTube  
   - URL: youtube.com/embed/HnVu2Y12dPg
   - Com informações do canal

3. **CriaScript Exemplo**
   - Fonte: YouTube
   - URL: youtube.com/embed/uIVKT3Irc7o
   - Demonstração de conteúdo educativo

### Imagens Externas:
- **Perfis de canal** - Twitter, YouTube avatars
- **Ícones temáticos** - Representações visuais dos conceitos
- **Logos** - Identidade visual dos canais parceiros

## Contato e Links

- **Email**: thyagotoledoassis@gmail.com
- **GitHub**: [ThyagoToledo](https://github.com/ThyagoToledo)
- **Canais Parceiros**:
  - [@DotcodeEdu](https://www.youtube.com/@DotcodeEdu) - Bibliotecas e conceitos
  - [CriaScript](https://www.youtube.com/@criascript/shorts) - Entretenimento educativo

## Frameworks e Bibliotecas Mencionados

### No Conteúdo Educativo:
- **React** - Framework JavaScript mencionado como exemplo
- **Angular** - Framework citado na comparação
- **jQuery** - Biblioteca JavaScript de exemplo
- **Lodash** - Biblioteca utilitária mencionada

### Tecnologias Demonstradas:
- **HTML5** - Base estrutural do site
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Interatividade e navegação
- **YouTube API** - Incorporação de vídeos

---

**Material educativo gratuito e acessível!** Site focado no aprendizado progressivo de desenvolvimento web.

