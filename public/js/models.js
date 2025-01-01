// tables.
const user = {
  email: String,
  nome: String,
  senha: String,
  fotoPerfil: String || null,
  cargo: String ?? "USER",
  dataNascimento: Date
}

const categoria = {
  nome: String,
  descricao: String || null,
  iconCapa: String || null,
  dataCriacao: Date,
  notaGeral: Number || null,
  acessoLivre: Boolean ?? true,
  criadorCategoria: user.nome
}

const comentario = {
  img: String || null,
  conteudo: String,
  dataPublicacao: Date,
  user: user.nome ?? "Lucas Marcão",
  diretorio: String
}

const hq = {
  nome: String,
  autor: String ?? "desconhecido",
  paisOrigem: String ?? "Japão",
  dataCriacao: Date,
  imgHQ: String ?? "/img/capaHQdefalt.png",
  descricao: String || null,
  nota: Number || null,
  categoria: categoria.nome,
  colorido: Boolean ?? false
}

const capitulo = {
  id: Number,
  numero: Number,
  hq: hq.nome,
  dataPublicacao: Date,
  titulo: String || null,
  paginas: Array,
  ultimoQueMexeu: user.nome ?? "Lucas Marcão"
}

