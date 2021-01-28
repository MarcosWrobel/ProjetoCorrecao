# ProjetoCorrecao
 API REST para cadastro de provas e correção com gabaritos.

## Usuario
A API contém cadastro de alunos, disciplinas, gabaritos e provas.

## Funções da API

### Alunos aprovados em cada prova
Listagem dos alunos aprovados em uma determina prova, onde a entrada será o Id do Gabarito.

### Alunos aprovados em determinada disciplina
Listagem dos alunos aprovados em uma determina disciplina, onde a entrada será o Id da disciplina, ele fará uma média aritmetica somando todas as provas.

### Nota final de determinada prova
Listagem todos os alunos que tiveram seus dados enviados de determinada prova e suas respectivas notas. 
Onde a entrada será o Id do Gabarito.

### Nota Final da disciplina
Listagem dos alunos que tiveram seus dados de uma determinada disciplina e suas respectivas notas. 
Onde a entrada será o Id do Gabarito.

### Listar Provas
Listagem de todas as provas do sistema.

### Listar Disciplinas
Listagem de todas as disciplinas

### Listar Alunos
Listagem de todos os Alunos

Acesso à documentação do projeto feito no Swagger 2.0
https://app.swaggerhub.com/apis/MarcosWrobel/ProjetoCorrecao/1.0.0

## Backend

API REST desenvolvida em Node.js/Express 

Para o uso da API é necessária conexão com o MongoDB

Os dados para conexão devem seguir o padrão de chave=valor do arquivo env.example.
