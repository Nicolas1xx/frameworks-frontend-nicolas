# Publicação final — Frameworks Front-end

## Render
O arquivo `render.yaml` na raiz já está configurado para criar dois serviços:

1. `nicolas-aula05-servidor` — Atividade 01 da Aula 05.
2. `nicolas-aula05-notas-api` — API CRUD de notas.

No Render, basta criar um Blueprint a partir deste repositório. O serviço da API deverá disponibilizar a rota:

`/api/notes`

## Vercel
Importar este repositório e definir como Root Directory:

`aula-05-api-rest/frontend`

Adicionar a variável de ambiente:

`VITE_API_URL=https://URL-DO-RENDER/api/notes`

O projeto já possui `vercel.json`, Vite e comando de build configurados.

## Postman
Importar o arquivo existente em:

`aula-05-api-rest/postman/`

A coleção contém GET, POST, PUT e DELETE. Substituir a variável/base URL pela URL da API publicada no Render e executar as quatro operações.

## Relatório
Depois dos deploys, registrar no relatório:

- link do repositório GitHub;
- link do servidor básico no Render;
- link da API CRUD no Render;
- link do frontend na Vercel;
- link público da coleção do Postman, caso solicitado;
- screenshots do sistema e dos testes.
