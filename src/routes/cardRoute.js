
const express = require('express')
const cardRouter = express.Router()
const cardController = require('../controllers/cardController')
const {validateTokenMiddleware} = require('../middleware/jwtMiddleware');
const logPutDeleteMiddleware = require('../middleware/logPutDeleteMiddleware');

cardRouter.get('/', validateTokenMiddleware, cardController.getCards)
cardRouter.post('/', validateTokenMiddleware, cardController.postCard)
cardRouter.put('/:id', [validateTokenMiddleware, logPutDeleteMiddleware], cardController.putCard)
cardRouter.delete('/:id', [validateTokenMiddleware, logPutDeleteMiddleware], cardController.deleteCard)

module.exports = cardRouter