module.exports = (sequelize, Sequelize) => {
  const newsletter = sequelize.define("newsletter", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
    // unsubscribed: {
    //   type: Sequelize.BOOLEAN
    // }
  });

  return newsletter;
};
