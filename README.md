# Nodejs-Backend-CRUD

Este é um projeto Node.js que utiliza o Sequelize e o Sequelize CLI para criar e gerenciar um banco de dados. Ele inclui um Swagger Page para documentação da API.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em seu sistema:

-   [Node.js](https://nodejs.org/)
-   [NPM](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-projeto.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd nome-do-projeto
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Configure o banco de dados no arquivo `config/config.json`.

5. Execute as migrações para criar as tabelas no banco de dados:

    ```bash
    npx sequelize db:migrate
    ```

## Uso

Para iniciar o servidor da aplicação, execute o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor na porta padrão 3000. Você pode acessar a API em `http://localhost:3000`.

## Documentação da API (Swagger)

A documentação da API está disponível em Português e pode ser acessada na seguinte URL:

```
http://localhost:3000/swagger
```

## Comandos Úteis

-   Executar migrações:

    ```bash
    npx sequelize db:migrate
    ```

-   Criar um novo modelo:

    ```bash
    npx sequelize model:generate --name NomeDoModelo --attributes atributo1:tipo, atributo2:tipo, ...
    ```

-   Criar um novo arquivo de migração:

    ```bash
    npx sequelize migration:generate --name nome-da-migracao
    ```

-   Gerar a documentação Swagger:

    Certifique-se de que o Swagger está configurado corretamente no seu projeto.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto. Abra uma issue para discutir novos recursos ou problemas encontrados.

