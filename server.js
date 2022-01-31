const http = require("http");

http
    .createServer((request, response) =>{
        response.writeHead(200, { 'Content-Type': 'application/json' });

        response.end(JSON.stringify({
          message: 'Hello World Api Node!'
        })); 
    })

    .listen(4001, () => console.log("Servidor Funcionando na porta 4001"));
