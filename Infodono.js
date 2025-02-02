const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const infodono = async (msg, bot) => {
  try {
    const dono = 'Seu nome'; // substitua por seu nome
    const contato = 'Seu número de telefone'; // substitua por seu número de telefone
    const menuInfoDono = `
╔═════════════════════
║ Informações do dono:
║
║ Nome: ${dono}
║ Contato: ${contato}
║
║ Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato!
║
╚═════════════════════
`;

    await bot.sendMessage(msg.from, menuInfoDono, MessageType.text);
  } catch (err) {
    console.error(err);
    await bot.sendMessage(msg.from, 'Erro ao carregar informações do dono!', MessageType.text);
  }
};

module.exports = infodono;
``
