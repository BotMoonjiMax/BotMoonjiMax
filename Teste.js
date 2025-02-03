Aqui está um 
```
const assert = require('assert');
const MoonjiBot = require('./MoonjiBot');

describe('MoonjiBot', () => {
  it('deve responder ao comando !help', async () => {
    const bot = new MoonjiBot();
    const resposta = await bot.responderComando('!help');
    assert.ok(resposta.includes('Comandos disponíveis:'));
  });

  it('deve responder ao comando !comandos', async () => {
    const bot = new MoonjiBot();
    const resposta = await bot.responderComando('!comandos');
    assert.ok(resposta.includes('Comandos disponíveis:'));
  });

  it('deve responder ao comando !heroku-login', async () => {
    const bot = new MoonjiBot();
    const resposta = await bot.responderComando('!heroku-login');
    assert.ok(resposta.includes('Login efetuado com sucesso!'));
  });

  it('deve responder ao comando !heroku-apps', async () => {
    const bot = new MoonjiBot();
    const resposta = await bot.responderComando('!heroku-apps');
    assert.ok(resposta.includes('Aplicativos do Heroku:'));
  });

  it('deve responder ao comando !termux', async () => {
    const bot = new MoonjiBot();
    const resposta = await bot.responderComando('!termux');
    assert.ok(resposta.includes('Comandos do Termux:'));
  });

  it('deve responder ao comando !brincadeiras', async () => {
    const bot = new MoonjiBot();
    const resposta = await bot.responderComando('!brincadeiras');
    assert.ok(resposta.includes('Brincadeiras disponíveis:'));
  });
});
```
