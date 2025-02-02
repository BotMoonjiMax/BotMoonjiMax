const axios = require('axios');
const cheerio = require('cheerio');

// Definir URL alvo
const url = 'https://www.exemplo.com';

// Função para extrair informações da página
async function scraper() {
  try {
    // Fazer requisição HTTP
    const response = await axios.get(url);

    // Parsear HTML com Cheerio
    const $ = cheerio.load(response.data);

    // Extrair informações desejadas
    const titulo = $('title').text();
    const mensagem = $('p').first().text();

    // Retornar informações extraídas
    return { titulo, mensagem };
  } catch (error) {
    console.error(`Erro: ${error.message}`);
    return null;
  }
}

// Exportar função scraper
module.exports = scraper;
```
