module.exports = function (sequelize, DataTypes) {
    let Humans = sequelize.define('Humans', {
        pet_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        residence: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hypo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        activity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pet_breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        has_kids: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
        {
            timestamps: false
        });
    return Humans;
};