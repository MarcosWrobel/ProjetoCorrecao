const express = require('express');
const AlunoController = require('./controllers/AlunoController');
const GabaritoController = require('./controllers/GabaritoController');
const DisciplinaController = require('./controllers/DisciplinaController');
const ProvaController = require('./controllers/ProvaController');
const ListagemController = require('./controllers/ListagemController');


const routes = express.Router();


routes.post('/aluno', AlunoController.store);
routes.post('/disciplina', DisciplinaController.store);
routes.post('/gabarito', GabaritoController.store);
routes.post('/prova', ProvaController.store);
routes.get('/alunosap', ListagemController.aprovProva);
routes.get('/totalgab', ListagemController.totalProvas);
routes.get('/resultdisc', ListagemController.resultadoDisciplinas);
routes.get('/resultfinal', ListagemController.resultadoFinal);
routes.get('/disciplinas', DisciplinaController.index);
routes.get('/alunos', AlunoController.index);
routes.get('/gabaritos', GabaritoController.index);

module.exports = routes;
