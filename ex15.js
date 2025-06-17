function positivo(n){
    if(n < 0){
    return ("O número " + n + " é negativo")
}else if(n > 0){
    return ("O número " + n + " é positivo")
}else{
    return ("O número é zero ")
 }
}console.log(positivo(0))