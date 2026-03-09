# INOVATA — Móveis Sob Medida

Site institucional da **INOVATA Móveis Sob Medida**, desenvolvido com HTML, CSS e JavaScript puros — sem frameworks ou dependências externas.

---

## Estrutura do Projeto

```
SiteInovata/
├── index.html        # Estrutura HTML da página
├── style.css         # Estilos e layout
├── main.js           # Interações e animações
├── .gitignore        # Arquivos ignorados pelo Git
├── README.md         # Este arquivo
└── img/
    ├── logo.png
    ├── Design sem nome (1).png
    ├── Design sem nome (2).png
    ├── Design sem nome (3).png
    ├── Design sem nome.png
    ├── ideiasparaquartodecasalcores.jpeg
    └── IMAGEM-6-1024x576.jpg
```

---

## Seções

| Seção | Descrição |
|---|---|
| **Hero** | Banner principal com chamada para ação |
| **Stats** | Números de destaque (20+ anos, 100% sob medida) |
| **Sobre** | História e diferenciais da empresa |
| **Valores** | Personalização, Sustentabilidade e Qualidade |
| **Fotos** | Galeria de projetos realizados |
| **Contato** | Dados de contato e link para WhatsApp |

---

## Funcionalidades

- **Scroll suave** com easing cúbico em todos os links âncora
- **Animações de reveal** — cada elemento aparece ao entrar na viewport
- **Navbar responsiva** com menu hamburguer animado
- **Galeria** com efeito hover nas fotos
- **Links diretos** para WhatsApp, e-mail e Instagram

---

## Como Rodar Localmente

Não é necessário instalar nada. Basta abrir o projeto com um servidor local:

**Opção 1 — VS Code (recomendado):**
```bash
# Instale a extensão Live Server e clique em "Go Live"
```

**Opção 2 — Terminal:**
```bash
npx serve .
# ou
python3 -m http.server 5500
```

Depois acesse `http://127.0.0.1:5500` no navegador.

> ⚠️ Não abra o `index.html` diretamente pelo Finder/Explorer — as fontes do Google e alguns recursos podem não carregar sem um servidor local.

---

## Tecnologias

- **HTML5** semântico
- **CSS3** — Grid, Custom Properties, animações
- **JavaScript** — Intersection Observer, smooth scroll
- **Google Fonts** — Cormorant Garamond + DM Sans

---

## Deploy (GitHub Pages)

1. Faça push do projeto para um repositório no GitHub
2. Vá em **Settings → Pages**
3. Em **Source**, selecione a branch `main` e pasta `/ (root)`
4. Clique em **Save** — o site estará disponível em `https://seu-usuario.github.io/nome-do-repo`

---

## .gitignore recomendado

```
.DS_Store
**/.DS_Store
Thumbs.db
*.log
```

---

## Contato

**Marcelo Burigo Rosso**
- 📱 WhatsApp: [51 99239-9600](https://contate.me/inovata)
- 📸 Instagram: [@inovatamoveis](https://www.instagram.com/inovatamoveis/)
- ✉️ E-mail: mb.rosso1973@gmail.com

---

*Desenvolvido por Filipe Rosso — 2024*