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
var middleNode = function(head) {
    let middle = 0;
    let sum = 0;
    let current = head;
    //Se hace la suma de nodos a traves de current
    while(current){
        sum++;
        current = current.next;
    }
    //Se encuentra la mitad
    middle = Math.floor(sum/2);
    //Se hace el recorrito hasta la mitad
    for(let i = 0; i < middle; i++){
        head = head.next;
    }
    return head;
};