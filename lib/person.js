'use strict';

module.exports = exports = {};

exports.sayHi = (name) => {
   if( typeof name !== "string" ) { return undefined; }

   return `Hello, ${name}`;

};

