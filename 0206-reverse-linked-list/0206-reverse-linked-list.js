/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let next = null;
    let prev = null;
    //Se incializa la lista current con todo lo que tenga head
    let current = head;
    //Mientras head no sea null
    while(current != null){
        // Asignamos en next todo lo que vaya despues de la posicion 1 de current
        next = current.next;
        //Ponemos los numeros que tengamos almacenados anteriormente en prev despues de la
        // posicion que tenemos en curso
        current.next = prev;
        //Ponemos en prev todos lo numeros que ya recorrimos
        prev = current;
        //Seteamos a current con los numeros faltantes
        current = next;
    }
    return prev
};