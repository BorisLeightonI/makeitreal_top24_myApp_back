const mongoose = require("mongoose");

const favListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: [3, 'length too short'],
      required: true
    },
    description: {
      type: String,
      min: [3, 'length too short']
    },
    mediaResources: [{
      type: String
    }], 

    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    Purchased: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Purchase'
      }
    ]

  },
  { timestamps: true }
);

const Prod = mongoose.model("Product", favListSchema);

module.exports = Prod;