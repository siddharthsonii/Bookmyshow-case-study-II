module.exports = (sequelize, DataTypes) => {
  const Theater = sequelize.define(
    "theater",
    {
      theater_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      theater_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
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
  // console.log(Theater === sequelize.models.Theater); // true

  return Theater;
};