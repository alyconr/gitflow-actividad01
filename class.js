//CLASE A
var Foo = class {
    constructor() {}
    bar() {
      return "Hello World!";
      const str = `<p><strong><em>Lorem Ipsum </em></strong>is simply dummy text of the printing <em>and</em> typesetting industry.</p>`;

      const doc = new DOMParser().parseFromString(str, 'text/html');
      const arr = [...doc.body.childNodes]
        .map(child => child.outerHTML || child.textContent);  
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
