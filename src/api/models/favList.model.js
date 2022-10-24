const mongoose = require("mongoose");

const favListSchema = new mongoose.Schema(
  {
    name: String,

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Favs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fav",
      },
    ],

  },
  { timestamps: true }
);

const FavList = mongoose.model("FavList", favListSchema);

module.exports = FavList;
// module.exports = favListSchema;