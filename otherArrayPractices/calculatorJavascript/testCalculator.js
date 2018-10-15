const assert = require ('assert');
const calculator = require ('./calculator_lib.js');
let  sum = calculator.sum;
let difference = calculator.difference;
let product = calculator.product;
let quotient = calculator.quotient;
assert.equal(sum(1,1),2,"1+1 == 2");
assert.equal(sum(2,1),3,"2+1 == 3");
assert.equal(sum(3,2),5,"3+2== 5");
assert.equal(difference(2,1),1,"2-1 == 3");
assert.equal(difference(2,2),0,"2-2 == 0");
assert.equal(difference(3,2),1,"3-2 == 1");
assert.equal(product(2,1),2,"2*1 == 2");
assert.equal(product(2,2),4,"2*2 == 4");
assert.equal(product(2,3),6,"2*3 == 6");
assert.equal(quotient(2,1),2,"2/1 == 2");
assert.equal(quotient(2,2),1,"2/2 == 1");
assert.equal(quotient(6,3),2,"6/3 == 2");
