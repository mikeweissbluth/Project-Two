module.exports = function (sequelize, DataTypes) {
    let Facility = sequelize.define("Facility", {
        FACILITY_ID: DataTypes.STRING,
        FACILITY_NAME: DataTypes.STRING,
        LATITUDE: DataTypes.STRING,
        LONGITUDE: DataTypes.STRING
    });

    Facility.associate = function (models) {
        Facility.hasMany(models.Chemical, {
            foreignKey: 'FACILITY_ID'
        });
    };

    return Facility;
};