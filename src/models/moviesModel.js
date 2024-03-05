module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "movies",
    {
      movie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      movie_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Language: {
        type: DataTypes.STRING,
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

  // `sequelize.define` also returns the model
  // console.log(Movie === sequelize.models.Movie); // true

  return Movie;
};