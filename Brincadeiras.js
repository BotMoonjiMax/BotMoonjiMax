```
const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const brincadeiras = async (msg, bot) => {
  try {
    const brincadeira = await bot.sendMessage(msg.from, `Escolha uma brincadeira:\n\n1. Adivinhe o número\n2. Jogo da velha\n3. Pedra, papel e tesoura`, MessageType.text, {
      buttons: [
        { buttonId: '1', buttonText: { displayText: 'Adivinhe o número' }, type: 1 },
        { buttonId: '2', buttonText: { displayText: 'Jogo da velha' }, type: 1 },
        { buttonId: '3', buttonText: { displayText: 'Pedra, papel e tesoura' }, type: 1 },
      ],
      headerType: 1,
    });

    bot.on('callback_query', (query) => {
      if (query.data === '1') {
        // Adivinhe o número
        const numeroAleatorio = Math.floor(Math.random() * 100);
        bot.sendMessage(query.chat, `Tente adivinhar o número entre 1 e 100!`, MessageType.text);
        bot.on('message', (msg) => {
          if (msg.body === `${prefix}adivinhe`) {
            const chute = parseInt(msg.body.split(' ')[1]);
            if (chute === numeroAleatorio) {
              bot.sendMessage(msg.from, `Parabéns! Você acertou o número!`, MessageType.text);
            } else {
              bot.sendMessage(msg.from, `Não foi dessa vez! O número era ${numeroAleatorio}.`, MessageType.text);
            }
          }
        });
      } else if (query.data === '2') {
        // Jogo da velha
        const jogoDaVelha = [
          [' ', ' ', ' '],
          [' ', ' ', ' '],
          [' ', ' ', ' '],
        ];
        bot.sendMessage(query.chat, `Jogo da velha!\n\n${jogoDaVelha[0][0]} | ${jogoDaVelha[0][1]} | ${jogoDaVelha[0][2]}\n${jogoDaVelha[1][0]} | ${jogoDaVelha[1][1]} | ${jogoDaVelha[1][2]}\n${jogoDaVelha[2][0]} | ${jogoDaVelha[2][1]} | ${jogoDaVelha[2][2]}`, MessageType.text);
        bot.on('message', (msg) => {
          if (msg.body === `${prefix}jogovelha`) {
            const linha = parseInt(msg.body.split(' ')[1]);
            const coluna = parseInt(msg.body.split(' ')[2]);
            if (jogoDaVelha[linha][coluna] === ' ') {
              jogoDaVelha[linha][coluna] = 'X';
              bot.sendMessage(msg.from, `Jogo da velha!\n\n${jogoDaVelha[0][0]} | ${jogoDaVelha[0][1]} | ${jogoDaVelha[0][2]}\n${jogoDaVelha[1][0]} | ${jogoDaVelha[1][1]} | ${jogoDaVelha[1][2]}\n${jogoDaVelha[2][0]} | ${jogoDaVelha[2][1]} | ${jogoDaVelha[2][2]}`, MessageType.text);
            } else {
              bot.sendMessage(msg.from, `Posição já ocupada!`, MessageType.text);
            }
          }
        });
      } else if (query.data === '3') {
        // Pedra, papel e tesoura
        const pedraPapelTesoura = ['pedra', 'papel', 'tesoura'];
        const escolhaAleatoria = pedraPapelTesoura[Math.floor(Math.random() * pedraPapelTesoura.length)];
        bot.sendMessage(query.chat, `Pedra, papel e tesoura!\n\nEscolha uma opção:\n\n1. Pedra\n2. Papel\n3. Tesoura`, MessageType.text, {
          buttons: [
            { buttonId: '1', buttonText: { displayText: 'Pedra' }, type: 1 },
            { buttonId: '2', buttonText: { displayText: 'Papel' }, type: 1 },
            { buttonId: '3', buttonText: { displayText: 'Tesoura'
``````
const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const brincadeiras = async (msg, bot) => {
  try {
    const brincadeira = await bot.sendMessage(msg.from, `Escolha uma brincadeira:\n\n1. Adivinhe o número\n2. Jogo da velha\n3. Pedra, papel e tesoura`, MessageType.text, {
      buttons: [
        { buttonId: '1', buttonText: { displayText: 'Adivinhe o número' }, type: 1 },
        { buttonId: '2', buttonText: { displayText: 'Jogo da velha' }, type: 1 },
        { buttonId: '3', buttonText: { displayText: 'Pedra, papel e tesoura' }, type: 1 },
      ],
      headerType: 1,
    });

    bot.on('callback_query', (query) => {
      if (query.data === '1') {
        // Adivinhe o número
        const numeroAleatorio = Math.floor(Math.random() * 100);
        bot.sendMessage(query.chat, `Tente adivinhar o número entre 1 e 100!`, MessageType.text);
        bot.on('message', (msg) => {
          if (msg.body === `${prefix}adivinhe`) {
            const chute = parseInt(msg.body.split(' ')[1]);
            if (chute === numeroAleatorio) {
              bot.sendMessage(msg.from, `Parabéns! Você acertou o número!`, MessageType.text);
            } else {
              bot.sendMessage(msg.from, `Não foi dessa vez! O número era ${numeroAleatorio}.`, MessageType.text);
            }
          }
        });
      } else if (query.data === '2') {
        // Jogo da velha
        const jogoDaVelha = [
          [' ', ' ', ' '],
          [' ', ' ', ' '],
          [' ', ' ', ' '],
        ];
        bot.sendMessage(query.chat, `Jogo da velha!\n\n${jogoDaVelha[0][0]} | ${jogoDaVelha[0][1]} | ${jogoDaVelha[0][2]}\n${jogoDaVelha[1][0]} | ${jogoDaVelha[1][1]} | ${jogoDaVelha[1][2]}\n${jogoDaVelha[2][0]} | ${jogoDaVelha[2][1]} | ${jogoDaVelha[2][2]}`, MessageType.text);
        bot.on('message', (msg) => {
          if (msg.body === `${prefix}jogovelha`) {
            const linha = parseInt(msg.body.split(' ')[1]);
            const coluna = parseInt(msg.body.split(' ')[2]);
            if (jogoDaVelha[linha][coluna] === ' ') {
              jogoDaVelha[linha][coluna] = 'X';
              bot.sendMessage(msg.from, `Jogo da velha!\n\n${jogoDaVelha[0][0]} | ${jogoDaVelha[0][1]} | ${jogoDaVelha[0][2]}\n${jogoDaVelha[1][0]} | ${jogoDaVelha[1][1]} | ${jogoDaVelha[1][2]}\n${jogoDaVelha[2][0]} | ${jogoDaVelha[2][1]} | ${jogoDaVelha[2][2]}`, MessageType.text);
            } else {
              bot.sendMessage(msg.from, `Posição já ocupada!`, MessageType.text);
            }
          }
        });
      } else if (query.data === '3') {
        // Pedra, papel e tesoura
        const pedraPapelTesoura = ['pedra', 'papel', 'tesoura'];
        const escolhaAleatoria = pedraPapelTesoura[Math.floor(Math.random() * pedraPapelTesoura.length)];
        bot.sendMessage(query.chat, `Pedra, papel e tesoura!\n\nEscolha uma opção:\n\n1. Pedra\n2. Papel\n3. Tesoura`, MessageType.text, {
          buttons: [
            { buttonId: '1', buttonText: { displayText: 'Pedra' }, type: 1 },
            { buttonId: '2', buttonText: { displayText: 'Papel' }, type: 1 },
            { buttonId: '3', buttonText: { displayText: 'Tesoura'
```
