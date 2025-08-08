import { connection } from "./connection.js";


export async function listarCarros1() {
  const comando = `
    select *
      from curso
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserirCarros1(novoCarros1) {
  const comando = `
    INSERT INTO curso (id, Valor, Placa, modelo, ano_fabricacao, cor, ar_condicionado)
               values (?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novoCarros1.id, novoCarros1.Valor, novoCarros1.Placa, novoCarros1.modelo, novoCarros1.ano_fabricacao, novoCarros1.cor, novoCarros1.ar_condicionado])
  return info.insertId;
}

connection

import mysql from 'mysql2/promise'


const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'curso'
})

export { connection }

curso




export async function listarCursos() {
  const comando = `
    select *
      from curso
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserirCurso(novoCurso) {
  const comando = `
    INSERT INTO curso (nome, carga_horaria, area)
               values (?, ?, ?)
  `

  let [info] = await connection.query(comando, [novoCurso.nome, novoCurso.carga_horaria, novoCurso.area])
  return info.insertId;
}

filme



export async function listarfilmes() {
  const comando = `
    select *
      from filmes
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserirfilmes(novofilmes) {
  const comando = `
    INSERT INTO filmes (titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao)
               values (?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novofilmes.titulo, novofilmes.ano_lancamento, novofilmes.genero, novofilmes.duracao_minutos, novofilmes.diretor, novofilmes.avaliacao])
  return info.insertId;
}

livro




export async function listarlivros() {
  const comando = `
    select *
      from livros
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserirlivros(novolivros) {
  const comando = `
    INSERT INTO livros (titulo, autor, ano_publicacao, genero, editora, preco)
               values (?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novolivro.titulo, titulo, novolivro.autor, novolivro.ano_publicacao, novolivro.genero, novolivro.editora, novolivro.preco])
  return info.insertId;
}

serie 




export async function listarSeries() {
    const comando = `
      select *
        from series
    `;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserirSeries(novoseries) {
    const comando = `
      INSERT INTO aluno (titulo, ano_lancamento, genero, temporadas, criador, avaliacao)
                 values (?, ?, ?, ?, ?, ?)
    `
  
    let [info] = await connection.query(comando, [novoseries.titulo, novoseries.ano_lancamento, novoseries.genero, novoseries.temporadas, novoseries.criador, novoseries.avaliacao])
    return info.insertId;
  }

Tb_carros




export async function listarTb_carro() {
    const comando = `
      select *
        from Tb_carro
    `;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserirTb_carro(novoTb_carro) {
    const comando = `
      INSERT INTO Tb_carro (id_carro, ds_marca, ds_modelo, nr_ano, vl_preco , dt_inclusao, img_carro)
                 values (?, ?, ?, ?, ?, ?)
    `
  
    let [info] = await connection.query(comando, [novoTb_carro.id_carro, novoTb_carro.ds_modelo, novoTb_carronr_ano, novoTb_carro.vl_preco, novoTb_carro.dt_inclusao, novoTb_carro.img_carro ])
    return info.insertId;
  }

tb_roups 


export async function listarnovotb_roups() {
    const comando = `
      select * novotb_roups
        from 
    `;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserirnovotb_roups(novotb_roups) {
    const comando = `
      INSERT INTO novotb_roups (nm_ropa, vl_valor, lg_lugar, pr_promocao, nm_shop)
                 values (?, ?, ?, ?, ?)
    `
  
    let [info] = await connection.query(comando, [novotb_roups.nm_ropa, tb_roups.vl_valor, novotb_roups.lg_lugar, novotb_roups.pr_promocao, novotb_roups.nm_shop ])
    return info.insertId;
  }

tenis 




export async function listartenis() {
    const comando = `
      select *
        from tenis
    `;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserirtenis(novotenis) {
    const comando = `
      INSERT INTO aluno (nome, marca, cor, tamanho, preco, categoria, estoque)
                 values (?, ?, ?, ?, ?, ?, ?)
    `
  
    let [info] = await connection.query(comando, [novotenis.nome, novotenis.marca, novotenis.cor, novotenis.tamanho, novotenis.preco, novotenis.categoria, novotenis.nome, novotenis.estoque ])
    return info.insertId;
  }

times_futebol




export async function listartimes_futebol() {
    const comando = `
      select * times_futebol
        from 
    `;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserirtimes_futebol(novotimes_futebol) {
    const comando = `
      INSERT INTO times_futebol (nome, cidade, estado, pais, ano_fundacao, estadio, capacidade_estadio, tecnico, liga)
                 values (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
  
    let [info] = await connection.query(comando, [novotimes_futebol.nome, novotimes_futebol.cidade, novotimes_futebol.estado,novotimes_futebol.pais, novotimes_futebol.ano_fundacao, novotimes_futebol.tecnico, novotimes_futebol.liga ])
    return info.insertId;
  }