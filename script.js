// ESSA É UMA FUNÇÃO ANÔNIMA QUE REALIZA UM CÁLCULO CIENTÍFICO
const calculoCientifico = (() => {
  let calculo, num1, num2;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  const limpar = document.getElementById("limpar");
  calculo = parseInt(num1) * 10 ** +num2; // Number(num2)
  if (isNaN(calculo)) {
    return;
  } else {
    document.getElementById("res").value = `${calculo}`;
  }
});
limpar.addEventListener("click", () => {
  num1.value = "";
  num2.value = "";
  res.value = "";
})
document.querySelector("#calcular").addEventListener("click", calculoCientifico);

console.log(5**3)