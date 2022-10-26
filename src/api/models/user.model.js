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
    validate: [/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'],
    required: [true, 'password is required']
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
