function Greeting(name)
{
   var called = 0;
   this.name = name;
   this.sayHi = function(){
      console.log(name+ ": ")
      console.log(++called)
   }
}

var person1 = new Greeting("Zain");
person1.sayHi();
person1.sayHi();
person1.sayHi();
person1.sayHi();

console.log("----------------")
var person2 = new Greeting("Joe");
console.dir(person2)
person2.sayHi();
