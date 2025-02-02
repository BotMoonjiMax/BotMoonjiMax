```
const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const menuPrem = (prefix) => {
  return `

  ╔═════════════════════
  ║ ${prefix}addprem @usuario
  ║ ${prefix}dellprem @usuario
  ║ ${prefix}listprem
  ║ ${prefix}prem
  ║
  ║ COMANDOS EXCLUSIVOS
  ║ ${prefix}criarsticker
  ║ ${prefix}figlet
  ║ ${prefix}meme
  ║
  ╚═════════════════════

  `;
};

module.exports = menuPrem;
``
