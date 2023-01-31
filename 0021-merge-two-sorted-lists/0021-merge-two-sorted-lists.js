/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 //Usando un arrow function 
const mergeTwoLists = (list1, list2) => {
    //Se define una nueva lista y su cabecera
    let list = new ListNode(),head = list;
    //Mientras list 1 y list 2 tengan valores
    while (list1 && list2) {
        //Si el primer valor de list1 es menor igual que el primer valor de list2
        if (list1.val <= list2.val) {
            //Entonces manda a la cola de list toda la list1
            list.next = list1;
            // Y avanza una posicion a list1
            list1 = list1.next;
        }
        else {
            //Ya que el valor de list2  resulto ser menor
            //Entonces manda a la cola de list toda la list1
            //console.log(list);
            list.next = list2;
            // Y avanza una posicion a list2
            list2 = list2.next;
        }
        //Se hace reacomodo para que se sigan moviendo las posiciones en list
        list = list.next;
    }
    
    //Para la ultima posicion de list se debe colocar el rabito que sobro ya sea de list1 o list2
    list.next = list1 || list2;
    //Se regresa hread.next ya que la primera posicon es 0
    return head.next;

};