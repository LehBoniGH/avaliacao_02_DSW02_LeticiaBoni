# Catálogo de Filmes

CRUD de filmes feito para a Avaliação 2 de Programação para a Web II. A API é simulada no [mockapi.io](https://mockapi.io).

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
Link vercel: https://catalogofilmes-peach.vercel.app/

