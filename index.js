class Queue {

  /** Constructor of the queue.
   * @constructor
   */
  constructor() {
    this._cursor = 0;
    this._items = [];
    this._size = 0;
  }

  /** @function front
   * Returns the next element in the queue.
   * @returns Next element of queue
   */
  front() {
    if (this._size === 0) { return undefined; }
    return this._items[this._cursor];
  }

  /** @function back
   * Returns the last element in the queue.
   * @returns Last element of queue
   */
  back() {
    if (this._size === 0) { return undefined; }
    return this._items[this._items.length - 1];
  }

  /** @function push
   * Insert `value` into the queue.
   * @param value
   */
  push(value) {
    this._items.push(value);
    ++this._size;
  }

  /** @function pop
   * Remove the next elements from the queue and return it.
   */
  pop() {
    if (this._size === 0) { return undefined; }
    const value = this._items[this._cursor];
    --this._size;
    ++this._cursor;
    // prune
    if(this._cursor >= (this._items.length / 2) ) {
      this._items = this._items.slice(this._cursor);
      this._cursor = 0;
    }
    return value;
  }

  /** @function empty
   * Returns whether the queue is empty.
   */
  empty() {
    return this._size === 0;
  }

  /** @function size
   * Returns the number of elements remaining in the queue.
   */
  size() {
    return this._size;
  }
}

module.exports = Queue;