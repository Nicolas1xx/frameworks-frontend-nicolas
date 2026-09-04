# Relatório — CRUD completo de Notas

**Aluno:** Nicolas Ricardo Kourani Leão Silva

## 1. Objetivo
Desenvolver uma API REST para gerenciamento de notas, criar um front-end React que consuma essa API e documentar as operações no Postman.

## 2. Atividade 01 — Servidor básico com Express
Servidor básico criado com Node.js e Express e publicado no Render.

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

## 5. Validação do CRUD online
O sistema foi testado após a publicação e as quatro operações principais funcionaram corretamente:

- **GET:** listagem das notas carregada no front-end;
- **POST:** criação da nota `Teste Nicolas` realizada com sucesso;
- **PUT:** edição da nota realizada e refletida na interface;
- **DELETE:** exclusão da nota realizada com sucesso.

Com isso, o fluxo completo entre **Vercel (front-end)** e **Render (API)** foi validado em funcionamento real.

## 6. Postman
A coleção está em `postman/CRUD-Notas.postman_collection.json` e contém as quatro operações principais: GET, POST, PUT e DELETE.

A variável `baseUrl` da coleção já aponta para:

`https://nicolas-aula05-notas-api.onrender.com`

A coleção também possui exemplos de resposta e salva automaticamente o identificador criado no POST para reutilização nas operações PUT e DELETE.

Os testes foram realizados no **Postman Web**. Foram registradas capturas da coleção e das operações, incluindo evidências de resposta **200 OK** nas operações de atualização e exclusão, além das telas das requisições GET e POST.

## 7. Evidências e links
- Repositório GitHub: https://github.com/Nicolas1xx/frameworks-frontend-nicolas
- Servidor básico no Render: https://nicolas-aula05-servidor.onrender.com/
- Back-end CRUD no Render: https://nicolas-aula05-notas-api.onrender.com/
- Endpoint GET das notas: https://nicolas-aula05-notas-api.onrender.com/api/notes
- Front-end no Vercel: https://nicolas-aula05-notas.vercel.app/
- Coleção Postman: `aula-05-api-rest/postman/CRUD-Notas.postman_collection.json`

## 8. Capturas registradas
As evidências visuais preparadas para a entrega incluem:

1. coleção **Aula 05 - CRUD de Notas** importada no Postman Web;
2. requisição **GET - Listar notas**;
3. requisição **POST - Criar nota**;
4. requisição **PUT - Atualizar nota**, com exemplo de resposta `200 OK`;
5. requisição **DELETE - Excluir nota**, com resposta `200 OK` e mensagem `Nota excluída com sucesso`;
6. aplicações e serviços publicados na Vercel e no Render.

## 9. Conclusão
A atividade aplica os principais conceitos de integração entre front-end e back-end: rotas REST, métodos HTTP, JSON, validação básica, CORS, consumo assíncrono e operações de CRUD. O servidor básico e o back-end foram publicados no Render, o front-end React foi publicado na Vercel, a coleção Postman foi preparada e importada, e o CRUD completo foi testado e validado online com sucesso.
