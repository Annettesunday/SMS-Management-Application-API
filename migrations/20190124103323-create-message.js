'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'sender cannot be empty'
          },
        },
      },
      receiver: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Receiver cannot be empty'
          },
        },
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Message cannot be empty'
          },
        },
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
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
    return queryInterface.dropTable('Messages');
  }
};
