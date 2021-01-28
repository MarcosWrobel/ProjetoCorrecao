const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Precisa estar preenchido']
    },
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);