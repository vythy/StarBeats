const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  googleid: String,
  totalscore: Number
});

// compile model from schema
module.exports = mongoose.model("score", ScoreSchema);
