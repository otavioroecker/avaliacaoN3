function abrirBarraLateral(){
    document.getElementById("barra-lateral").classList.add("ativa");
    document.getElementById("overlay").style.display = "block";
}
function fecharBarraLateral(){
    document.getElementById("barra-lateral").classList.remove("ativa");
    document.getElementById("overlay").style.display = "none"
}