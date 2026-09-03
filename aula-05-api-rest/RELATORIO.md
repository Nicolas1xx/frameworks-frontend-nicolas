# Relatório — CRUD completo de Notas

**Aluno:** Nicolas Ricardo Kourani Leão Silva

## 1. Objetivo
Desenvolver uma API REST para gerenciamento de notas, criar um front-end React que consuma essa API e documentar as operações no Postman.

## 2. Back-end
Tecnologias: Node.js, Express e CORS. Os dados são persistidos em `data.json`.

### Endpoints
- `GET /api/notes` — listar notas
- `GET /api/notes/:id` — buscar uma nota
- `POST /api/notes` — criar nota
- `PUT /api/notes/:id` — atualizar nota
- `DELETE /api/notes/:id` — excluir nota

## 3. Front-end
Aplicação React com formulário de criação/edição e lista de notas. A URL da API pode ser configurada com `VITE_API_URL`.

## 4. Postman
A coleção está em `postman/CRUD-Notas.postman_collection.json` e contém as quatro operações principais: GET, POST, PUT e DELETE.

## 5. Evidências e links
Preencher depois da publicação real:

- Repositório GitHub: `A DEFINIR`
- Back-end no Render: `A PUBLICAR`
- Front-end no Vercel: `A PUBLICAR`
- Link da coleção Postman: `A PUBLICAR`
- Captura do back-end funcionando: `INSERIR PRINT`
- Captura do front-end funcionando: `INSERIR PRINT`
- Capturas das requisições Postman: `INSERIR PRINTS`

## 6. Conclusão
A atividade aplica os principais conceitos de integração entre front-end e back-end: rotas REST, métodos HTTP, JSON, validação básica, CORS, consumo assíncrono e operações de CRUD.
