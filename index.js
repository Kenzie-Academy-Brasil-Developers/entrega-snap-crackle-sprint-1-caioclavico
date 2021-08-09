function snapCrackle(maxValue) {
    let retorno = "";
    for (let max = 1; max <= maxValue; max++) {
        if (max % 2 !== 0 && max % 5 === 0) {
            retorno += "SnapCrackle, ";
            continue;
        } 
        if (max % 2 !== 0) {
            retorno += "Snap, ";
            continue;
        }
        if (max % 5 === 0) {
            retorno += "Crackle, ";
            continue;
        }
        retorno += max + ", ";
    }
    console.log(retorno);
}

function snapCracklePrime(maxValue) {
    let retorno = "";
    for (let max = 1; max <= maxValue; max++) {
        if (numerosPrimos(max) === true && max % 2 !== 0 && max % 5 === 0) {
            retorno += "SnapCracklePrime, ";
            continue;
        }
        if (max % 2 !== 0 && max % 5 === 0) {
            retorno += "SnapCrackle, ";
            continue;
        }
        if (numerosPrimos(max) === true && max % 2 !== 0 && max > 1) {
            retorno += "SnapPrime, ";
            continue;
        } 
        if (max % 2 !== 0) {
            retorno += "Snap, ";
            continue;
        }
        if (numerosPrimos(max) === true && max % 5 === 0) {
            retorno += "CracklePrime, ";
            continue;
        }
        if (max % 5 === 0) {
            retorno += "Crackle, ";
            continue;
        }
// Tentando resolver numeros primos!
        if (numerosPrimos(max) === true) {
            retorno += "Prime, ";
            continue;
        }
        retorno += max + ", ";
    }
    console.log(retorno);
}

// função para identificar se o numero é primo
function numerosPrimos(num) {
    let primo;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return primo = false
        }
    }
    return primo = true
}