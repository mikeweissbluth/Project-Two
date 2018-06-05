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
      },

      // Timestamps
      // Date only saves as: YYYY-MM-DD
      createdAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        field: 'updated_at',
      },
    });
    return Neighbor;
  };
  