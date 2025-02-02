// Importar bibliotecas necessárias
const WhatsApp = require('discord.js');
const fs = require('fs');

// Definir prefixo do bot
const prefix = '!';

// Definir funções de alteração
module.exports = {
  alterarPrefixo: (novoPrefixo) => {
    prefix = novoPrefixo;
    console.log(`Prefixo alterado para ${novoPrefixo}`);
  },

  alterarNomeBot: (novoNome) => {
    const bot = client.user;
    bot.setUsername(novoNome);
    console.log(`Nome do bot alterado para ${novoNome}`);
  },

  alterarAvatarBot: (novoAvatar) => {
    const bot = client.user;
    bot.setAvatar(novoAvatar);
    console.log(`Avatar do bot alterado`);
  },

  alterarStatusBot: (novoStatus) => {
    const bot = client.user;
    bot.setActivity(novoStatus);
    console.log(`Status do bot alterado para ${novoStatus}`);
  },
};
```
