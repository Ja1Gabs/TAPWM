function dividir(a, b) {
    
    if (isNaN(a / b)) {
        console.log("Divisão deu NaN");
    } else {
     
        if (!isFinite(a / b)) {
            console.log("Divisão de Infinity");
        } else {
          
            console.log(`Divisão = ${a / b}`);
        }
    }
}


dividir(5, 2);        
dividir(0, 7);       
dividir(10, 0);      
dividir(null, 5);     
dividir(undefined, undefined);  
dividir(null, null);  
