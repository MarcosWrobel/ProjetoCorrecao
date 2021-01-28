const mongoose = require('mongoose');

const GabaritoSchema = new mongoose.Schema({
    disciplina: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disciplina',
        required: [true, 'Precisa estar preenchido']
    },
    data: String,
    questoes: [{
        //posição da questão no formulário
        posicao: {
            type: Number,
            requeried: [true, 'Necessário posicionar a questão']
        },
        alternativaCorreta: {
            type: String,
            trim: true,
            maxlength: 1,
            uppercase: true,
            requeried: [true, 'Necessário o preenchimento de alterantivas corretas']
        },
        peso: {
            type: Number,
            min: [0, 'O valor não pode ser menor que 0'],
            required: [true, 'Necessário definir um valor']
        },
    }]
});

module.exports = mongoose.model('Gabarito', GabaritoSchema);