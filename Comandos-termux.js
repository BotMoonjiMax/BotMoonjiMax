const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const comandosTermux = async (msg, bot) => {
  try {
    const menuComandosTermux = `
╔═════════════════════
║ ${prefix}comandosbasicos
║ ${prefix}comandosavancados
║ ${prefix}comandosdeinstalacao
║
║ COMANDOS TERMUX
║
╚═════════════════════
`;

    await bot.sendMessage(msg.from, menuComandosTermux, MessageType.text);
  } catch (err) {
    console.error(err);
    await bot.sendMessage(msg.from, 'Erro ao carregar menu de comandos Termux!', MessageType.text);
  }
};

module.exports = comandosTermux;
``
