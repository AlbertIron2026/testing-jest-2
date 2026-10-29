// va a ganar el barça la liga?
// retorna TRUE o FALSE

function futbol(respuesta) {
    if(respuesta=="s"){
        return true;
    } else return false;
}



function celebrar(fraseVictoria){
    return "Barça campió! " + fraseVictoria;
 }

 module.exports = {futbol, celebrar}

 function golAverage(goles){
    return "el Barça esta liga ha marcado: " + goles;
 }