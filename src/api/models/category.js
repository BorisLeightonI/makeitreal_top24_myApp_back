const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name : {
    type: String,
    min: [3, 'length too short'],
    required: true,
  },

  Products : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  User : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

}, { timestamps: true });

const Cat = mongoose.model('Category', categorySchema);

module.exports = Cat;
