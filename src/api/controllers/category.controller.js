const Category = require('../models/category');
const Product = require('../models/product.model');

const list = (req, res) => {
  Category.find()/* .populate({
    path: 'user',
    select: 'fullName email payment'
  }) */
  .then( category => res.status(200).json({message: 'category ubicados exitosamente', data: category}))
  .catch( err => res.status(400).json({message: 'no se pudo ubicar', data: err}))
}

const show = (req, res) => {
  const { catId } = req.params;
  Category.findById(catId)
  .then( cat => res.status(200).json({message: 'cat ubicada exitosamente', data: cat}))
  .catch( err => res.status(200).json({message: 'no se pudo ubicar', data: err}))

}

const createBlankCategory= (req, res) => {
  Category.create(req.body)
    .then( cat => res.status(200).json({message: 'Unrelated cat created succesfully', data: cat}))
    .catch( err => res.status(400).json({message: 'it could not be created', data: err}))
} 

const create = async (req, res) => {
  try {
  const { favListId } = req.params;
  const data = req.body;
  
  const favList = await Product.findById(favListId);
  if(!favList) throw new Error('No existe Product asociada');

  const newFav = {
    ...data,
    Product: favListId
  }
  const fav = await Category.create(newFav);

  favList.Favs.push(fav);
  await favList.save();

  res.status(200).json({message: 'Fav creada exitosamente', data: fav})
  } catch (err) {
    console.log(err);
    res.status(400).json({message: 'no se pudo crear', data: err})
  }
}

const update = (req, res) => {
  const { catId } = req.params;

  Category.findByIdAndUpdate(catId, req.body, {new: true})
    .then( cat => res.status(200).json({message: 'cat modificada exitosamente', data: cat}))
    .catch( err => res.status(200).json({message: 'no se pudo modificar', data: err}))
}

const destroy = (req, res) => {
  const { catId } = req.params;

  Category.findByIdAndRemove(catId)
    .then( cat => res.status(200).json({message: 'cat eliminada exitosamente', data: cat}))
    .catch( err => res.status(200).json({message: 'no se pudo eliminar', data: err}))
}

module.exports = {
  create, createBlankCategory,
  show, list,
  update,
  destroy
}
