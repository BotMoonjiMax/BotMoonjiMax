Comandos de Moderação
*!ban*
Banir um usuário do servidor.
```
client.on('message', (message) => {
  if (message.content.startsWith('!ban')) {
    const usuario = message.mentions.users.first();
    if (usuario) {
      message.guild.member(usuario).ban();
      message.channel.send(`Usuário ${usuario.tag} banido!`);
    } else {
      message.channel.send('Usuário não encontrado!');
    }
  }
});
```

*!kick*
Expulsar um usuário do servidor.
```
client.on('message', (message) => {
  if (message.content.startsWith('!kick')) {
    const usuario = message.mentions.users.first();
    if (usuario) {
      message.guild.member(usuario).kick();
      message.channel.send(`Usuário ${usuario.tag} expulso!`);
    } else {
      message.channel.send('Usuário não encontrado!');
    }
  }
});
```

*!mute*
Silenciar um usuário do servidor.
```
client.on('message', (message) => {
  if (message.content.startsWith('!mute')) {
    const usuario = message.mentions.users.first();
    if (usuario) {
      message.guild.member(usuario).addRole('ROLE_ID_DO_MUTE');
      message.channel.send(`Usuário ${usuario.tag} silenciado!`);
    } else {
      message.channel.send('Usuário não encontrado!');
    }
  }
});
```

Comandos de Informação
*!ajuda*
Exibir a lista de comandos disponíveis.
```
client.on('message', (message) => {
  if (message.content.startsWith('!ajuda')) {
    message.channel.send('Lista de comandos disponíveis:');
    message.channel.send('!ban - Banir um usuário');
    message.channel.send('!kick - Expulsar um usuário');
    message.channel.send('!mute - Silenciar um usuário');
  }
});
```

*!info*
Exibir informações sobre o servidor.
```
client.on('message', (message) => {
  if (message.content.startsWith('!info')) {
    message.channel.send(`Nome do servidor: ${message.guild.name}`);
    message.channel.send(`Número de membros: ${message.guild.memberCount}`);
  }
});
```

*!ping*
Verificar a latência do bot.
```
client.on('message', (message) => {
  if (message.content.startsWith('!ping')) {
    message.channel.send('Pong!');
  }
});
```

Lembre-se de substituir `ROLE_ID_DO_MUTE` pelo ID da role de mute do seu servidor!

Esses são apenas alguns exemplos de comandos que você pode adicionar ao seu bot. Você pode criar mais comandos e personalizar o comportamento do seu bot conforme necessário!Aqui estão alguns comandos que você pode adicionar ao arquivo `moonjiBot.js`:

Comandos de Moderação
*!ban*
Banir um usuário do servidor.
```
client.on('message', (message) => {
  if (message.content.startsWith('!ban')) {
    const usuario = message.mentions.users.first();
    if (usuario) {
      message.guild.member(usuario).ban();
      message.channel.send(`Usuário ${usuario.tag} banido!`);
    } else {
      message.channel.send('Usuário não encontrado!');
  }
