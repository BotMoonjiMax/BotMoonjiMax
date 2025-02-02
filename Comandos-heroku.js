const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const comandosHeroku = async (msg, bot) => {
  try {
    const menuComandosHeroku = `
╔═════════════════════
║ ${prefix}heroku-login
║ ${prefix}heroku-apps
║ ${prefix}heroku-logs
║
║ COMANDOS HEROKU
║
╚═════════════════════
`;

    await bot.sendMessage(msg.from, menuComandosHeroku, MessageType.text);
  } catch (err) {
    console.error(err);
    await bot.sendMessage(msg.from, 'Erro ao carregar menu de comandos Heroku!', MessageType.text);
  }
};

module.exports = comandosHeroku;
