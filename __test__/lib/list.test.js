'use strict';

let List = require('../../lib/list.js');

describe("List Module", () => {

  it("constructor() initializes with a length of 0", () => {
      let list = new List();
      expect(list.length).toBe(0);
  });

  it("push(), when run, increments the length by 1", () => {
    let list = new List();
    list.push("Foo");
    expect(list.length).toBe(1);
  });

  it("push(), when run, adds an element to the list", () => {
    let list = new List();
    list.push("Foo");
    list.push("Bar");
    list.push("Baz");
    list.push("Bop");
    expect(list[0]).toEqual("Foo");
    expect(list[1]).toEqual("Bar");
    expect(list[2]).toEqual("Baz");
    expect(list[3]).toEqual("Bop");

  });

  it("map() iterates the list and returns a new array", () => {
    let list = new List();
    list.push("Foo");
    list.push("Bar");
    list.push("Baz");
    list.push("Bop");

    let newList = list.map( (val, i) => `${i} - ${val}` );
    expect(newList.length).toEqual(list.length);
    expect(newList).not.toEqual(list);
  });
});