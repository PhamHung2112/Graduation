"use strict";
const { Model } = require("sequelize");
const slugify = require("slugify");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Type, Comment, ProductSize, InvoiceDetail }) {
      this.belongsTo(Type, { foreignKey: "typeId" });
      this.hasMany(Comment, { foreignKey: "productId" });
      this.hasMany(ProductSize, { foreignKey: "productId" });
      this.hasMany(InvoiceDetail, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      typeId: DataTypes.INTEGER,
      productName: DataTypes.STRING,
      productPrice: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      slug: DataTypes.STRING,
      summary: DataTypes.TEXT,
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
      hooks: {
        beforeSave: (product) => {
          product.slug = `/${slugify(product.productName, { lower: true })}`;
        },
      },
    }
  );
  return Product;
};
