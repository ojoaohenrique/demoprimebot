// server.js

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { WebhookClient } = require("dialogflow-fulfillment");


// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})
);

// https://expressjs.com/en/starter/basic-routing.html
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

//AQUI COMEÇA O SEU CHATBOT

app.post("/NOME", function(request, response) {
  const agent = new WebhookClient({request: request, response: response});
  
  //MAPEAMENTO DAS INTENTS

  let intentMap = new Map();
  intentMap.set('NOME DA INTENT', NOME DA FUNÇÃO);
  agent.handleRequest(intentMap);

 
  //CÓDIGO TESTE

   function welcome(agent){
     agent.add('Seja bem vindos! Teste de Webhook')
  }

  //FIM DO CÓDIGO TESTE
 
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
