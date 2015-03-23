Tinytest.add('truth', function (test) {
  test.equal(true, true);
});

Tinytest.add('Classes', function (test) {
  class Person {
    constructor(name) {
      this.name = name;
    }

    getName () {
      return this.name;
    }
  }
  var pippo = new Person('grigio');
  
  test.equal(pippo.name , 'grigio');
});

Tinytest.add('Template strings', function (test) {
  var name = 'Luigi', surname = 'Maselli';

  test.equal( `Hi, ${name} ${surname}`, 'Hi, Luigi Maselli');
});



Tinytest.add('Destructuring', function (test) {
  let [head, , tail] = [1,2,3];

  test.equal( head, 1);
  test.equal( tail, 3);
});


Tinytest.add('Generators functions', function (test) {
  function* foo() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
      return 6;
  }

  var out = [];
  for (var v of foo()) {
      out.push(v)
  }

  test.equal( out, [1,2,3,4,5]);
});

Tinytest.add('Sets', function (test) {
  var s = new Set();
  s.add("hello").add("goodbye").add("hello");

  test.equal( s.size, 2);
  test.equal( s.has("hello"), true);
});

Tinytest.add('ES7 - async await', function (test, done) {
  function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function asyncValue(value){
    await sleep(500);
    return value;
  }

  Meteor.wrapAsync(function execute(args, onCompleted) {
    (async function(){
        var value = await asyncValue(42);
        test.equal( value, 42);
        // onCompleted();
    })();
  });

});

Tinytest.add('Meteor - check Number', function (test) {
  test.equal( check(666, Number ), undefined );
});

// blacklist: ["useStrict"]
Tinytest.add('Meteor - global vars', function (test) {
  (function () {
    myVar = 'yes';
  })();
  test.equal( myVar , 'yes');
});


