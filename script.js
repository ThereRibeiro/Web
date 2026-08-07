const botao = document.querySelector("button");
botao.addEventListener("click",botaoclicado);

function botaoclicado() {
console.log("fui clicado");
let texto = botao.querySelector("span");
texto.textContent++;
}