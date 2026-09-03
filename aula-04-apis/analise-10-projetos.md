# Análise de 10 projetos que consomem APIs

Objetivo: observar como aplicações front-end reais integram APIs REST, lidam com JSON e exibem dados de forma dinâmica.

| # | Tipo de projeto | Framework | API utilizada | O que pratica |
|---|---|---|---|---|
| 1 | Pokédex | React | PokeAPI | Busca e renderização de Pokémon |
| 2 | Previsão do tempo | React | OpenWeatherMap | Requisições por cidade e estados de carregamento |
| 3 | Busca de usuários | React | GitHub API | Pesquisa e exibição de perfis |
| 4 | Pokédex | Vue | PokeAPI | Componentes e consumo REST |
| 5 | Clima | Vue | OpenWeatherMap | Formulários e dados assíncronos |
| 6 | Catálogo de filmes | Angular | TMDB | Listas, serviços e imagens |
| 7 | Clima com localização | Angular | OpenWeatherMap / GeoDB | Integração de mais de uma API |
| 8 | Catálogo de filmes | Next.js | TMDB | Renderização com dados externos |
| 9 | Exploração espacial | Next.js | NASA APOD | Consumo de API pública com mídia |
| 10 | Filmes e detalhes | Next.js | TMDB | Rotas dinâmicas e detalhes por ID |

## Conceitos identificados

### API REST
Os projetos usam endpoints HTTP para obter ou manipular recursos. O front-end não precisa conhecer como os dados são armazenados no servidor; ele trabalha com a interface disponibilizada pela API.

### JSON
JSON é o formato mais comum nas respostas analisadas. Depois da requisição, os dados são transformados em objetos JavaScript e usados pelos componentes.

### Fetch e Axios
`fetch` é nativo do navegador e atende bem casos simples. Axios oferece uma camada adicional para configuração de requisições, interceptadores e tratamento de respostas.

### Variáveis de ambiente
APIs que exigem chave, como TMDB e OpenWeatherMap, normalmente guardam a chave em variáveis de ambiente. Isso ajuda na organização do projeto, embora segredos reais não devam ser expostos em código puramente front-end.

### Componentização
Os dados vindos da API costumam ser divididos em componentes: cards, listas, cabeçalhos e páginas de detalhes. Isso facilita manutenção e reaproveitamento.

### Tratamento de estados
Uma boa aplicação precisa prever carregamento, sucesso, ausência de dados e erro. Apenas fazer a requisição não é suficiente.

## Conclusão
A principal característica comum é a separação entre interface e fonte de dados. Frameworks diferentes mudam a organização do código, mas todos dependem de requisições assíncronas, tratamento de JSON e atualização dinâmica da tela.
