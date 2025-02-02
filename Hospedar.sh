```
bash
#!/bin/bash

Defina o diretório do bot
BOT_DIR=/path/to/MoonjiBotModzMax

Defina o comando para iniciar o bot
NODE_CMD="node index.js"

Entre no diretório do bot
cd $BOT_DIR

Inicie o bot
$NODE_CMD
```

Substitua `/path/to/MoonjiBotModzMax` pelo caminho real para o diretório do bot.

Para tornar o arquivo `hospedar.sh` executável, execute o comando:

```
bash
chmod +x hospedar.sh
```

Agora você pode hospedar o bot executando o comando:

```
bash
./hospedar.sh
```

Lembre-se de que você precisará ter o Node.js instalado e configurado para executar o bot.

Se você quiser hospedar o bot em um servidor, você pode usar um serviço de hospedagem como o Heroku ou o DigitalOcean. Você também pode usar um gerenciador de processos como o PM2 para manter o bot em execução.
