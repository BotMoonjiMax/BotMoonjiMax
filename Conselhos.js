const { MessageType, MessageOptions } = require('@adiwajshing/baileys');
const { prefix } = require('./consts-func');

const conselhos = async (msg, bot) => {
  try {
    const conselho = [
      'Acredite em si mesmo e nunca desista dos seus sonhos.',
      'A vida é curta, então aproveite cada momento.',
      'Não se compare com os outros, seja você mesmo.',
      'A amizade é um presente precioso, valorize-a.',
      'Aprenda com os erros e nunca se renda.',
      'Seja grato pelo que você tem e nunca se esqueça de ajudar os outros.',
      'A vida é um desafio, mas com coragem e determinação, você pode superar qualquer obstáculo.',
      'Não se deixe levar pelas opiniões dos outros, siga o seu coração.',
      'Aprenda a perdoar e esquecer, isso é libertador.',
      'Seja você mesmo, não tente ser alguém que você não é.',
    ];

    const conselhoAleatorio = conselho[Math.floor(Math.random() * conselho.length)];

    await bot.sendMessage(msg.from, conselhoAleatorio, MessageType.text);
  } catch (err) {
    console.error(err);
    await bot.sendMessage(msg.from, 'Erro ao carregar conselho!', MessageType.text);
  }
};

module.exports = conselhos;
```
