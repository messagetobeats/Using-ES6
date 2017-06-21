function Greeting(name)
{
  this.name = name;
  this.sayHi = function()
               {
                 var location = "UK"
                  setTimeout(function(){
                                        console.log(this);
                                        console.log(location);
                                        console.log("Hi " + this.name)
                                      }, 2000)
               }
}


var gs = new Greeting("Zain");
gs.sayHi();


//Arrow functions THIS are bound LEXICALLY To the function creating scope so if we convert the above to below the this keyword works

//THE FUNCTION REMEMBERS THE VARIABLES IN SCOPE AT FUNCTION CREATION TIME DUE TO CLOSURE BUT THE THIS KEYWROD IN THE FUNCTION IS NOT LEXICALLY BOUND TO THE FUNCTION CREATING SCOPE UNLESS WE USE THE ARROW FUNCTION

//SO BASICALLY CLOSURE OF FUNCTIONS DOESNT 'REMEMBER' THE THIS KEYWORD SCOPE. THINK OF ARROW FUNCTIONS CLOSURE AS A CLOSURE ON STEROIDS

/*
function Greeting(name)
{
  this.name = name;
  this.sayHi = function()
               {
                  setTimeout( ()=>{
                                        console.log(this);
                                        console.log("Hi " + this.name)
                                      }, 2000)
               }
}


var gs = new Greeting("Zain");
gs.sayHi();
*/
