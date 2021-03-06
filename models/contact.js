"use strict";
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name cannot be empty"
          },
          len: {
            args: [2, 10],
            msg: "Length of name must to be between 2 and 10"
          }
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "This contact already exists"
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Phone number cannot be empty"
          }
        }
      }
    },
    {}
  );
  Contact.associate = function(models) {
    Contact.hasMany(models.Message, {
      foreignKey: "senderId",
      as: "sentMessages"
    });
    Contact.hasMany(models.Message, {
      foreignKey: "receiverId",
      as: "receivedMessages"
    });
  };
  return Contact;
};
