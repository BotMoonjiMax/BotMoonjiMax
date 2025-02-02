const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const menuLogos = (prefix) => {
  return `

  ╔═════════════════════
  ║ ${prefix}logowp
  ║ ${prefix}logotiktok
  ║ ${prefix}logoinstagram
  ║ ${prefix}logofacebook
  ║
  ║ CRIE SEU PRÓPRIO LOGO!
  ║ ${prefix}criarlogo
  ║
  ╚═════════════════════

  `;
};

module.exports = menuLogos;
``
