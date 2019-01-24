# fueue

Fast performance queue implementation in ES6

This module is the implementer of the basic queue and it's much faster and more intuitive than Naive queue implementations.

## Install

`npm install fueue`

## API

### Create an instance

```javascript
const Queue = require('fueue');

const q = new Queue();
```

### Methods

#### push(value)

Insert `value` into the queue.

```javascript
q.push(10);
q.push('blah');
```

#### pop()

Remove the next elements from the queue and return it.

```javascript
q.push(10);
q.push('blah');

let f = q.pop();
console.log(f);
// output: 10

f = q.pop();
console.log(f);
// output: "blah"
```

#### front()

Returns the next element in the queue.

```javascript
q.push('blah');

let f = q.front();
console.log(f);
// output: "blah"
```

#### back()

Returns the last element in the queue.

```javascript
q.push('blah');
q.push(1996);

let b = q.back();
console.log(b);
// output: 1996
```

#### empty()

Returns whether the queue is empty.

```javascript
let isEmpty = q.empty();
console.log(isEmpty);
// output: true

q.push(1);
isEmpty = q.empty();
console.log(isEmpty);
// output: false
```

#### size()

Returns the number of elements remaining in the queue.

```javascript

let size = q.size();
console.log(size);
// output: 0

for(let i = 0; i < 10; ++i) {
    q.push(i);
}

size = q.size();
console.log(size);
// output: 10
```
