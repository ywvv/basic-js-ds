const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null;
  }
  root() {
    if (this.base === null) {
      return null;
    } else {
      return this.base;
    }
  }
  add(data) {
    let newNode = new Node(data);
    if (this.base === null) {
      this.base = newNode;
    } else {
      this.addNode(this.base, newNode);
    }
  }
  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }
  has(data, node = this.base) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.has(data, node.left);
    } else if (data > node.data) {
      return this.has(data, node.right);
    } else if (data == node.data) {
      return true;
    } else {
      return false;
    }
  }
  find(data, node = this.base) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else if (data == node.data) {
      return node;
    } else {
      return null;
    }
  }
  remove(data) {
    this.base = this.removeNode(this.base, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }
  minNode(node) {
    if (node.left === null) {
      return node;
    }
    else {
      return this.minNode(node.left);
    }
  }
  min(node = this.base) {
    if (node === null) {
      return null;
    }
    else if (node.left === null) {
      return node.data;
    }
    else {
      return this.min(node.left);
    }
  }
  max(node = this.base) {
    if (node === null) {
      return null;
    }
    else if (node.right === null) {
      return node.data;
    }
    else {
      return this.max(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};