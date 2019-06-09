# Favorite Purses

[![Build Status](https://travis-ci.org/vitebo/favorite_purses.svg?branch=master)](https://travis-ci.org/vitebo/favorite_purses)

Acesse a **[aplicação em produção](https://vitebo.github.io/favorite_purses/)**

## Configurando o ambiente de desenvolvimento

### Ambiente de desenvolvimento Docker

Para configurar o ambiente de desenvolvimento utilizando o Docker para isolamento do ambiente.

```bash
# monta a imagem
$ docker-compose build

# sobe o container
$ docker-compose up
```

### Configurando diretamente o ambiente

Para configurar o ambiente de desenvolvimento sem utilizar o Docker instalando diretamente os programas utilizados pelo sistema.

#### Dependências

- O projeto utiliza o [Yarn](https://yarnpkg.com) ao invés do [NPM](https://www.npmjs.com/) para gerenciamento de dependências
- [Node](https://nodejs.org) na versão **12.4.0**

``` bash
# instala as dependências
$ yarn

# sobe a aplicação
$ yarn dev
```

## Fazendo deploy

Para checar o resultado do deloy **[acesse a aplicação em produção](https://vitebo.github.io/favorite_purses/)**.

### Automático

Todo *merge/commit* na *branch* **master** dispara um deploy automaticamente.

Você pode acompanhar o andamento do *deploy* pelo **[travis](https://travis-ci.org/vitebo/favorite_purses)**.

## Manual

Existe a possibilidade de fazer um deploy manual.

``` bash
# gera o projeto estático
$ yarn generate:prod

# envia os arquivos para o servidor
$ yarn deploy
```
