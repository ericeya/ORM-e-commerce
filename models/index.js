// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
})

// Many to many needs a third table "ProductTag". However, when seed files are planted, the table name is called product_tag.
// Hence the through: property is given "product_tag" to properly fetch the product / tag relational data.
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id'
})

// Same concept as above
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
