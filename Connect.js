const { WAConnection, MessageMedia } = require('@adiwajshing/baileys');

const connectToWhatsApp = async () => {
  const client = new WAConnection();

  client.on('open', () => {
    console.log('Bot conectado!');
  });

  client.on('close', () => {
    console.log('Bot desconectado!');
  });

  client.on('error', (error) => {
    console.log('Erro ao conectar:', error);
  });

  await client.connect();
  return client;
};

module.exports = connectToWhatsApp;
```

Esse arquivo cria uma conexão com o WhatsApp usando a biblioteca `@adiwajshing/baileys`. Ele também define eventos para quando o bot se conecta, desconecta ou encontra um erro.

Para usar esse arquivo, você pode criar um arquivo `index.js` com o seguinte código:

```
const connectToWhatsApp = require('./connect');

(async () => {
  const client = await connectToWhatsApp();
  // Aqui você pode adicionar código para lidar com mensagens, etc.
})();
`` 
