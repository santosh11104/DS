/*
The code you provided defines a Node class and a LinkedList class in JavaScript. These classes are used to implement a singly linked list data structure, 
which is a linear collection of nodes where each node contains a value and a reference (or pointer) to the next node in the sequence.

The Node class represents an individual node in the linked list. It has a constructor that takes a value parameter, 
which is the data that the node will hold. The value property is initialized with the provided value, and the next property is initially set to null, 
indicating that it does not point to any other node yet.

The LinkedList class represents the entire linked list data structure. It has a constructor that initializes the head property to null (since the list is initially empty) 
and the size property to 0 (since there are no nodes in the list yet).

The LinkedList class has three methods:

1. isEmpty(): This method returns a boolean value indicating whether the linked list is empty or not. It checks if the size property is equal to 0.

2. getSize(): This method returns the current size of the linked list, which is stored in the size property.

3. prepend(value): This method adds a new node with the given value at the beginning of the linked list. It creates a new Node instance with the provided value. 
If the list is currently empty (i.e., isEmpty() returns true), it sets the head property to the new node. Otherwise, 
it updates the next property of the new node to point to the current head, and then updates the head to be the new node. Finally, it increments the size property by 1.

The code does not take any direct input, but the prepend(value) method allows you to add new nodes to the linked list by providing a value as input.

The output of this code is not explicitly defined, as it does not have any console output or return statements. 
However, the code creates and modifies a linked list data structure, which can be used in other parts of the program for various purposes, 
such as storing and manipulating data in a specific order.

The purpose of this code is to provide a basic implementation of a singly linked list data structure in JavaScript. 
Linked lists are useful for various applications, such as implementing queues, stacks, and other data structures 
that require efficient insertion and deletion operations.

The code achieves its purpose through the use of the Node class to represent individual nodes in the linked list, 
and the LinkedList class to manage the overall structure and operations on the linked list. 
The prepend(value) method is the main logic flow that adds new nodes to the beginning of the list, updating the head and size properties accordingly.
*/
/**
 * Represents a node in a linked list.
 * @class
 * @param {*} value - The value to be stored in the node.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Represents a singly-linked list data structure.
 * Provides methods to check if the list is empty, get the size of the list, and prepend new nodes to the beginning of the list.
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Checks if the linked list is empty.
   * @returns {boolean} True if the linked list is empty, false otherwise.
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Returns the current size of the linked list.
   * @returns {number} The number of nodes in the linked list.
   */
  getSize() {
    return this.size;
  }

  /**
   * Adds a new node with the given value to the beginning of the linked list.
   * @param {*} value - The value to be stored in the new node.
   */
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  /**
   * Prints the values of all nodes in the linked list.
   * If the list is empty, it logs "List is empty" to the console.
   * Otherwise, it logs a string representation of the list, with each node's value separated by an arrow (->) character.
   */
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}
const list = new LinkedList();
console.log("List is Empty?", list.isEmpty());
console.log("List Size", list.getSize());
list.print();
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.print();
