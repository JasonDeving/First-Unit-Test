var expect = require('chai').expect;

function sum (a, b) { 
 return a + b; 
} 

expect(sum('one', 'two')).to.equal('three');