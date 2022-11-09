
//Every Function has a property called Prototype.
//Javascript has prototype bases inheritance.
//Suppose there is a function X.
//When you create another func that is inherited from X, it will inherit the methods and
//properties defined in X's prototype

let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;
 
};

EmpDetails.prototype.getName = function(){
    return this.name;
};

EmpDetails.prototype.getAge = function(){
    return this.age;
};


let emp1 = new EmpDetails('John', 30);
let emp2 = new EmpDetails('Peter', 40);
console.log (emp1.getName());
console.log (emp1.getAge());