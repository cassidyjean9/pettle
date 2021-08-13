// 1. Cat or dog
// 2.d Where do you live? Apartment, Singlfamily
// 3. What size pet do you want, Any size up to {toy, Small, medium, Large)
// 4. Do you want a hypoallergenic animal? 
// 5. How active do you want your pet to be {Sedentary, likes walks, like runs very active
// 6. How old do you want your pet? {0-1, 2-4, 5-8}



module.exports = function (sequelize, DataTypes) {
  let Pets = sequelize.define('Pets', {
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pet_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pet_breed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pet_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hypo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: true
    },

    kid_friendly: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pet_picture: {
      type: DataTypes.TEXT,
    }
  },
    {
      timestamps: false

    });

  return Pets;
};