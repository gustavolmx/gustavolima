import { listarCursos, inserirCurso } from "./cursoRepository.js";
import { listarAlunos, inserirAlunos } from "./alunoRepository.js";
import { listarSeries, inserirSeries } from "./seriesRepository.js";
import { listarfilmes, inserirfilmes } from "./filmesRepository.js";
import { listarlivros, inserirlivros } from "./livrosRepository.js";
import { listarCarros1, inserirCarros1 } from "./Carros1Repository.js";
import { listartenis, inserirtenis } from "./tenisRepository.js";
import { listartimes_futebol, inserirtimes_futebol } from "./times_futebolRepository.js";
import { listarnovotb_roups, inserirnovotb_roups } from "./tb_roupsRepository.js";
import { listarTb_carro, inserirTb_carro} from "./Tb_carroRepository.js";



import express from 'express'
const api = express();
api.use(express.json());


api.get('/calculadora/somar/:n1/:n2', (req, resp) => {
  let num1 = Number(req.params.n1);
  let num2 = Number(req.params.n2);

  let soma = num1 + num2;

  resp.send({
    resultado: soma
  });
})

api.get('/calculadora/subtrair', (req, resp) => {
  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);

  let sub = n1 - n2;

  resp.send({
    resultado: sub
  })
})

api.post('/calculadora/multiplicar', (req, resp) => {
  let valores = req.body;
  
  let multp = valores.n1 * valores.n2;

  resp.send({
    resultado: multp
  })

})

api.get('/curso', async (req, resp) => {
  let registros = await listarCursos();
  resp.send(registros);
})

api.post('/curso', async (req, resp) => {
  let novoCurso = req.body;
  
  let id = await inserirCurso(novoCurso);

  resp.send({
    novoId: id
  })
})



api.get('/aluno', async (req, resp) => {
    let registros = await listarAlunos();
    resp.send(registros);
  })
  
  api.post('/aluno', async (req, resp) => {
    let novoAluno = req.body;
    
    let id = await inserirAlunos(novoAluno);
  
    resp.send({
      novoId: id
    })
  })


  

api.get('/series', async (req, resp) => {
    let registros = await listarSeries();
    resp.send(registros);
  })
  
  api.post('/series', async (req, resp) => {
    let novoseries = req.body;
    
    let id = await inserirSeries(novoseries);
  
    resp.send({
      novoId: id
    })
  })


 api.get('/filmes', async (req, resp) => {
    let registros = await listarfilmes();
    resp.send(registros);
  })
  
  api.post('/filmes', async (req, resp) => {
    let novofimes = req.body;
    
    let id = await inserirfilmes(novofimes);
  
    resp.send({
      novoId: id
    })
  })

  
  

  api.get('/livros', async (req, resp) => {
    let registros = await listarlivros();
    resp.send(registros);
  })
  
  api.post('/livros', async (req, resp) => {
    let novolivros = req.body;
    
    let id = await inserirlivros(novolivros);
  
    resp.send({
      novoId: id
    })
  })

  api.get('/Carros1', async (req, resp) => {
    let registros = await listarCarros1();
    resp.send(registros);
  })
  
  api.post('/Carros1', async (req, resp) => {
    let novoCarros1 = req.body;
    
    let id = await inserirCarros1(novoCarros1);
  
    resp.send({
      novoId: id
    })
  })


   api.get('/tenis', async (req, resp) => {
    let registros = await listartenis();
    resp.send(registros);
  })
  
  api.post('/tenis', async (req, resp) => {
    let novotenis = req.body;
    
    let id = await inserirtenis(novotenis);
  
    resp.send({
      novoId: id
    })
  })
  

  api.get('/times_futebol', async (req, resp) => {
    let registros = await listartimes_futebol();
    resp.send(registros);
  })
  
  api.post('/times_futebol', async (req, resp) => {
    let novotimes_futebol= req.body;
    
    let id = await inserirtimes_futebol(novotimes_futebol);
  
    resp.send({
      novoId: id
    })
  })


  api.get('/tb_roups', async (req, resp) => {
    let registros = await tb_roups();
    resp.send(registros);
  })
  
  api.post('tb_roups', async (req, resp) => {
    let tb_roups= req.body;
    
    let id = await tb_roups(tb_roups);
  
    resp.send({
      novoId: id
    })
  })

  api.get('/Tb_carro', async (req, resp) => {
    let registros = await tb_roups();
    resp.send(registros);
  })
  
  api.post('Tb_carro', async (req, resp) => {
    let Tb_carro= req.body;
    
    let id = await Tb_carro(Tb_carro);
  
    resp.send({
      novoId: id
    })
  })

  
api.listen(5010, () => console.log('..: API subiu com sucesso!'));
