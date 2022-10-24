const Fav = require('../models/fav.model');
const FavList = require('../models/favList.model');

const list = (req, res) => {
  Fav.find()/* .populate({
    path: 'user',
    select: 'fullName email payment'
  }) */
  .then( favs => res.status(200).json({message: 'favs ubicados exitosamente', data: favs}))
  .catch( err => res.status(200).json({message: 'no se pudo ubicar', data: err}))
}

const show = (req, res) => {
  const { favId } = req.params;
  Fav.findById(favId)
  .then( fav => res.status(200).json({message: 'fav ubicada exitosamente', data: fav}))
  .catch( err => res.status(200).json({message: 'no se pudo ubicar', data: err}))

}

const createBlankFav = (req, res) => {
  Fav.create(req.body)
    .then( fav => res.status(200).json({message: 'Unrelated Fav created succesfully', data: fav}))
    .catch( err => res.status(400).json({message: 'it could not be created', data: err}))
} 

const create = async (req, res) => {
  try {
  const { favListId } = req.params;
  const data = req.body;
  
  const favList = await FavList.findById(favListId);
  if(!favList) throw new Error('No existe FavList asociada');

  const newFav = {
    ...data,
    FavList: favListId
  }
  const fav = await Fav.create(newFav);

  favList.Favs.push(fav);
  await favList.save();

  res.status(200).json({message: 'Fav creada exitosamente', data: fav})
  } catch (err) {
    console.log(err);
    res.status(400).json({message: 'no se pudo crear', data: err})
  }
}

const update = (req, res) => {
  const { favId } = req.params;

  Fav.findByIdAndUpdate(favId, req.body, {new: true})
    .then( fav => res.status(200).json({message: 'Fav modificada exitosamente', data: fav}))
    .catch( err => res.status(200).json({message: 'no se pudo modificar', data: err}))
}

const destroy = (req, res) => {
  const { favId } = req.params;

  Fav.findByIdAndRemove(favId)
    .then( fav => res.status(200).json({message: 'fav eliminada exitosamente', data: fav}))
    .catch( err => res.status(200).json({message: 'no se pudo eliminar', data: err}))
}

module.exports = {
  create, createBlankFav,
  show, list,
  update,
  destroy
}
