function calcular(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;
    
    let oper = document.querySelector('input[name="opera"]:checked');

    // Verifica se uma operação foi selecionada
    if (!oper) {
        resultado = "Selecione uma operação!";
    } else {
        // Calcula o resultado baseado na operação selecionada
        if (oper.value === 'soma') {
            resultado = num1 + num2;
        } else if (oper.value === 'sub') {
            resultado = num1 - num2;
        } else if (oper.value === 'mult') {
            resultado = num1 * num2;
        } else if (oper.value === 'divi') {
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Erro: Divisão por zero!";
            }
        } else {
            resultado = "Operação inválida!";
        }
    }

    // Seleciona o elemento <span> com o ID 'cor'
    const resultadoElemento = document.getElementById('cor');
    
    // Atualiza o <span> com o resultado
    resultadoElemento.textContent = resultado;

    // Aplica a cor apropriada ao resultado com base no valor
    if (resultado === "Erro: Divisão por zero!" || resultado === "Operação inválida!" || resultado === "Selecione uma operação!") {
        resultadoElemento.style.color = 'darkred'; // Preto para mensagens de erro ou aviso
    } else if (resultado < 0) {
        resultadoElemento.style.color = 'red'; // Vermelho para números negativos
    } else if (resultado > 0) {
        resultadoElemento.style.color = 'blue'; // Azul para números positivos
    } else {
        resultadoElemento.style.color = 'black'; // Preto para zero
    }
}
