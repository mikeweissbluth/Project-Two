module.exports = function (sequelize, DataTypes) {
    let Chemical = sequelize.define("Chemical", {
        FACILITY_ID: DataTypes.STRING,
        FACILITY_NAME: DataTypes.STRING,
        CHEM_NAME: DataTypes.STRING,
        CAS_NUM: DataTypes.STRING
    });

    Chemical.associate = function (models) {
        Chemical.belongsTo(models.Facility, {
            foreignKey: 'FACILITY_ID'
        });
    };
    return Chemical;
};