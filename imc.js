const calcular = document.getElementById('calcular')

function imc() {
    const altura = document.getElementById('altura').value
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
   const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classifacao = ''

        if (valorIMC <18.5){
            classificao = 'abaixo do peso'
        }

        else if (valorIMC <24.9){
            classifacao = 'peso normal'
        }

        else if (valorIMC <29.9){
            classifacao ='sobre peso'
        }

        else if (valorIMC <34.9){
            classifacao = 'obesidade grau I'
        }

        else if (valorIMC <39.9){
            classifacao = 'obesidade grau II'
        }

        else {
            classifacao = 'obesidade grau III'
        }


        
    

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está com ${classifacao} `
    }

    else {
        resultado.textContent = 'Preencha todos os campos!'
    }
    
}


calcular.addEventListener('click', imc);

 
