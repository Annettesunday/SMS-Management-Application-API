'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Name cannot be empty'
          },
          len: {
            args: [2,10],
              msg: 'Length of name must to be between 2 and 10'
          },
        },
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'This contact already exists'
        },
        validate: {
          notEmpty: {
            args: true,
            msg: 'Phone number cannot be empty'
          }
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contacts');
  }
};
