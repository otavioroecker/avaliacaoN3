function abrirBarraLateral(){
    document.getElementById("barra-lateral").classList.add("ativa");
    document.getElementById("overlay").style.display = "block";
}

function abrirBarraBusca(){
    document.getElementById("barra-busca").classList.add("ativa");
    document.getElementById("overlay").style.display = "block";
}

function fecharTudo(){
    document.getElementById("barra-lateral").classList.remove("ativa");
    document.getElementById("barra-busca").classList.remove("ativa");
    document.getElementById("overlay").style.display = "none";
}