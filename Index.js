```
const { WAConnection, MessageMedia } = require('@adiwajshing/baileys');
const fs = require('fs');

// Configurações do bot
const config = {
  phoneNumber: 'SEU_NUMERO_DE_TELEFONE', // Número de telefone do bot
  clientID: 'SEU_CLIENT_ID', // ID do cliente do bot
  clientSecret: 'SEU_CLIENT_SECRET', // Segredo do cliente do bot
};

// Criar uma conexão com o WhatsApp
const client = new WAConnection();

// Evento de conexão
client.on('open', () => {
  console.log('Bot conectado!');
});

// Evento de mensagem
client.on('chat-update', async (chatUpdate) => {
  if (!chatUpdate.messages) return;

  const message = chatUpdate.messages.all()[0];
  const texto = message.text;

  // Responder a mensagens
  if (texto === 'Oi') {
    client.sendMessage(message.key.remoteJid, 'Olá!');
  } else if (texto === 'Info') {
    client.sendMessage(message.key.remoteJid, 'Eu sou o MOONJI BOT MODZ MAX!');
  }
});

// Conectar ao WhatsApp
client.connect();
```

Substitua `SEU_NUMERO_DE_TELEFONE`, `SEU_CLIENT_ID` e `SEU_CLIENT_SECRET`
