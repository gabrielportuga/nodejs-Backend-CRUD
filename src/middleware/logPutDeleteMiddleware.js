const cardService = require('../services/cardService');

module.exports = async (req, res, next) => {
  if (req.method !== 'PUT' && req.method !== 'DELETE') return;
  
  const id = req.params.id;
  const dateTime = new Date().toLocaleString('pt-br');
  if (!id) return res.sendStatus(400);

  const card = await cardService.getCard(id);
  if (!card) return res.sendStatus(404);

  if (req.method === 'PUT') {
      const { titulo, conteudo, lista, id } = req.body;
      if (card.id !== id) return res.status(400).json({ error: 'ids não correspondem' });
      if (!(titulo && conteudo && lista && id)) return res.sendStatus(400);
      console.info(`${dateTime} - Card ${card.id} - ${card.titulo} - Alterar`);
  }
  else if (req.method === 'DELETE') {
      console.info(`${dateTime} - Card ${card.id} - ${card.titulo} - Remover`);
  }

  next();
};