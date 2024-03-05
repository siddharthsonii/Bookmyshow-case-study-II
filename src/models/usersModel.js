module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email:{
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true,
        },
        unique: true
      },
      phone_number: {
        type: DataTypes.STRING
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
  // console.log(User === sequelize.models.User); // true

  return User;
};