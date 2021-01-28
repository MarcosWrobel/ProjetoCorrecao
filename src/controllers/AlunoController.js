const Aluno = require('../models/Aluno');

module.exports = {
    async store(req, res) {
        const { nome } = req.body;
        let aluno;
        let alunos = await Aluno.find();
        if (alunos.length < 100) {
            aluno = await Aluno.create({
                nome: nome
            })
            return res.json(aluno);
        }
        else return res.json ('Máximo de alunos cadastrados');
        

    },

    async index(req, res) {
        let alunos = await Aluno.find();
        return res.json(alunos);
    }

};
