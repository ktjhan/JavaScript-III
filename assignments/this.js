/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When no other rules apply, the "this" keyword defaults to the window object unless you use strict.
* 2. Implicit binding is automatic when function is invoked. refers to what is left of.
* 3. Explicit binding is when we can tell the JavaScript to set "this" to certain values with call, apply, or bind.
* 4. Bind is used to create a new function that is permanently bound to a "this".
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayMyName(name) {
  console.log(this);
  return name;
}

sayMyName("Kavin Tjhan");

// Principle 2

// code example for Implicit Binding

const sayName = {
  greeting: "Hi",
  sayHi: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
}

sayName.sayHi('Kavin');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
  this.greeting = "Hello";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting +' '+ this.greeter);
    console.log(this);
  };
}

const kavin = new CordialPerson("Kavin");
const cesar = new CordialPerson("Cesar");

kavin.speak();
cesar.speak();

// Principle 4

// code example for Explicit Binding

kavin.speak.call(cesar); cesar.speak.apply(kavin);
