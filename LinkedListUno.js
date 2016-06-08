var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
    
  // adds Node to the end of linked list
  list.addToTail = function(value) {
    if (list.head === null){
        list.head = Node(value);
        list.tail = list.head;
    }
    else {
        list.tail.next = Node(value);
        list.tail = list.tail.next;
    }
  };
    
  // checks if there is a value after head
    // if value exists then reassign that next value as new head
  list.removeHead = function() {
      var beginning = list.head;
      if (beginning.next === null){
          return beginning.value;
      }
      else {
          list.head = list.head.next;
          return beginning.value;
      }
  };
    
  // Check for whether desired value is in list by looping through list 
  list.contains = function(target) {
    var temp = list.head;
    while (temp.value !== target) {
      temp = temp.next;
      if (temp === null) {
        return false;
      }
    }
    return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail: O(1)
    removeHead: O(n)
    contains: O(n)
 */
