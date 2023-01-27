/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //Si la longitud de s es mayor a t, se descarta de ser subsecuencia
    if(s.length > t.length){
        return false
    }
    //Recorrido por todos los caracteres de s
    for(let i=0;i<s.length;i++){
        console.log("t: ",t);
        // Si en t no existe el caracter en curso de s regresa un falso
        if(!t.includes(s[i])){
            return false
        }
        //Si existe el caracter en curso entoncess
        else{
            //t.indexOf(s[i]) obtiene la posicion de el caracter s[i] en t 
            // t.slice elimina ese caracter en t
            t = t.slice(t.indexOf(s[i])+1,)
        }
    }
    return true
};