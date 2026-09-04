const botao = document.querySelector("button");
botao.addEventListener("click",botaoclicado);

function botaoclicado() {
    console.log("fui clicado");
    let texto = botao.querySelector("span");
    texto.textContent++;
}

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
btnTemaEscuro.addEventListener("click", mudaTema);
function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}