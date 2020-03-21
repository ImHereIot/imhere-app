const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentModel = new Schema({
  nomeAluno: { type: String, required: true, unique: true, lowercase: true },
  Registro: { type: Number, required: true, select: false },
  cadastradoAula: { type: Boolean, required: true },
});

studentModel.pre("save", function(next) {
  return next();
});

studentModel.index({nomeAluno: 'text', 'Registro': 'text', 'cadastradoAula': 'bool'});

module.exports = mongoose.model("Business", studentModel);