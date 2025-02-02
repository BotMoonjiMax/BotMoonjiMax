const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const lista = async (msg, bot) => {
  try {
    const menuLista = `
╔═════════════════════
║ ${prefix}listabans
║ ${prefix}listawhitelist
║ ${prefix}listaprem
║
║ LISTAS DO BOT
║
╚═════════════════════
`;

    await bot.sendMessage(msg.from, menuLista, MessageType.text);
  } catch (err) {
    console.error(err);
    await bot.sendMessage(msg.from, 'Erro ao carregar menu de listas!', MessageType.text);
  }
};

module.exports = lista;
``
