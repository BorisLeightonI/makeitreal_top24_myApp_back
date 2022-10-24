const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: [true, 'email must be unique']
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: [3, 'password must be greather than 3 chars'],
  },
  
  favLists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FavList'
    }
  ]



}, { timestamps: true });

const User = mongoose.model('user', UserSchema);

module.exports = User;
