'use strict';

module.exports = exports = {};

exports.sayHello = (name) => {
  if(!arguments.length) { return null; }
  if( typeof name !== 'string' ) { return null; }
  return `Hello, ${name}`;
};

exports.sayGoodbye = () => {

};