// min an d max in object in js

var t= {
   'Cow' : 'Moo',
   'Cat' : 'Meow',
   'Dog' : 'Bark'
};
/*
// Example 1
var key = "Cow";
delete thisIsObject[key]; 

// Example 2
delete thisIsObject["Cow"];

// Example 3*/
console.log(t);
delete t.Cow;
console.log(t);
