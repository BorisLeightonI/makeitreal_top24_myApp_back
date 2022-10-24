const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
  title : {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  FavList : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FavList'
  },

}, { timestamps: true });

const Fav = mongoose.model('Fav', favSchema);

module.exports = Fav;
