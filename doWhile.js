let inicio;
let fim;

function count(inicio, fim) {
    let i = inicio;
     
     if (inicio < fim) {
        do {
            console.log("O número atual é " + i + " e é menor que " + fim)
            i++;
        } while (i < fim)
     }
}

count(16, 30)