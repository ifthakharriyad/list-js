export class List {
  constructor(val) {
    (this.data = val), (this.next = null);
  }
  insert(val) {
    let list = new List(val);
    list.next = this;
    return list;
  }
  search(val) {
    if (this.data == val) {
      return this;
    }
    if (this.next == null) {
      return null;
    }
    return this.next.search(val);
  }
  delete(item) {
    let ahead = this.itemAhead(item);
    if (ahead != null) {
      ahead.next = ahead.next.next;
      return this;
    }
    if (this.data == item) return this.next;
  }
  itemAhead(item) {
    if (this.data == item || this.next == null) return null;
    if (this.next.data == item) return this;
    return this.next.itemAhead(item);
  }
}
