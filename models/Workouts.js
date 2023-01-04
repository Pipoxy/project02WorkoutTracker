const { Model,DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Workouts extends Model { }

Workouts.init({
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      Model: "user",
      key: "id"
    }
  },
<<<<<<< Updated upstream
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
=======
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
>>>>>>> Stashed changes
  }

},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "workouts"
  }
);

module.exports = Workouts;