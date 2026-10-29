# Catálogo de Filmes

CRUD de filmes feito para a Avaliação 2 de Programação para a Web II, com React, React Router Dom e Axios. A API é simulada no [mockapi.io](https://mockapi.io).

## Configurar a API

1. No mockapi.io, crie um projeto e um recurso chamado `filmes` com os campos `nome`, `genero` e `ano`, todos do tipo String.
2. Copie o endereço base do projeto (algo como `https://xxxxxxxx.mockapi.io`).
3. Cole esse endereço na constante `URL_BASE` em `src/servicos/api.js`.

## Rodar localmente

```
npm install
npm run dev
```

## Gerar a versão de produção

```
npm run build
```

## Páginas

| Rota | Página |
| --- | --- |
| `/` | Início, com id e nome de todos os filmes |
| `/ler/:id` | Todos os dados do filme escolhido |
| `/criar` | Formulário de cadastro |
| `/alterar` | Busca por id e formulário de edição |
| `/apagar` | Busca por id e confirmação da exclusão |

## Publicação

O arquivo `vercel.json` já redireciona qualquer rota para o `index.html`, então atualizar a página em `/criar` ou `/ler/3` funciona normalmente no Vercel.
