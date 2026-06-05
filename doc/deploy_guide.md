# Guia de Deploy - Site Aprendendo Programacao

Este documento apresenta o roteiro para realizacao do deploy e publicacao do projeto no ar via GitHub e Vercel, incluindo a integracao hibrida entre as paginas estaticas e o blog Next.js.

---

## Preparacao Completa

Arquivos estruturais e de configuracao necessarios para o deploy:
- `index.html` - Pagina inicial com conteudo educativo
- `apresentacoes.html` - Pagina de apresentacoes dos projetos
- `portal.html` - Portal de servicos, FAQ e contato
- `style.css` - Estilos principais
- `apresentacoes.css` - Estilos das apresentacoes
- `portal.css` - Estilos do portal
- `script.js` - JavaScript geral
- `apresentacoes.js` - JavaScript das abas
- `portal.js` - JavaScript do portal
- `vercel.json` - Configuracao de roteamento e builds do Vercel
- `package.json` - Configuracao do projeto npm
- `.gitignore` - Arquivos ignorados pelo controle de versao Git
- `README.md` - Documentacao de resumo e hub do repositorio

---

## Passos para Upload no GitHub

### 1. Inicializar Repositorio Git
No terminal de comandos, execute na pasta raiz do projeto:
```bash
git init
git add .
git commit -m "Initial commit: Site Aprendendo Programacao"
```

### 2. Criar Repositorio no GitHub
1. Acesse github.com
2. Clique em "New repository"
3. Nome do repositorio: `Site-Aprendendo-Programacao`
4. Descricao (opcional): `Site educativo sobre programacao com apresentacoes de projetos`
5. Marque o repositorio como Public
6. Nao inicialize com README (ja temos o arquivo local no projeto)

### 3. Conectar com o Repositorio Remoto
Associe o repositorio remoto e envie o codigo principal:
```bash
git remote add origin https://github.com/ThyagoToledo/Site-Aprendendo-Programacao.git
git branch -M main
git push -u origin main
```

---

## Deploy no Vercel

O projeto foi configurado com suporte a execucao hibrida (HTML estatico + blog Next.js compilado).

### Opcao 1: Conectar via GitHub (Recomendado)
1. Acesse vercel.com e realize login com a sua conta GitHub
2. No painel principal, clique em "New Project"
3. Importe o repositorio `Site-Aprendendo-Programacao`
4. O Vercel detectara automaticamente a configuracao local
5. Clique em "Deploy" e aguarde a finalizacao do build

### Opcao 2: Deploy via CLI do Vercel
Caso prefira realizar o deploy diretamente da sua maquina:
```bash
npm install -g vercel
vercel --prod
```

### Configuracoes de Deploy Integradas:
- **vercel.json**: Arquivo que especifica as regras de execucao estatica do site de frontend tradicional e compila a subpasta do Next.js.
- **Static assets**: Otimizacao automatica das paginas HTML, CSS e JavaScript estaticos.
- **Next.js Compilation**: O blog contido na pasta `/blog` e compilado para exportacao estatica durante a esteira de build.
- **Roteamento Hibrido**: Redirecionamento configurado para que requisicoes a `/blog/*` abram o blog Next.js, enquanto a raiz e demais paginas apontem para os arquivos HTML estaticos locais.

---

## Requisitos de Entrega Atendidos

- Tema educativo livre focado em tecnologia e desenvolvimento
- Mais de 10 secoes/funcionalidades estruturadas
- Design responsivo integrado
- Layout planejado com boa escolha de tipografia e paleta de cores
- Interacoes por JavaScript Vanilla (sistema de abas, accordion do FAQ e formularios)
- Tecnologias aplicadas: HTML5, CSS3, JavaScript ES6+ e Next.js/Tailwind/TypeScript
- Pronto para hospedagem online permanente

---

## Adicionando Videos (Para o Futuro)

Para substituir os placeholders por videos de apresentacao reais na pagina `apresentacoes.html`:

1. Realize o upload dos videos desejados no YouTube
2. Abra o arquivo `apresentacoes.html`
3. Localize o bloco da classe `.video-placeholder` e substitua pelo codigo de iframe do YouTube correspondente:
```html
<div class="video-container">
    <div class="video-wrapper">
        <iframe 
            src="https://www.youtube.com/embed/SEU_VIDEO_ID" 
            title="Titulo do Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
    </div>
</div>
```
4. Faca o commit das mudancas e envie ao Git para atualizacao automatica:
```bash
git add apresentacoes.html
git commit -m "docs: Add presentation videos"
git push
```

---

## URLs Finais do Projeto

Apos o deploy completo na nuvem, o projeto tera os seguintes enderecos principais:
- **GitHub**: `https://github.com/ThyagoToledo/Site-Aprendendo-Programacao`
- **Vercel**: `https://site-aprendendo-programacao.vercel.app`
- **Dominios personalizados**: Configuraveis no painel administrativo da Vercel

---

## Suporte e Solucao de Problemas

Se encontrar problemas de carregamento no ar:
1. Abra o console do desenvolvedor no navegador (tecla F12) para checar erros de rota
2. Certifique-se de testar localmente antes de comitar: `npm run dev`
3. Consulte as mensagens e historicos de deploy no painel da Vercel para identificar possiveis erros de compilacao
4. Verifique se todos os arquivos necessarios estao no repositorio git remoto
