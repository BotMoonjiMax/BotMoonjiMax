Aqui está um exemplo básico de como criar um bot 

*aluguel.js*
```
const Twilio = require('twilio');
const accountSid = 'SEU_ACCOUNT_SID';
const authToken = 'SEU_AUTH_TOKEN';
const client = new Twilio(accountSid, authToken);

const numeroBot = 'SEU_NUMERO_BOT';
const mensagemBoasVindas = 'Olá! Bem-vindo ao Aluguel Bot!';

// Funções do bot
function enviarMensagemBoasVindas(from) {
  client.messages
    .create({
      from: numeroBot,
      to: from,
      body: mensagemBoasVindas,
    })
    .then((message) => console.log(message.sid));
}

function enviarMensagemDeAjuda(from) {
  const mensagemAjuda = 'Esse é o Aluguel Bot! Eu posso ajudar com o seguinte:';
  client.messages
    .create({
      from: numeroBot,
      to: from,
      body: mensagemAjuda,
    })
    .then((message) => console.log(message.sid));
}

function enviarMensagemDeAluguel(from, mensagem) {
  // Lógica para processar a mensagem de aluguel
  const resposta = 'Recebemos sua mensagem de aluguel!';
  client.messages
    .create({
      from: numeroBot,
      to: from,
      body: resposta,
    })
    .then((message) => console.log(message.sid));
}

// Webhook para receber mensagens do WhatsApp
app.post('/webhook', (req, res) => {
  const from = req.body.From;
  const mensagem = req.body.Body;

  if (mensagem === 'Olá' || mensagem === 'oi') {
    enviarMensagemBoasVindas(from);
  } else if (mensagem === 'ajuda') {
    enviarMensagemDeAjuda(from);
  } else {
    enviarMensagemDeAluguel(from, mensagem);
  }

  res.status(200).send('OK');
});

const app = express();
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
```
Esse código cria um servidor Express.js que ouve mensagens do WhatsApp e responde de acordo com a lógica definida .
