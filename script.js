class Cliente {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  seApresentar() {
    const frase = `Oi meu nomé é ${this.nome} ${this.sobrenome}`;
    return frase;
  }
}

const apresentacao = (nome, sobrenome) => {
  const cliente = new Cliente(nome, sobrenome);
  return cliente.seApresentar();
};

const mostrarCliente = () => {
  const nome = document.getElementById("nomeCliente").value;
  const sobrenome = document.getElementById("sobrenomeCliente").value;
  const paragrafo = document.createElement("p");
  const divResultado = document.getElementById("resultContainer");

  const fraseApresentacao = apresentacao(nome, sobrenome);

  paragrafo.innerText = fraseApresentacao;

  divResultado.appendChild(paragrafo);
};
