# Site Aprendendo Programacao + Blog Next.js

<p align="center">
  <img src="Icons/Logo.png" alt="Aprendendo Programacao Logo" width="250px" style="border-radius: 24px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

Projeto educativo multi-pagina focado no ensino de desenvolvimento de software, incluindo web development, Java e desenvolvimento mobile. O repositorio contem o frontend estatico tradicional do site de apresentacoes e uma aplicacao moderna de blog integrada construida em Next.js.

---

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
│   ├── funcionalidades.md           # Detalhes e funcionalidades das páginas
│   ├── libraries_frameworks.md      # Referência de bibliotecas e frameworks
│   ├── readme_standards.md          # Padrões de documentação e estilo do repositório
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

---

## Hub de Documentacao

A documentacao tecnica detalhada do projeto esta dividida e organizada na pasta [doc/](doc/):

* **[Funcionalidades e Conteudo das Paginas](doc/funcionalidades.md)**: Detalhamento tecnico das paginas, recursos de interatividade e midias do site e do blog.
* **[Requisitos do Projeto](doc/requisitos.md)**: Especificacoes, estrutura minima exigida, criterios de avaliacao e regras de entrega.
* **[Guia de Bibliotecas e Frameworks](doc/libraries_frameworks.md)**: Detalhamento conceitual sobre diferencas entre frameworks e bibliotecas no conteudo e codigo.
* **[Guia de Deploy na Vercel](doc/deploy_guide.md)**: Roteiro completo de deploy continuo para o site hibrido na Vercel.
* **[Resolucao de Erros da Vercel](doc/correcoes_vercel.md)**: Historico de correcoes e configuracao de builds e basePaths do Next.js.
* **[Padroes de Documentacao e Estilo](doc/readme_standards.md)**: Manual de estilo sobre estrutura de arquivos, regras de logo, badges e autor.

---

## Como Usar

### Site Principal
Abra o arquivo `index.html` diretamente em seu navegador web ou inicie um servidor local de desenvolvimento a partir da pasta raiz:
```bash
npm run dev
```

### Blog Next.js
Navegue ate a pasta do blog, instale as dependencias e inicie o servidor:
```bash
cd blog
npm install
npm run dev
```
O blog estara disponivel em `http://localhost:3001` e o site principal em `http://localhost:3000`.

---

## Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ThyagoToledo">
        <img src="https://github.com/ThyagoToledo.png" width="100px;" alt="Thyago Toledo"/>
        <br />
        <sub><b>Thyago Toledo</b></sub>
      </a>
    </td>
  </tr>
</table>

---

Este projeto e disponibilizado sob os termos da licenca MIT. Para mais detalhes consulte o arquivo de licenca do repositorio.
