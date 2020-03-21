const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentModel = new Schema({
  idAula: { type: String, required: true, unique: true, lowercase: true },
  alunosCadastrados: { type: String, required: true, select: false },
  professor: { type: Boolean, required: true },
});

studentModel.pre("save", function(next) {
  return next();
});

studentModel.index({nomeAluno: 'text', 'Registro': 'text', 'cadastradoAula': 'bool'});

module.exports = mongoose.model("Business", studentModel);