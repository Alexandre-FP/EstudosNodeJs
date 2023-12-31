module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("customers", "status", {
      type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      allowNull: false,
      defaultValue: "ACTIVE",
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("customers", "status");
  },
};
