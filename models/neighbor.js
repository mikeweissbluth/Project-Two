module.exports = function(sequelize, DataTypes) {
    var Neighbor = sequelize.define("Neighbor", {
      locationId: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      yes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        },
      no: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    });
    return Neighbor;
  };
  