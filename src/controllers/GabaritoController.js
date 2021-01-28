const Gabarito = require('../models/Gabarito');
const Prova = require('../models/Prova');

module.exports = {
    async store(req, res) {
        const { disciplina, data, questoes } = req.body;
        let gabarito = await Gabarito.create({
            disciplina: disciplina,
            data: data,
            questoes: questoes

        })

        //console.log(gabarito);
        return res.json(gabarito);

    },
    
    async index(req, res){
        let gabaritos = await Gabarito.find();
        return res.json(gabaritos);

    }

};
