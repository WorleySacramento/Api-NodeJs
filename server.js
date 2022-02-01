const http = require("http");

http
    .createServer((request, response) =>{
        response.writeHead(200, { 'Content-Type': 'application/json' });

        if(request.url === "/produto"){
          response.end (JSON.stringify({
              message: "Rota de produtos",
          })
          );  
        }

        if(request.url === "/usuario"){
            response.end(JSON.stringify({
                message: "Rota de Usuário",
            })
            );
        }

       


    })

    .listen(4001, () => console.log("Servidor Funcionando na porta 4001"));
