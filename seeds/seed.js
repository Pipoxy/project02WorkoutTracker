const sequelize = require("../config/connection");
const { User,Workouts,Exercises } = require("../models");


const userData = require("./userData.json");
const workoutsData = require("./workoutsData.json");
const exercisesData = require("./exercisesData.json");

const seedDatabase = async () => {
  await sequelize.sync({ focus: true });

  const users = await User.bulkCreate(userData,{
    individualHooks: true,
    returning: true,
  });

  for (const workouts of workoutsData) {
    await Workouts.create({
      ...workouts,
      user_id: users[Math.floor(Math.random() * users.length)].id
    });

  }


  const exercises = await Exercises.bulkCreate(exercisesData,{
    returning: true
  });


  process.exit(0);
};
seedDatabase();