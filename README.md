//Como executar a aplicação localmente

//Servidor

Caminho: /course-app/;

1. Crie um arquivo .env

2. Adicione nele as seguintes chaves:
    * MONGO_URI - A URI do seu banco de dados MongoDB
    * JWT_SECRET - Segrêdo de sua preferência para o sistema de tokens
    * PORT - Porte de sua preferência

// Cliente

Caminho: /course-app/views;

1. Crie um arquivo .env

2. Adicione nele a seguinte chave:
    * REACT_APP_API_URL - A URL local da sua aplicação react. Por padrão é http://localhost:3000

3. Edite o arquivo package.json da pasta views, adicionando o PORT que você escolheu pro servidor
    Ex:
        "proxy": "http://localhost:(PORT do servidor)"



//Execução

Para iniciar execute os seguintes comandos em terminais diferentes:
    * npm run server
    * npm run client


Aproveite ^^ 


