/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = {};
    let mapT = {};

    //Si las longitudes son diferentes regresa false
    if(s.length !== t.length){
        return false;
    }
    // Para i igual a 0, mientras que i es menor que la longitud de s, suma uno
    for(let i=0; i< s.length; i++){
        //Obtenemos el caracter en la posicion i para cada string
        let charS = s[i];
        let charT = t[i];

        //Si el caracter S no existe en MapS o el caracter no existe en MapT
        if (!(charS in mapS || charT in mapT)) {
            //Entonces agrega a MapS la propiedad charS con valor charT 
            mapS[charS] = charT;
            mapT[charT] = charS;
        }
        //En cambio si el charS existe en MapS y charT existe en MapT o 
        //si CharS no existe en MapS y charT no existe en MapT

        //Es decir si en algun Map existe pero en el otro no regresa false
        else if (charS in mapS ^ charT in mapT) {
            return false;
        }

        //En cambio si MapS propiedad charS no es igual a CharT y MapT propiedad charT no es           // igual a CharS
        else if (!(mapS[charS] === charT && mapT[charT] === charS)) {
            return false
        }
        // console.log(charS, charT);
        // console.log(mapS, mapT);
        // console.log(charS in mapS, charT in mapT)
    }
    return true;
};