const Prova = require('../models/Prova');
const Gabarito = require('../models/Gabarito');
const Disciplina = require('../models/Disciplina');


module.exports = {
    async store(req, res) {
        const { aluno, data, questoes, gabarito } = req.body;
        let buscagabarito = await Gabarito.findOne({ _id: gabarito });


        let somaPeso = 0;
        let nota = 0;

        for (let i = 0; i < buscagabarito.questoes.length; i++) {
            somaPeso = somaPeso + buscagabarito.questoes[i].peso;
            for (let p = 0; p < buscagabarito.questoes.length; p++) {
                if (buscagabarito.questoes[i].posicao == questoes[p].posicao) {
                    if (buscagabarito.questoes[i].alternativaCorreta == questoes[p].alternativa) {
                        nota = nota + (1 * buscagabarito.questoes[i].peso);
                        
                    }
                }
            }
        }
        nota = nota/somaPeso*10;
        
        if (nota < 0){
            nota = 0;
        }
        if (nota > 10){
            nota = 10;
        }

        let prova = await Prova.create({
            aluno: aluno,
            data: data,
            questoes: questoes,
            nota: nota,
            gabarito: gabarito

        })

        //console.log(gabarito);
        return res.json(prova);

    }
};