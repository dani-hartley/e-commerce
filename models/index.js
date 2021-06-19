// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Categories have many Products
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tagged_product',
  foreignKey: 'tag_id'
});

// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tagged_product',
  foreignKey: 'product_id'
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
