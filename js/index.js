function calcular(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");

    if (peso === "" || altura === ""){
    return;
}
    const imc = calculaImc(peso, altura).toFixed(1);
    const classificacao = classificacaoImc(imc);


    resultado.innerHTML = `<span style="color: ${(imc >=0 && imc <=18.4 ? "cyan": (imc >= 18.5 && imc <= 24.9 ? "green" : (imc > 25 && imc <= 29.9 ? "orange" : "red")))} "> ${imc}  ${classificacao}</span>`
}

function calculaImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificacaoImc(imc){
    if(imc < 16){
        return "Desnutrido nível 3, coma!!!";
    }

    if(imc == 16 && imc <= 16.9){
        return "Desnutrido nível 2, coma!!!";
    }

    if(imc >= 17 && imc <= 18.4){
        return "Desnutrido nível 1, coma!!!";
    }
 
    if(imc >= 18.5 && imc <= 24.9){
        return "Você ta Top!!!";
    }

    if(imc >=25 && imc <= 29.9){
        return "Sobrepeso, não coma!!!";
    }

    if(imc >= 30 && imc <= 34.9){
        return "Obesidade grau 1 !!!";
    }

    if(imc >= 35 && imc <= 40){
        return "Obesidade grau 2 !!!";
    }

    return "Obesidade grau 3"
;

}