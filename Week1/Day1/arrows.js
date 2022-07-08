//arrow function

function sayHello(name){
    console.log("Hello " + name);
}

sayHello("Erick");

var sayHello2 = function(name){
    console.log("Hello Again " + name);
}

sayHello2("RWBY");

const greet = (name) =>{
    console.log("Hello from " + name + ", greet1");
}

greet("Mike");

const greet2 = (name) => console.log("Hello from " + name + ", greet2");

greet2("Stephen");