const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("bookmyshow", "root", "root", {
  host: "localhost",
  logging: false,
  dialect: "mysql"
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/usersModel")(sequelize, DataTypes);
db.ticket = require("../models/ticketsModel")(sequelize, DataTypes);
db.theater = require("../models/theatersModel")(sequelize, DataTypes);
db.show = require("../models/showsModel")(sequelize, DataTypes);
db.movie = require("../models/moviesModel")(sequelize, DataTypes);

// db.ticket.hasOne(db.show);
// db.show.belongsTo(db.ticket);
// // -----------------------------
// db.theater.hasOne(db.show);
// db.show.belongsTo(db.theater);
// // -----------------------------
// db.movie.hasOne(db.show);
// db.show.belongsTo(db.movie);

db.ticket.belongsTo(db.show, { foreignKey: "show_id" });

db.show.belongsTo(db.theater, { foreignKey: "theater_id" });
db.show.belongsTo(db.movie, { foreignKey: "movie_id" });

db.sequelize.sync({ force: false });
module.exports = db;
