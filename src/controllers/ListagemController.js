const Gabarito = require('../models/Gabarito');
const Prova = require('../models/Prova');
const media = 7;


module.exports = {
    //mostra todos os alunos com média igual ou superior ao definido na variável media
    async aprovProva(req, res) {
        const { gabarito } = req.body;
        let provas = await Prova.find({ gabarito: gabarito }).populate('aluno');
        let alunos = [];

        provas.forEach(prova => {
            console.log(prova);
            if (prova.nota >= media) {
                alunos.push({
                    nome: prova.aluno.nome,
                    nota: prova.nota

                })
            }

        })

        return res.json(alunos);
    },

    async totalProvas(req, res) {
        // Mostra a nota final de todos os alunos de determinado gabarito
        const { gabarito } = req.body;
        let provas = await Prova.find({ gabarito: gabarito }).populate('aluno');
        let alunos = [];


        provas.forEach(prova => {
            alunos.push({
                nome: prova.aluno.nome,
                nota: prova.nota
            })
        })
        return res.json(alunos);
    },

    async resultadoDisciplinas(req, res) {
        const { disciplina } = req.body;
        let gabaritos = await Gabarito.find({ disciplina: disciplina }).populate('disciplina');
        let provas = [];


        for (let i = 0; i < gabaritos.length; i++) {
            pega = await Prova.find({ gabarito: gabaritos[i]._id }).populate('aluno');
            provas = provas.concat(pega);
        }

        let alunos = {};

        provas.forEach(prova => {
            if (alunos[prova.aluno._id] == undefined) {
                alunos[prova.aluno._id] = {
                    nota: null,
                    concluidas: [],
                    nome: prova.aluno.nome
                }
            }
            alunos[prova.aluno._id].concluidas.push(prova);

        })
        let aprovados = [];
        for (let aluno in alunos) {
            let nota = 0;
            alunos[aluno].concluidas.forEach(concluido => {

                nota = nota + concluido.nota;
            })
            alunos[aluno].nota = parseFloat((nota / gabaritos.length).toFixed(2));
            if (alunos[aluno].nota > media) {
                aprovados.push({
                    disciplina: gabaritos[0].disciplina.nome,
                    nome: alunos[aluno].nome,
                    nota: alunos[aluno].nota
                })

            }

        }
        return res.json(aprovados)

    },

    async resultadoFinal(req, res) {
        const { disciplina } = req.body;
        let gabaritos = await Gabarito.find({ disciplina: disciplina }).populate('disciplina');
        let provas = [];


        for (let i = 0; i < gabaritos.length; i++) {
            pega = await Prova.find({ gabarito: gabaritos[i]._id }).populate('aluno');
            provas = provas.concat(pega);
        }

        let alunos = {};

        provas.forEach(prova => {
            if (alunos[prova.aluno._id] == undefined) {
                alunos[prova.aluno._id] = {
                    nota: null,
                    concluidas: [],
                    nome: prova.aluno.nome
                }
            }
            alunos[prova.aluno._id].concluidas.push(prova);

        })
        let resultadoFinal = [];
        for (let aluno in alunos) {
            let nota = 0;
            alunos[aluno].concluidas.forEach(concluido => {

                nota = nota + concluido.nota;
            })
            alunos[aluno].nota = parseFloat((nota / gabaritos.length).toFixed(2));

            for (let aluno in alunos) {
                let nota = 0;
                alunos[aluno].concluidas.forEach(concluido => {

                    nota = nota + concluido.nota;
                })
                alunos[aluno].nota = parseFloat((nota / gabaritos.length).toFixed(2));
                resultadoFinal.push({
                    disciplina: gabaritos[0].disciplina.nome,
                    nome: alunos[aluno].nome,
                    nota: alunos[aluno].nota
                })


            }
            return res.json(resultadoFinal);



        }

    }

};
