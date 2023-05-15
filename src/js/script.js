// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicadas e mudar a imagem pra lua

// passo 1 - pegar no js o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no js o elemento HTML corresponde aoi body
const body =  document.querySelector("body");

const imagembotaotrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    // passo 6 - remover a classe do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if(modoEscuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");

        // passo 8 - trocar aa imagem do botão de alterar tema pro sol
        imagembotaotrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
          // passo 4 - adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro");

    // passo 5 - trocar a imagem do botão de alterar tema pra lua
    imagembotaotrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
  }
});
