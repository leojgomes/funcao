function Numero(num){
    
    if (num <= 1) {
        return false;
    } for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
                
            }
        }
        return true
    }
let num = 11

    if (Numero(num)) {
        console.log(num + " é um número primo.");
    } else {
        console.log(num + " não é um número primo.");
    }

