//---------- Function defaults -------------//
function sum(x = 0, y = 0){

  return x + y;
}

function product(x, y = x){

  return x * y;
}

console.log(sum(5));
console.log(product(5));


//---------- Rest (of) parameters -------------//

//basically take commas separated arguments and put them into an array (oppsotie of spread operstor)

function admin(level, ...args)
{
  console.log("Level: " + level);
  console.log("Rest of arguments: " + args)
}

admin("Super-user", 1 , 2, 'b', 'c');


//---------- Spread Operator -------------//
//basically takes array and gives comma separated arguments (oppsotie of rest paramter)


function admin(level, ...args)
{
  console.log("Level: " + level);
  console.log("Rest of arguments: " + args)
}

admin("Super-user", ...[1 , 2, 'b', 'c']);


//object literal notation
function greeting(name)
{
    var sayHi = function()
    {
      console.log("Hi " + name)
    }

    var sayBye = function()
    {
      console.log("Bye " + name)
    }

  //  return { sayHi: sayHi, sayBye: sayBye }

    //now we can do the following instead
    return { sayHi, sayBye}

}

var greeter = greeting("Zain");
greeter.sayHi();


//--------- FOR of loop (simple way to print out each instead of normal loop)

var aStuff = ["hello", 1, 2, "whats up"];

for(i of aStuff) console.log(i);
for(i of "someString") console.log(i);



//------------- template literals ------- helps us lose concatenation

var country = "UK"
//instead of this
console.log("He is from " + country);

//do this
console.log(`He is from ${country}`)

//-------------Destructuring-----------//
var aPerson = {name:"Zain", location:"London", gender:"male"};

//the below are equivalent the second line is just shorthand for the above line
var location = aPerson.location;
var {location} = aPerson;

//the below are equivalent the third line is just shorthand for the above 2 lines
var name = aPerson.name;
var location = aPerson.location;
var {name, location} = aPerson;



//LET is to define variables which are block scoped!! Note let is NOT hoisted like var


var x = 1;


for(let x = 1; x < 10; x++)
{
  console.log(x)
}

console.log(x)

//as you see x is STILL 1 not 10 as would be the case if we used var in the loop

{
  let make = "BMW"
  console.log(make);

  {
    //still available in inner blocks as normal lexical scoping
    console.log(make)
  }

}

//CONST is basically LET which cannot be changed after assigment. Hence its block scoped as well

const whoami = "Zain";

//whoami = "Joe" ---> this gives TypeError: Assignment to constant variable.


//However since const is block scope we can do this:

if(true){
    const whoami = "TheDude";
}
