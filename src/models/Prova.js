const mongoose = require('mongoose');

const ProvaSchema = new mongoose.Schema({
    gabarito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gabarito',
        required: [true, 'Precisa estar preenchido']
    },
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: [true, 'Precisa estar preenchido']
    },

    data: String,
    questoes: [{
        //posição da questão no formulário
        posicao: {
            type: Number,
            requeried: [true, 'Necessário posicionar a questão']
        },
        alternativa: {
            type: String,
            trim: true,
            maxlength: 1,
            uppercase: true,
            requeried: [true, 'Necessário o preenchimento de alterantivas corretas']
        }
    }],
    nota: Number

});

module.exports = mongoose.model('Prova', ProvaSchema);