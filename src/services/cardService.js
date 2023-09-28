const db = require('../../models');

const getCards = (async () => {
    try {
        return await db.Card.findAll();
    }
    catch (err){
        return err;
    }
});

const getCard = (async (id) => {
    try {
        return await db.Card.findByPk(id);
    }
    catch (err){
        return err;
    }
});

const createCard = (async (card) => {
    try {
        if (card.titulo && card.conteudo && card.lista) {
            const newCard = await db.Card.create(card);
            return newCard;
        }
        else {
            return false;
        }
    }
    catch (err){
        return err;
    }
});

const updateCard = (async (id, card) => {
    try {
        const dbCard = await db.Card.findByPk(id);
        dbCard.dataValues.titulo = card.titulo;
        dbCard.dataValues.conteudo = card.conteudo;
        dbCard.dataValues.lista = card.lista;
        await db.Card.update(dbCard.dataValues, { where: {id: id}});
        return dbCard.dataValues;
    }
    catch (err){
        return err;
    }
});

const deleteCard = (async (id) => {
    try {
        await db.Card.findByPk(id);
        await db.Card.destroy({ where: {id: id}});
        return await getCards();
    }
    catch (err){
        return err;
    }
});

module.exports = {
  getCard,
  getCards,
  createCard,
  updateCard,
  deleteCard
}