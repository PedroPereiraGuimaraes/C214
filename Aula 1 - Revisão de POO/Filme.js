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
            console.log ('O filme nao possui notas registradas. ')
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

const filme1 = new Filme('SpideMan', 2023, 'Ficção', '2:45:00');
const filme2 = new Filme('Aventuras Temporais', 2023, 'Ficção Científica', '2:10:00');
const filme3 = new Filme('Mistérios Mágicos', 2023, 'Fantasia', '2:30:00');

filme1.assistirFilme();
filme1.avaliarFilme(10);
filme1.avaliarFilme(8);

filme2.assistirFilme();
filme2.avaliarFilme(5);
filme2.avaliarFilme(9);

filme3.assistirFilme();
filme3.avaliarFilme(2);
filme3.avaliarFilme(10);

console.log(filme1.exibirDetalhes());
console.log(filme2.exibirDetalhes());
console.log(filme3.exibirDetalhes());