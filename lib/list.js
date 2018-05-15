'use strict';

class List {

  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length] = item;
    this.length++;
  }


  map(callback) {

    let newList = new List();
    for( let i = 0; i < this.length; i++ ) {
      newList.push( callback(this[i], i) );
    }
    return newList;
  }

}

// new One
// .length property
// push()
// pop()
// join()
// shift()
// unshift()
// slice()
// map()
// filter()
// reduce()
// forEach()

module.exports = List;
