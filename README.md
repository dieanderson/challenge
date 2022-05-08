# TakeBlip Challenge

API Rest desenvolvida como desafio do processo seletivo da empresa TakeBlip.

### Regras de Negócio:
- Criar uma API que realize a integração com a API pública do Github.
- O retorno da API deve conter informações sobre os 5 repositórios de linguagem C# mais antigos
no Github da Take, ordenados de forma crescente por data de criação.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e testes.

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Node.js](https://nodejs.org/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🔧 Instalação

Clonar o repositório utilizando o seguinte código:

```
git clone git@github.com:dieanderson/challenge.git
```

Acessar a pasta do projeto:

```
cd takeblip-challenge/Api
```

Instalar as dependências:

```
npm install
```

Após as dependências instaladas, iniciar o servidor:

```
npm run dev
```

## Métodos
Requisições para a API devem ser enviadas para http://localhost:8080/api/github e seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna lista com os 5 repositórios na linguagem C# mais antigos no Github da Take, ordenados por data de criação de forma crescente. |

+ Exemplo de retorno:

    + body
        ```
        {
            "0": {
                "avatar": "https://avatars.githubusercontent.com/u/4369522?v=4",
                "title": "takenet/library.data",
                "subTitle": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
                "date": "2013-10-25T13:04:51Z",
                "language": "C#"
            },
            "1": {
                "avatar": "https://avatars.githubusercontent.com/u/4369522?v=4",
                "title": "takenet/library.logging",
                "subTitle": "Provides a simple logging interface for applications and some basic implementations of this interface",
                "date": "2013-10-25T15:18:07Z",
                "language": "C#"
            },
            ...
        }
        ```

## 🛠️ Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [DotEnv](https://www.npmjs.com/package/dotenv)
