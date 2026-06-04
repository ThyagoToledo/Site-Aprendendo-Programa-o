# 🚀 Guia de Deploy - Site Aprendendo Programação

## 📋 Preparação Completa

✅ **Arquivos Criados:**
- `index.html` - Página inicial com conteúdo educativo
- `apresentacoes.html` - Página de apresentações dos projetos
- `style.css` - Estilos principais
- `apresentacoes.css` - Estilos das apresentações
- `script.js` - JavaScript geral
- `apresentacoes.js` - JavaScript das abas
- `vercel.json` - Configuração do Vercel
- `package.json` - Configuração do projeto
- `.gitignore` - Arquivos a serem ignorados pelo Git
- `README.md` - Documentação completa

## 🔄 Passos para Upload no GitHub

### 1. Inicializar Repositório Git
```bash
cd "c:\Users\thyag\OneDrive\Desktop\Site-Aprendendo-Programa-o-main"
git init
git add .
git commit -m "Initial commit: Site Aprendendo Programação"
```

### 2. Criar Repositório no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nome: `Site-Aprendendo-Programacao`
4. Descrição: `Site educativo sobre programação com apresentações de projetos`
5. Marque como Public
6. NÃO inicialize com README (já temos um)

### 3. Conectar com o Repositório Remoto
```bash
git remote add origin https://github.com/ThyagoToledo/Site-Aprendendo-Programacao.git
git branch -M main
git push -u origin main
```

## ⚡ Deploy no Vercel

### Opção 1: Conectar via GitHub (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `Site-Aprendendo-Programacao`
5. Vercel detectará automaticamente a configuração
6. Clique em "Deploy"

### Opção 2: Deploy via CLI
```bash
npm install -g vercel
cd "c:\Users\thyag\OneDrive\Desktop\Site-Aprendendo-Programa-o-main"
vercel --prod
```

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Atendidos:
- [x] Tema livre educativo
- [x] Mais de 10 seções/funcionalidades
- [x] Design responsivo completo
- [x] Layout bem planejado
- [x] Funcionalidades interativas
- [x] HTML5, CSS3, JavaScript
- [x] Preparado para hospedagem online

### 📄 Páginas e Seções:
1. **Página Inicial** (index.html)
   - Header com navegação
   - Conceitos fundamentais do HTML
   - Explicação sobre Frameworks
   - Bibliotecas vs Frameworks
   - Canais de entretenimento
   - Footer com contatos

2. **Página de Apresentações** (apresentacoes.html)
   - Sistema de abas interativo
   - Projeto Web (placeholder para vídeo)
   - Java Merlin o Guru (placeholder para vídeo)
   - Mobile Kotlin Bobbie Goods (placeholder para vídeo)
   - Navegação entre páginas

## 🎥 Adicionando Vídeos (Para o Futuro)

### Para substituir os placeholders por vídeos reais:

1. **Faça upload dos vídeos no YouTube**

2. **Edite o arquivo `apresentacoes.html`**

3. **Substitua cada seção `.video-placeholder` por:**
```html
<div class="video-container">
    <div class="video-wrapper">
        <iframe 
            src="https://www.youtube.com/embed/SEU_VIDEO_ID" 
            title="Título do Vídeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
    </div>
</div>
```

4. **Faça commit das mudanças:**
```bash
git add .
git commit -m "Add presentation videos"
git push
```

5. **Deploy automático** - Vercel fará o deploy automaticamente

## 🌐 URLs Finais

Após o deploy, você terá:
- **GitHub**: `https://github.com/ThyagoToledo/Site-Aprendendo-Programacao`
- **Vercel**: `https://site-aprendendo-programacao.vercel.app`
- **Domínio personalizado**: Configurável no painel do Vercel

## 📞 Suporte

Se tiver problemas:
1. Verifique o console do navegador (F12)
2. Teste localmente primeiro: `npm run dev`
3. Consulte a documentação do Vercel
4. Verifique se todos os arquivos estão no repositório

---

🎓 **Projeto pronto para apresentação e avaliação!**
