//CLASE A
var Foo = class {
    constructor() {}
    bar() {
      return "Hello World!";
    }
  };

<<<<<<< HEAD
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
=======
  //CLASE C

var Clasec = class NamedClasec {
    constructor() {}
    whoIsThere() {
      return NamedClasec.name;
    }
  }
  var bar = new Clasec();
  bar.whoIsThere(); // 
  NamedClasec.name; // 
  Clasec.name; // 
>>>>>>> feature/feature-3
