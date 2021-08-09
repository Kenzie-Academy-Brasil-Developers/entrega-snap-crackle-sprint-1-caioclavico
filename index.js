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
// Tentando resolver numeros primos!
        if (max % max === 0) {
            retorno += "Prime, ";
            continue;
        }
        retorno += max + ", ";
    }
    console.log(retorno);
}