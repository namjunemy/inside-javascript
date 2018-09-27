var foo = {
  name: 'foo',
  age: 30,
  gender: 'male'
};

var prop;
for (prop in foo) {
  console.log(prop, foo[prop]);
}