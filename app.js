const express = require("express");
const {randomUUID} =require('crypto')

const app = express();

app.use(express.json());

const products = [];




/*
POST = insere dado
GET = busca um ou mais dados
PUT = altera  dado
DELETE = remove dado
*/

/*
 Body = sempre que eu quiser enviar dados para minha aplicação
 Params = /product /253643543
 Query = /product?id=227564377value=254354
*/


app.post("/products", (request, response)=>{
    //nome e preço name price
    const {name, price} = request.body;

    

    const product = {
      name,
      price,  
      id: randomUUID(),
    }

    products.push(product)

    return response.json(product)

});


app.listen(4002, () => console.log("Servidor Rodando Na Porta 4002"));