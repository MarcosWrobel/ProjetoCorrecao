const Disciplina = require('../models/Disciplina');




module.exports = {
    async store(req, res) {
        const { nome } = req.body;
        let disciplina = await Disciplina.create({
            nome: nome
        })

        return res.json(disciplina);

    },

    async index(req, res){
        let disciplinas = await Disciplina.find();
        return res.json(disciplinas);
    }

};

    
