// const {Show} = require('./showsModel');
module.exports = (sequelize, DataTypes) => {
  
  const Ticket = sequelize.define(
    "tickets",
    {
      ticket_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      show_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'shows',
          key: "show_id"
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ticket_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      total_seats: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      }
    },
    {
      // timestamps: true,
      // createdAt: 'updateTimestamp',
      // updatedAt: 'updateTimestamp'
    }
  );

  // const Show = require("./showsModel");
  // Ticket.belongsTo(Show, { foreignKey: "show_id" });

  // `sequelize.define` also returns the model
  // console.log(Ticket === sequelize.models.Ticket); // true

  return Ticket;
};
