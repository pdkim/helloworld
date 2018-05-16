'use strict';

let person = require('../../lib/person.js');

describe("Person Module", () => {

  it("sayHi() returns null when name is not a string", () => {
    expect( person.sayHi() ).toBeUndefined();
  });

  it("sayHi() returns a greeting when given a name", () => {
    expect( person.sayHi('John') ).toEqual('Hello, John');
  });

});

