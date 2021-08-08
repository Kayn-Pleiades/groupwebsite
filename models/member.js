const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String },
  image1: { type: String },
  image2: { type: String },
  color1: { type: String },
  color2: { type: String },
  debut: { type: String },
  birthday: { type: String },
  pronouns: { type: String },
  content: { type: String },
  artist: { type: String },
  rig: { type: String }
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
