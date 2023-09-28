const { v4: uuidv4 } = require('uuid');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cards', [{
      id: uuidv4(),
      titulo: 'Titulo Um',
      conteudo: 'Conteudo Um',
      lista: 'Lista Um',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: uuidv4(),
      titulo: 'Titulo Dois',
      conteudo: 'Conteudo Dois',
      lista: 'Lista Dois',
      createdAt: new Date(),
      updatedAt: new Date()
      }]);

  },
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null, {});
    return queryInterface.bulkDelete('Cards', null, {});
  }
};
