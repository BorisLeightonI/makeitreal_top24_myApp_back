const Product = require('../models/product.model');
const User = require('../models/user.model');
const Category = require('../models/category');

const listAll = (req, res) => {
  console.log('query:',req.query)
  console.log('params:',req.params)
  const {category} = req.query
  if(category!='undefined'){
    console.log('category')
    Product.find({Categories: req.query.category}).limit(10)
    .then( product => res.status(201).json({message: 'Productos por categoría ubicados exitosamente', data: product}))
    .catch( err => res.status(400).json({message: 'no se pudo ubicar', data: err}))
  }else {
    console.log('else')
  Product.find().limit(10)
  .then( product => res.status(201).json({message: 'Productos ubicados exitosamente', data: product}))
  .catch( err => res.status(400).json({message: 'no se pudo ubicar', data: err}))
  }
}
const cartList = (req, res) => {
  const cart = req.body.cart
  const jCart = JSON.parse(cart)
  Product.find({_id: {$in: jCart}})
  .then( product => res.status(201).json({message: 'Productos ubicados exitosamente', data: product}))
  .catch( err => res.status(400).json({message: 'no se pudo ubicar', data: err}))  
  // res.status(200).json({message: 'testing connection'})
  
}
const list = (req, res) => {

  Product.find({user: req.userId})
  .then( product => res.status(201).json({message: 'Productos de usuario ubicados exitosamente', data: product}))
  .catch( err => res.status(400).json({message: 'no se pudo ubicar', data: err}))
}

const show = async (req, res) => {
try {
  const { productId } = req.params;
  const product = await Product.findById(productId)
  res.status(200).json({message: 'producto ubicado exitosamente', data: product})
} catch (error) {
  res.status(400).json({message: 'no se pudo ubicar la lista', data: error})
}

}

const createBlankProduct = (req, res) => {
  Product.create(req.body)
    .then( product => res.status(200).json({message: 'Unrelated Product created succesfully', data: product}))
    .catch( err => res.status(400).json({message: 'it could not be created', data: err}))
}

const create = async (req, res) => {
  try {
    // const { userId } = req.userId;
    const data = req.body;

  // const user = await User.findById(userId);
  // if(!user) throw new Error('No existe Usuario');
  // console.log('user', user)
  const newProduct = {
    ...data,
    
  }

  const newProd = await Product.create(data);
  // user.Products.push(newProd);
  // let respUser = await user.save();
  console.log(data);

  res.status(201).json({message: 'Producto creado exitosamente', data: newProd})
  } catch (err) {
    res.status(400).json({message: 'no se pudo crear', data: err})
  }
}

const update = (req, res) => {
  const { productId } = req.params;

  Product.findByIdAndUpdate(productId, req.body, {new: true})
    .then( product => res.status(200).json({message: 'curso modificado exitosamente', data: product}))
    .catch( err => res.status(400).json({message: 'no se pudo modificar', data: err}))
}

const destroy = (req, res) => {
  const { productId } = req.params;
  Category.deleteMany({Product: productId})
    .then(count => console.log(`Deleted ${count} Category`))
  Product.findByIdAndRemove(productId)
    .then( product => res.status(200).json({message: 'Producto eliminado exitosamente', data: product}))
    .catch( err => res.status(400).json({message: 'no se pudo eliminar', data: err}))
}

module.exports = {
  create, createBlankProduct,
  show, list, listAll, cartList,
  update,
  destroy
}
