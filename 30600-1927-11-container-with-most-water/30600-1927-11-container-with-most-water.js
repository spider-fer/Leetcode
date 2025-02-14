/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let right = height.length - 1;
    let left = 0;
    let maxWater = 0;

    while(left < right){
        //Calculamos el ancho del cuadrado
        let width = right - left;

        //Se calcula la altura minima ya que si tomamos la mayor se podria desbordar el agua
        let h = Math.min(height[left], height[right]);

        //Se calcula la capacidad de agua en la posicion actual
        let water = width * h;

        //Se calcula cual es la maxima capacidad si la actual o la anterior registrada
        maxWater = Math.max(maxWater, water);

        //Movemos las posiciones de los punteros
        //Nos movemos del lado del valor menor ya que es mas probable encontrar
        //una mayor capacidad si tenemos una altura mayor(el otro lado actual)
        if(height[left] < height[right]){
            left++;
        } else{
            right--;
        }
    }

    return maxWater;
};