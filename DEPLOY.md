# Deploys — Frameworks Front-end

## Render
O arquivo `render.yaml` na raiz configura os dois serviços publicados da Aula 05:

1. [`nicolas-aula05-servidor`](https://nicolas-aula05-servidor.onrender.com/) — atividade de servidor Express.
2. [`nicolas-aula05-notas-api`](https://nicolas-aula05-notas-api.onrender.com/) — API CRUD de notas.

O endpoint principal da API está disponível em:

https://nicolas-aula05-notas-api.onrender.com/api/notes

## Vercel
O front-end da Aula 05 utiliza a seguinte pasta como Root Directory:

`aula-05-api-rest/frontend`

Variável de ambiente utilizada pelo front-end:

`VITE_API_URL=https://nicolas-aula05-notas-api.onrender.com/api/notes`

Projeto publicado: https://nicolas-aula05-notas.vercel.app/

O diretório possui `vercel.json`, Vite e comando de build configurados.

## Postman
Importar o arquivo existente em:

`aula-05-api-rest/postman/`

A coleção contém GET, POST, PUT e DELETE. Substituir a variável/base URL pela URL da API publicada no Render e executar as quatro operações.

## Relatório
O relatório da atividade deve registrar:

- link do repositório GitHub;
- link do servidor básico no Render;
- link da API CRUD no Render;
- link do frontend na Vercel;
- link público da coleção do Postman, caso solicitado;
- screenshots do sistema e dos testes.
