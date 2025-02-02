const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const pain = async (msg, bot) => {
  try {
    const menuPain = `
╔═════════════════════
║ ${prefix}painel-admin
║ ${prefix}painel-mod
║ ${prefix}painel-info
║
║ PAINEL DE CONTROLE
║
╚═════════════════════
`;

    await bot.sendMessage(msg.from, menuPain, MessageType.text);
  } catch (err) {
    console.error(err);
    await bot.sendMessage(msg.from, 'Erro ao carregar menu de painel!', MessageType.text);
  }
};

module.exports = pain;
```
