'use strict';

const hello = require('../../lib/hello.js');
const assert = require('assert');

let message = '';

message = hello.sayHello()
assert.strictEqual(message, null, 'Does Not Match');

message = hello.sayHello(1)
assert.strictEqual(message, null, 'Does Not Match');

message = hello.sayHello({})
assert.strictEqual(message, null, 'Does Not Match');

message = hello.sayHello('John');
assert.strictEqual(message, 'Hello, John', 'Does Not Match');
