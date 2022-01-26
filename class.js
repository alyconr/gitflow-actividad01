//CLASE A
var Foo = class {
    constructor() {}
    bar() {
      return "Hello World!";
    }
  };

//CLASE B 
var instance = new claseb();
instance.bar(); // "Hello World!"
claseb.name; // 

var claseb = class NamedClaseb {
  constructor() {}
  whoIsThere() {
    return NamedClaseb.name;
  }
}
var bar = new claseb();
bar.whoIsThere(); 
NamedClaseb.name; 
claseb.name; 