let rootNode = {data: 5, left: null, right: null}
let firstNewNode = {data: 3, left: null, right: null}
let secondNewNode = {data: 7, left: null, right: null}
let thirdNewNode = {data: 9, left: null, right: null}

function findOrAdd(node, newNode) {
  let currentNode = node
  if (node.data = newNode.data) {
    return true;
  } else if (newNode.data < node.data) {
      currentNode = node.left
      if (currentNode) {
        findOrAdd(currentNode, newNode)
      } else {
        node.left = newNode
      }
  } else if (newNode.data > node.data) {
    currentNode = node.right
    if (currentNode) {
      findOrAdd(currentNode, newNode)
    } else {
      node.right = newNode
    }
  }
}

function min(node) {
  return (node.left) ? min(node.left) : node
}

function max(node) {
  return (node.right) ? max(node.right) : node
}

function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  }
  console.log(node.data)
  if(node.right) {
    inOrder(node.right)
  }
}

findOrAdd(rootNode, firstNewNode)
findOrAdd(rootNode, secondNewNode)
findOrAdd(rootNode, thirdNewNode)
let result = findOrAdd(rootNode, thirdNewNode)
console.log(rootNode)
console.log("Result: ", findOrAdd(rootNode, thirdNewNode))
