# crud-user-with-axios-mui

## O projeto

Este é um projeto básico de um crud (create, read, update e delete) de usuários.

### Técnologias utilizadas

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)

## Pré-requisitos

- [Node](https://nodejs.org/) 16.14.2
- [npm](https://www.npmjs.com/) 8.5.0
- [Yarn](https://yarnpkg.com/) 1.22.18
- [Python](https://www.python.org/) 3.9+

### Instalando as dependências

Na pasta do raiz do projeto execute:

```bash
yarn install
# ou
npm install
```

> Este passo só precisa ser feito na primeira vez que rodar o projeto

### Instalando submodulo

```bash
git submodule update --init --recursive
```

## Rodando o projeto em modo desenvolvedor

### Preparando a IDE

É recomendável utilizar o [Visual Studio Code](https://code.visualstudio.com/) e instalar as seguintes extensões:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### Iniciando o projeto

Para iniciar execute:

```bash
yarn start
# ou
npm start
```

O navegador vai abrir com o projeto.

### Code Quality

O projeto conta com o [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) para checar a qualidade e formatação do código.

O código é checado antes de realizar um commit (necessário instalar o [pre-commit](#instalando-o-pre-commit)) e na [CI](https://docs.gitlab.com/ee/ci/) do gitlab configurada no arquivo [.gitlab-ci.yml](.gitlab-ci.yml).

### Mock Data

Quando em ambiente de desenvolvimento o projeto irá rodar com dados mockados, ou seja, como não haverá backend será criada uma simulação dele. A cada chamada na API, estes dados retornam como em uma requisição HTTP normal, apenas para tornar mais fácil o desenvolvimento.
