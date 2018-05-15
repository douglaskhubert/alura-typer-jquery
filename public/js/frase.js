$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle();
    $(".frase").toggle();

    $.get("http://localhost:3000/frases", trocarFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000)
    })
    .always(function(){
        $("#spinner").toggle();
    });
    
}

function trocarFraseAleatoria(data) {
    $(".frase").toggle();
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase() {
    $(".frase").toggle();
    $("#spinner").toggle();

    var idFrase = $("#frase-id").val();
    var dados = {id: idFrase};

    $.get("http://localhost:3000/frases", dados, trocarFrase)
    .fail(function(){
        $("#erro").toggle();
    },2000)
    .always(function(){
        $("#spinner").toggle();
    })
}

function trocarFrase(data) {
    $(".frase").toggle();

    var frase = $(".frase");

    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}