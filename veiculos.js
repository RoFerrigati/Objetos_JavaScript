function exibirNaPagina(mensagem) {
    const outputDiv = document.getElementById("output");
    const div = document.createElement("div");
    div.className = "veiculo";
    div.innerHTML = mensagem;
    outputDiv.appendChild(div);
}

class Veiculo {
    constructor(nome, velocidadeMaxima, capacidade) {
        this.nome = nome;
        this.velocidadeMaxima = velocidadeMaxima;
        this.capacidade = capacidade;
    }

    descrever() {
        return `${this.nome} pode alcançar até ${this.velocidadeMaxima} km/h e transportar ${this.capacidade} pessoas.`;
    }
}

class Carro extends Veiculo {
    constructor(nome, velocidadeMaxima, capacidade, tipoCombustivel) {
        super(nome, velocidadeMaxima, capacidade);
        this.tipoCombustivel = tipoCombustivel;
    }

    descrever() {
        return `${this.nome} é um carro que usa ${this.tipoCombustivel}, atinge ${this.velocidadeMaxima} km/h e transporta até ${this.capacidade} pessoas.`;
    }
}

class Bicicleta extends Veiculo {
    constructor(nome, velocidadeMaxima, capacidade, tipo) {
        super(nome, velocidadeMaxima, capacidade);
        this.tipo = tipo;
    }

    descrever() {
        return `${this.nome} é uma bicicleta do tipo ${this.tipo}, com velocidade máxima de ${this.velocidadeMaxima} km/h.`;
    }
}

class Aviao extends Veiculo {
    constructor(nome, velocidadeMaxima, capacidade, alcance) {
        super(nome, velocidadeMaxima, capacidade);
        this.alcance = alcance;
    }

    descrever() {
        return `${this.nome} é um avião com alcance de ${this.alcance} km, velocidade máxima de ${this.velocidadeMaxima} km/h e capacidade para ${this.capacidade} pessoas.`;
    }
}

const fusca = new Carro("Fusca", 120, 4, "Gasolina");
const mountainBike = new Bicicleta("Mountain Bike", 40, 1, "Montanha");
const boeing747 = new Aviao("Boeing 747", 900, 660, 14815);

exibirNaPagina(fusca.descrever());
exibirNaPagina(mountainBike.descrever());
exibirNaPagina(boeing747.descrever());
