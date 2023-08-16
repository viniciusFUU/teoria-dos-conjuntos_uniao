//Adiciona um evento de clique, que procura o elemento "calculate" que está no button.
document.getElementById("calculate").addEventListener("click", () => {
  //Obtém os valores inseridos e os separa por vírgulas.
  const setA = new Set(document.getElementById("setA").value.split(","));
  const setB = new Set(document.getElementById("setB").value.split(","));

  //Cria uma união entre os valores obtidos no código à cima.
  const union = new Set([...setA, ...setB]);

  //Atualiza o id "result" e o método "join" separa por virgulas os elemento que foram obtidos nos sets.
  document.getElementById("result").textContent = `União: { ${[...union].join(
    ", "
  )} }`;
});
