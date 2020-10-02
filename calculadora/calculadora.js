//adicionar os números quando precionados
function calcNum(num){
    if (typeof gtela == 'undefined'){
        document.calcF.tela.value ='';
    }
    document.calcF.tela.value = document.calcF.tela.value + num;
    gtela = 1;
}

//limpar
function calcLimpar(){
    document.calcF.tela.value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
}

//operações
function calcOper(oper, valor1, valor2, valor){
    switch (oper){
        case "somar":
            valor = parseInt(valor1) + parseInt(valor2)
            break;
            
        case "subtrair":
            valor = parseInt(valor1) - parseInt(valor2)
            break;
        
         case "multiplicar":
            valor = parseInt(valor1) * parseInt(valor2)
            break;
        
         case "dividir":
            valor = parseInt(valor1) / parseInt(valor2)
            break;
    }
    return(valor)
}

//ações do usuário
function calcParse(oper){
    var valor = document.calcF.tela.value;
    delete gtela;

    if(typeof goper != 'undefined' && oper =='resultado'){
        gvalor = calcOper(goper, gvalor, valor);
        document.calcF.tela.value = gvalor;
        delete oper;
        delete gvalor;
        return(0);
    }

    if (typeof gvalor != 'undefined'){
        gvalor = calcOper(goper, gvalor, valor);
        goper = oper;
        document.calcF.tela.value = gvalor;
    }
    else{
        gvalor = valor;
        goper = oper;
    }
}

/*
var porcentagem = parseFloat('1.3') ;
var total = preco * (porcentagem/100);

var porcentagem = parseFloat('1,3') ;
var total = preco * (porcentagem/100);
*/