```
const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const menu = (prefix) => {
  return `

  ╔═════════════════════
  ║ ${prefix}info
  ║ ${prefix}donate
  ║ ${prefix}owner
  ║
  ║ COMANDOS DE DIVERSÃO
  ║ ${prefix}meme
  ║ ${prefix}joke
  ║
  ║ COMANDOS DE UTILIDADE
  ║ ${prefix}timer
  ║ ${prefix}translate
  ║
  ╚═════════════════════

  `;
};

module.exports = menu;
``
