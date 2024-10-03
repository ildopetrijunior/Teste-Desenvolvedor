const fibonacci = (verificarNumero) => {
    let numeroA = 0
    let numeroB = 1
    let numeroC = 0
    for (numeroC; numeroC <= verificarNumero;) {
        numeroC = numeroA + numeroB
        numeroA = numeroB
        numeroB = numeroC
        if ( numeroC === verificarNumero) {
            return console.log(`O número ${verificarNumero} faz parte da sequência de Fibonacci`)
        } 
    }
    return console.log(`O número ${verificarNumero} não faz parte da sequência de Fibonacci`)
}

fibonacci(21)
fibonacci(22)