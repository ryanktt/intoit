# SETUP

#### Como executar a aplicação localmente

### Servidor

<b>Caminho: /course-app</b>

1. Crie um arquivo .env

2. Adicione nele as seguintes chaves:
    + <b>MONGO_URI</b> - A URI do seu banco de dados MongoDB
    + <b>JWT_SECRET</b> - Segrêdo de sua preferência para o sistema de tokens
    + <b>PORT</b> - Port de sua preferência

### Cliente

<b>Caminho: /course-app/views</b>

1. Crie um arquivo .env


2. Adicione nele a seguinte chave:
    + <b>REACT_APP_API_URL</b> - A URL local da sua aplicação react.</br>
    Por padrão é http://<nolink>localhost:3000


3. Edite o arquivo package.json, adicionando o port que você escolheu pro servidor ao proxy

    <b>Exemplo</b>:

        "proxy": "http://localhost:<port do servidor aqui>"



### Execução

<b>Caminho: /course-app</b>

Para iniciar execute o comando:

    npm install

e os seguintes comandos em terminais diferentes:

    npm run server
    npm run client


Aproveite ^^
