# SETUP

#### Como executar a aplicação localmente

### Servidor

Caminho: /course-app

1. Crie um arquivo .env

2. Adicione nele as seguintes chaves:
    + <b>MONGO_URI</b> - A URI do seu banco de dados MongoDB
    + <b>JWT_SECRET</b> - Segrêdo de sua preferência para o sistema de tokens
    + <b>PORT</b> - Porte de sua preferência

### Cliente

<p>Caminho: /course-app/views</p>

1. Crie um arquivo .env


2. Adicione nele a seguinte chave:
    + <b>REACT_APP_API_URL</b> - A URL local da sua aplicação react.</br>
    Por padrão é http:<nolink>//localhost:3000


3. Edite o arquivo package.json da pasta views, adicionando o PORT que você escolheu pro servidor

    <b>Ex</b>:
        "proxy": "http://localhost:<PORT do servidor aqui>"



### Execução

Para iniciar execute o comando:

    npm install

e os seguintes comandos em terminais diferentes:

    npm run server
    npm run client


Aproveite ^^
