const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Precisa estar preenchido']
    },
});

module.exports = mongoose.model('Aluno', AlunoSchema);
