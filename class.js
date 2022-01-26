//CLASE A
var Foo = class {
    constructor() {}
    bar() {
      return "Hello World!";
    }
  };

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