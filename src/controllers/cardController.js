const cardService = require('../services/cardService');

const getCards = (async (req, res) => {
    try {
        const cards = await cardService.getCards();
        res.send(cards);
    }
    catch (err){
        return res.sendStatus(500);
    }
});

const postCard = (async (req, res) => {
    try {
        const {titulo, conteudo, lista} = req.body;
        const card = await cardService.createCard({titulo, conteudo, lista});
        if (card)
            res.status(201).json(card);
        else
            return res.sendStatus(400);
    }
    catch (err){
        return res.sendStatus(500);
    }
});

const putCard = (async (req, res) => {
    try {
        const id = req.params.id;
        const { titulo, conteudo, lista} = req.body;
        const card = await cardService.updateCard(id, { titulo, conteudo, lista})
        return res.status(200).json(card);
    }
    catch (err){
        return res.sendStatus(500);
    }
});

const deleteCard = (async (req, res) => {
    try {
        const id = req.params.id;
        const cards = await cardService.deleteCard(id);
        res.json(cards);
    }
    catch (err){
        return res.sendStatus(500);
    }
});

module.exports = {
  getCards,
  postCard,
  putCard,
  deleteCard
}