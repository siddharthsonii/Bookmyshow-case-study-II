module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define(
    "shows",
    {
      show_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      theater_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "theaters",
          key: "theater_id"
        }
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "movies",
          key: "movie_id"
        }
      },
      show_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      show_time: {
        type: DataTypes.TIME,
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

  // Show.belongsTo(Theater, { foreignKey: "show_id" });
  // Show.belongsTo(Movie, { foreignKey: "show_id" });

  // `sequelize.define` also returns the model
  // console.log(Show === sequelize.models.Show); // true

  return Show;
};
