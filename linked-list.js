/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length == 1) {
      this.length = 0;
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      return val;
    }
    let prev = null;

    let head = this.head;
    while (head) {
      if (head.next) {
        prev = head;
        head = head.next;
      } else {
        prev.next = null;
        this.tail = prev;
        this.length -= 1;
        return head.val;
      }
    }
    return prev;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length == 1) {
      this.length = 0;
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      return val;
    }
    let prev = this.head;
    if (prev) {
      this.head = prev.next;
      prev.next = null;
      this.length -= 1;
      return prev.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let cur = this.head;
    while (cur) {
      if (idx == 0) {
        return cur.val;
      } else {
        idx -= 1;
        cur = cur.next;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let cur = this.head;
    while (cur) {
      if (idx == 0) {
        cur.val = val;
        return;
      } else {
        idx -= 1;
        cur = cur.next;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const node = new Node(val);
    let cur = this.head;
    let prev = null;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return;
    }
    if (cur && idx === 0) {
      node.next = this.head;
      this.head = node;
      return;
    } else if (cur && idx == this.length) {
      this.tail.next = node;
      this.tail = node;
    } else {
      while (cur) {
        if (idx == 0) {
          prev.next = node;
          node.next = cur;
          this.length += 1;
          return;
        } else {
          prev = cur;
          cur = cur.next;
          idx -= 1;
        }
      }
    }
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let cur = this.head;
    let prev = null;
    if (!this.head) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    if (cur && idx === 0) {
      this.head = cur.next;
      cur.next = null;
      this.length -= 1;
      return;
    } else if (cur && idx == this.length) {
      while (idx) {
        prev = cur;
        cur = cur.next;
        idx -= 1;
      }

      this.tail = prev;
      prev.next = null;
    } else {
      while (cur) {
        if (idx == 0) {
          prev.next = cur.next;
          cur.next = null;
          this.length -= 1;
          return;
        } else {
          prev = cur;
          cur = cur.next;
          idx -= 1;
        }
      }
    }
    this.length -= 1;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    }
    let num = 0;
    let cur = this.head;
    while (cur) {
      num += cur.val;
      cur = cur.next;
    }
    return num / this.length;
  }
}

module.exports = LinkedList;
