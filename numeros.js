


let jokes = new Map();
jokes.set(4 , "En tu culo mi aparato");
jokes.set(5 , "Por el culo de la hinco");
jokes.set(7 , "En tu culo mi paquete")
jokes.set(8 ,"El culo te abrocho");
jokes.set(9 , "El culo te llueve");
jokes.set(10 , "Te la meto de revés")
jokes.set(11 ,"A ese culo quien no lo conoce");
jokes.set(12 ,"El culo te toce")
jokes.set(13 , "Mientras mas me la mamas mas me crece");
jokes.set(14 , "te digo \"que lindo culo\" hasta en morse");
jokes.set(15 , "Te rompo el culo como un lince");



function checkNumero(token ){

    let numero = parseInt(token);

    if( jokes.has(numero)){
        return {
            hit: true,
            joke: jokes.get(numero)
        }
    }
    else{
        return {
            hit: false
        }
    }

}






export { checkNumero }