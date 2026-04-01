let parcial = "";
let opRealizada = document.getElementById("operacaoRealizada");
let txtResul = document.getElementById("txtResultado");
let operadorSelecionado = "";
let numero = "";
let ultimoDigitoPressionado = "";

function operador(num){
    numero += num;
    parcial += num;
    opRealizada.innerHTMl = parcial;

    if(numero == '0' && operadorSelecionado == '/'){
        clear();
        txtResul.innerHTML = "Erro";
        return;
    }
    if(ultimoDigitoPressionado == 'operacao'){
        ultimoDigitoPressionado = 'numero'
    }
}

function operacao(oper){
    operadorSelecionado = oper;
    ultimoDigitoPressionado = "operacao";
    parcial += oper;
    numero = "";
    opRealizada.innerHTML = parcial;
}

function calcular(){
    parcial = eval(parcial);
    txtResul.innerHTM = parcial;
    parcial = parcial.toString();
    numero = "";

    opRealizada.innerHTML = parcial;
}

function clear(){
    operadorSelecionado = "";
    parcial = "";
    txtResul.innerHTML = "";
    numero = "";
    opRealizada.innerHTML = "0";
}