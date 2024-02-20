var textoDaBusca = document.getElementById("texto-busca");
var botaoBusca = document.getElementById("botao-busca-texto");
var corpo = document.getElementById("corpo");
botaoBusca.addEventListener("click", buscarTexto);
textoDaBusca.addEventListener('keydown', function(e) {
    if(e.keyCode === 13) {
        buscarTexto();
        e.preventDefault();
    }
});

function buscarTexto() {
    // alert(textoDaBusca.value);
    if (textoDaBusca.value.length > 0) {
        var existeTexto = corpo.innerHTML.search(textoDaBusca.value) >= 0;
        if (existeTexto)
            window.scrollBy(0, window.innerHeight);
        else
            alert("texto não encontrado!")
    } else {
        alert('texto não digitado')
    }
}