# Análise de 10 projetos que consomem APIs

Objetivo: observar como aplicações front-end reais integram APIs REST, lidam com JSON e exibem dados de forma dinâmica.

| # | Projeto | Framework | API utilizada | Repositório | O que pratica |
|---|---|---|---|---|---|
| 1 | PokeAPI React | React | PokeAPI | [Onnichan/pokeapi-react](https://github.com/Onnichan/pokeapi-react) | Busca e renderização de Pokémon |
| 2 | React Weather App | React | OpenWeatherMap | [arasgungore/react-weather-app](https://github.com/arasgungore/react-weather-app) | Requisições por cidade e estados de carregamento |
| 3 | GitHub API Search | React | GitHub API | [raphael-ferreira/github-api-search](https://github.com/raphael-ferreira/github-api-search) | Pesquisa e exibição de perfis |
| 4 | Vue Pokedex | Vue.js | PokeAPI | [JohannesL2/vue-pokedex](https://github.com/JohannesL2/vue-pokedex) | Componentes e consumo REST |
| 5 | Vue Weather | Vue.js | OpenWeatherMap | [hamdigaied/vue-weather](https://github.com/hamdigaied/vue-weather) | Formulários e dados assíncronos |
| 6 | Angular Movies | Angular | TMDB | [tastejs/angular-movies](https://github.com/tastejs/angular-movies) | Listas, serviços e imagens |
| 7 | Angular Weather App | Angular | OpenWeatherMap / GeoDB | [IevgeniiaAbdulina/angular-weather-app](https://github.com/IevgeniiaAbdulina/angular-weather-app) | Integração de mais de uma API |
| 8 | TMDB 2.0 | Next.js | TMDB | [AhmedSemih/TMDB-2.0](https://github.com/AhmedSemih/TMDB-2.0) | Renderização com dados externos |
| 9 | NASA Explorer | Next.js | NASA APOD | [stomarp/nasa-explorer](https://github.com/stomarp/nasa-explorer) | Consumo de API pública com mídia |
| 10 | Movies Next | Next.js | TMDB | [dsidous/movies-next](https://github.com/dsidous/movies-next) | Rotas dinâmicas e detalhes por ID |

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
