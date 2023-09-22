class Filme{
  constructor(titulo, ano, genero, duracao){
      this.titulo = titulo;
      this.ano = ano;
      this.genero = genero;
      this.duracao = duracao;
      this.assistido = false;
      this.notas = [];
  }

  calcularMedia(){
      if (this.notas.length === 0){
          return 'O filme nao possui notas registradas.';
      }

      const somaNotas = this.notas.reduce((total, nota) => total + nota, 0);
      const media = somaNotas/this.notas.length;
      return media.toFixed(2);
  }

  exibirDetalhes(){
      console.log(`Titulo: ${this.titulo}`);
      console.log(`Ano: ${this.ano}`);
      console.log(`Genero: ${this.genero}`);
      console.log(`Duração: ${this.duracao}`);
      console.log(`Assistido: ${this.assistido}`);
      console.log(`Nota: ${this.calcularMedia()}`);
  }

  assistirFilme(){
      this.assistido = true;
  }

  avaliarFilme(nota){
      this.notas.push(nota);
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function exibirMenu() {
  console.log('Escolha uma opção:\n');
  console.log('1-Adicionar um novo filme\n');
  console.log('2-Assistir um filme\n');
  console.log('3-Avaliar um filme\n');
  console.log('4-Exibir lista de filmes\n');
  console.log('5-Sair\n');
}

const listaFilmes = [];

function obterEntrada() {
  exibirMenu();
  rl.question('Digite sua opção: ', function(entrada) {
    switch (entrada) {
      case '1': //CRIAR NOVO FILME
        rl.question('Digite o título do filme: ', function(titulo) {
          rl.question('Digite o ano do filme: ', function(ano) {
            rl.question('Digite o gênero do filme: ', function(genero) {
              rl.question('Digite a duração do filme: ', function(duracao) {
                const filme = new Filme(titulo, ano, genero, duracao);
                listaFilmes.push(filme);
                console.log('Filme adicionado:', filme);
                obterEntrada();
              });
            });
          });
        });
        break;
      case '2': //ASSISTIR FILME
        rl.question('Digite o título do filme: ', function(nomeBusca) {
          const filmesEncontrados = listaFilmes.filter(filme => filme.titulo.toLowerCase().includes(nomeBusca.toLowerCase()));
          if (filmesEncontrados.length > 0) {
            filmesEncontrados.forEach(filme => {
              filme.assistirFilme();
              filme.exibirDetalhes();
              obterEntrada();
            });
          } else {
            console.log('Nenhum filme encontrado com esse nome.\n');
            obterEntrada();
          }
        });
        break;
      case '3': //AVALIAR FILMES
      rl.question('Digite o título do filme: ', function(nomeBusca) {
        const filmesEncontrados = listaFilmes.filter(filme => filme.titulo.toLowerCase().includes(nomeBusca.toLowerCase()));
        if (filmesEncontrados.length > 0) {
          filmesEncontrados.forEach(filme => {
            rl.question('Digite a nota do filme: ', function(nota){
              filme.avaliarFilme(nota);
              filme.exibirDetalhes();
              console.log(filme)
              obterEntrada();
            });
          });
        } else {
          console.log('Nenhum filme encontrado com esse nome.\n');
          obterEntrada();
        }
      });
      break;
      case '4': //LISTAR FILMES
        console.log('Lista de filmes:');
        listaFilmes.forEach((filme, index) => {
          console.log(`Filme ${index + 1}:`);
          filme.exibirDetalhes();
          console.log('');
        });
        obterEntrada();
        break;
      case '5': //SAIR
        console.log('SAIR');
        rl.close();
        return;
      default: //ERRO
        console.log('Opção inválida. Por favor, escolha novamente.');
        obterEntrada();
    }
  });
}

obterEntrada();
