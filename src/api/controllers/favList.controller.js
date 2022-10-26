const FavList = require('../models/favList.model');
const User = require('../models/user.model');
const Favs = require('../models/fav.model');

const list = (req, res) => {

  FavList.find({user: req.userId})
  .then( favLists => res.status(200).json({message: 'Listas de usuario ubicadas exitosamente', data: favLists}))
  .catch( err => res.status(400).json({message: 'no se pudo ubicar', data: err}))
}

const show = async (req, res) => {
try {
  const { favListId } = req.params;
  const favList = await FavList.findById(favListId)
  res.status(200).json({message: 'lista ubicado exitosamente', data: favList})
} catch (error) {
  res.status(400).json({message: 'no se pudo ubicar la lista', data: error})
}

}

const createBlankFavList = (req, res) => {
  FavList.create(req.body)
    .then( favList => res.status(200).json({message: 'Unrelated FavList created succesfully', data: favList}))
    .catch( err => res.status(400).json({message: 'it could not be created', data: err}))
}

const create = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = req.body;

  const user = await User.findById(userId);
  if(!user) throw new Error('No existe Usuario');
  console.log('user', user)
  const newFavList = {
    ...data,
    user: userId
  }

  const favList = await FavList.create(newFavList);
  user.favLists.push(favList);
  let respUser = await user.save();

  res.status(200).json({message: 'favList creado exitosamente', data: favList})
  } catch (err) {
    res.status(400).json({message: 'no se pudo crear', data: err})
  }
}

const update = (req, res) => {
  const { favListId } = req.params;

  FavList.findByIdAndUpdate(favListId, req.body, {new: true})
    .then( favList => res.status(200).json({message: 'curso modificado exitosamente', data: favList}))
    .catch( err => res.status(400).json({message: 'no se pudo modificar', data: err}))
}

const destroy = (req, res) => {
  const { favListId } = req.params;
  Favs.deleteMany({FavList: favListId})
    .then(count => console.log(`Deleted ${count} Favs`))
  FavList.findByIdAndRemove(favListId)
    .then( favList => res.status(200).json({message: 'curso eliminado exitosamente', data: favList}))
    .catch( err => res.status(400).json({message: 'no se pudo eliminar', data: err}))
}

module.exports = {
  create, createBlankFavList,
  show, list,
  update,
  destroy
}
