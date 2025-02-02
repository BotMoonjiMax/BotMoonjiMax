const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const configurar = async (msg, bot) => {
  try {
    const menuConfigurar = `
╔═════════════════════
║ ${prefix}setprefix
║ ${prefix}setnome
║ ${prefix}setdesc
║ ${prefix}setfoto
║
║ CONFIGURAÇÕES DO BOT
║
╚═════════════════════
`;

    await bot.sendMessage(msg.from, menuConfigurar, MessageType.text);
  } catch (err) {
    console.error(err);
    await bot.sendMessage(msg.from, 'Erro ao carregar menu de configurações!', MessageType.text);
  }
};

module.exports = configurar
