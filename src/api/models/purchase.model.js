const {model, Schema} = require('mongoose');

const purchaseSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  Products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
},{timestamps: true})

module.exports = model('Purchase', purchaseSchema);