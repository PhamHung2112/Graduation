"use strict";
const { Model } = require("sequelize");
const slugify = require("slugify");
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Type }) {
      this.hasMany(Type, { foreignKey: "brandId" });
    }
  }
  Brand.init(
    {
      brandName: DataTypes.STRING,
      slug: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Brand",
      hooks: {
        beforeSave: (brand) => {
          brand.slug = `/${slugify(brand.brandName, { lower: true })}`;
        },
      },
    }
  );
  return Brand;
};
