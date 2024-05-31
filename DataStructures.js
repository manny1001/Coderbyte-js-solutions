let array = [1, 2, 3, 4, 5];

// Using for loop
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Using for...of loop
for (let element of array) {
    console.log(element);
}

// Using forEach method
array.forEach(element => {
    console.log(element);
});
/////////////////////////////
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();  // Outputs 1, 2, 3
/////////////////////////////
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) return "Underflow";
        return this.items.pop();
    }

    printStack() {
        for (let i = this.items.length - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack();  // Outputs 3, 2, 1
/////////////////////////////
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length == 0) return "Underflow";
        return this.items.shift();
    }

    printQueue() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.printQueue();  // Outputs 1, 2, 3

/////////////////////////////
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Depth-First Traversal (In-order)
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Breadth-First Traversal (Level-order)
    levelOrderTraversal() {
        let queue = [];
        if (this.root) queue.push(this.root);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            console.log(currentNode.value);

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }
}

let tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log("In-order Traversal:");
tree.inOrderTraversal(tree.root);  // Outputs 4, 2, 5, 1, 3

console.log("Level-order Traversal:");
tree.levelOrderTraversal();  // Outputs 1, 2, 3, 4, 5
/////////////////////////////
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    depthFirstTraversal(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (stack.length) {
            let currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        console.log(result);
    }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.depthFirstTraversal('A');  // Outputs [ 'A', 'C', 'B' ]
/////////////////////////////
let hashTable = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
};

// Looping through the hash table
for (let key in hashTable) {
    if (hashTable.hasOwnProperty(key)) {
        console.log(key + " -> " + hashTable[key]);
    }
}
/////////////////////////////
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    traverse(node = this.root, prefix = "") {
        if (node.isEndOfWord) {
            console.log(prefix);
        }
        for (let char in node.children) {
            this.traverse(node.children[char], prefix + char);
        }
    }
}

let trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cap");

trie.traverse();  // Outputs "cat", "car", "cap"
