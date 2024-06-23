function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let minimoDe = parseInt(document.getElementById("de").value);
    let maximoAte = parseInt(document.getElementById("ate").value);

    //Abaixo linha de código feita por Aryel Lima Moreira

    if (minimoDe >= maximoAte) {
        alert(`Verifique os números escohidos, pois o ${minimoDe} é maior do que o ${maximoAte}`)
        return
     } else if (quantidade > (maximoAte - minimoDe + 1)) {
        alert(`Verifique os números escolhidos, pois a "Quantidade de números" deve ser menor`)
        return
     } 

     /* Linha de código acima feita por Aryel Lima Moreira;
    A condicional não estava funcionando corretamente, o segundo alert de de Quantidade de Números ser menor estava trazendo erro ao código. 
    Link: https://cursos.alura.com.br/forum/topico-duvida-mao-na-massa-protecao-no-total-de-numeros-sorteados-432206
    */
    

    let sorteados = [];
    let valor;

    for(let i = 0; i < quantidade; i++){
        valor = numeroAleatorio(minimoDe, maximoAte);
        
        while(sorteados.includes(valor)){
            valor = numeroAleatorio(minimoDe, maximoAte);    
        }


        sorteados.push(valor);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById("btn-reiniciar");

    if(botaoReiniciar.classList.contains("container__botao-desabilitado")) {
        botaoReiniciar.classList.remove("container__botao-desabilitado");

        botaoReiniciar.classList.add("container__botao");
    }

    else{
        botaoReiniciar.classList.remove("container__botao");
        
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
}

function numeroAleatorio(min, max) {
    /* return parseInt(Math.random() * (max - min) + min);
    Pode ser utilizado o de cima, que também deixa o valor em inteiro*/
    return Math.floor(Math.random() * (max - min + 1)) + min;
}