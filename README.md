# bryanjonathan.github.io

Portfolio de Jonathan Bryan, publicado em https://bryanjonathan.github.io/.

Feito com Vite, React, TypeScript, Tailwind CSS, framer-motion e i18next (pt-BR / en).

## Desenvolvimento

```bash
npm install
npm run dev
```

- Textos: `src/i18n/locales/pt-BR.json` e `src/i18n/locales/en.json`
  - Experiência: cada item de `resume.experience.<id>.highlights` vira um bullet; use `<b>…</b>` para destacar números
- Datas, links, níveis e contatos: `src/data/resume.ts`
- Foto: salve como `src/assets/foto.jpg` (ou `.png`/`.webp`); sem o arquivo, aparecem as iniciais

## Deploy

Cada push na `main` dispara `.github/workflows/deploy.yml`, que faz o build e publica no GitHub Pages
(Settings → Pages → Source: GitHub Actions).

Projetos antigos ficam em `public/` e são publicados nos mesmos caminhos de antes
(`/bikcraft/...`, `/faculdade-legale/`, `/faculdade-legale-anna/`).
