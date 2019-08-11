// Schema to represent a File
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FileSchema = new Schema({
  patient: String,
  title: String,
  description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = File = mongoose.model("file", FileSchema);
