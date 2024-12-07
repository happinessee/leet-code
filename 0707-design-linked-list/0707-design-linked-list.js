class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index > this.size - 1) return -1;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
    }
    
    return currentNode.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const headNode = this.head;
    this.head = new Node(val, headNode);
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head === null) {
        this.head = new Node(val, null);
        this.size++;    
        return;
    }

    let currentNode = this.head;
    while(currentNode.next !== null) {
        currentNode = currentNode.next;
    }

    currentNode.next = new Node(val, null);
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) return ;

    if (index === 0) {
        const headNode = this.head
        this.head = new Node(val, headNode)
    } else {
        let currentNode = this.head;
        for (let i = 0; i < index-1; i++) {
            currentNode = currentNode.next;
        }

        let nextNode = currentNode.next;
        let newNode = new Node(val, nextNode);
        currentNode.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index > this.size - 1 || this.size === 0) return ;

    if (index === 0) {
        this.head = this.head.next;
    } else {
        let currentNode = this.head;
        for (let i = 0; i < index-1; i++) {
            currentNode = currentNode.next;
        }
        let nextNode = currentNode.next !== null ? currentNode.next.next : null;
        currentNode.next = nextNode;
    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */