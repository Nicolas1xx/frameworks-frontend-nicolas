# Relatório — CRUD completo de Notas

**Aluno:** Nicolas Ricardo Kourani Leão Silva

## 1. Objetivo
Desenvolver uma API REST para gerenciamento de notas, criar um front-end React que consuma essa API e documentar as operações no Postman.

## 2. Atividade 01 — Servidor básico com Express
Servidor básico criado com Node.js e Express e configurado para publicação no Render.

**URL publicada:** https://nicolas-aula05-servidor.onrender.com/

## 3. Back-end — CRUD de Notas
Tecnologias: Node.js, Express e CORS. Os dados são persistidos em `data.json` durante a execução do serviço.

### Endpoints
- `GET /api/notes` — listar notas
- `GET /api/notes/:id` — buscar uma nota
- `POST /api/notes` — criar nota
- `PUT /api/notes/:id` — atualizar nota
- `DELETE /api/notes/:id` — excluir nota

**URL da API publicada:** https://nicolas-aula05-notas-api.onrender.com/

**Endpoint principal:** https://nicolas-aula05-notas-api.onrender.com/api/notes

## 4. Front-end
Aplicação React com formulário de criação/edição e lista de notas. O front-end está configurado para consumir a API publicada no Render.

**URL publicada na Vercel:** https://nicolas-aula05-notas.vercel.app/

A URL da API também pode ser alterada por meio da variável de ambiente `VITE_API_URL`.

## 5. Postman
A coleção está em `postman/CRUD-Notas.postman_collection.json` e contém as quatro operações principais: GET, POST, PUT e DELETE.

A variável `baseUrl` da coleção já aponta para:

`https://nicolas-aula05-notas-api.onrender.com`

## 6. Evidências e links
- Repositório GitHub: https://github.com/Nicolas1xx/quiz-app
- Servidor básico no Render: https://nicolas-aula05-servidor.onrender.com/
- Back-end CRUD no Render: https://nicolas-aula05-notas-api.onrender.com/
- Endpoint GET das notas: https://nicolas-aula05-notas-api.onrender.com/api/notes
- Front-end no Vercel: https://nicolas-aula05-notas.vercel.app/
- Coleção Postman: `aula-05-api-rest/postman/CRUD-Notas.postman_collection.json`
- Link público da coleção Postman: **depende da publicação da coleção em uma conta Postman**

## 7. Capturas solicitadas
Para a entrega final, registrar capturas das telas abaixo:
1. código do back-end;
2. servidor básico funcionando no Render;
3. API de notas funcionando no Render;
4. front-end React funcionando na Vercel;
5. requisição GET no Postman;
6. requisição POST no Postman;
7. requisição PUT no Postman;
8. requisição DELETE no Postman.

## 8. Conclusão
A atividade aplica os principais conceitos de integração entre front-end e back-end: rotas REST, métodos HTTP, JSON, validação básica, CORS, consumo assíncrono e operações de CRUD. O servidor básico e o back-end foram publicados no Render, e o front-end React foi publicado na Vercel.
