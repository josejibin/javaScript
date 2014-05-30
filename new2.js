//checking js invert function

var invert = function (obj) {

  var new_obj = {};

  for (var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
};
var obj = {
  firstname : "nelson",
  middlename : "dane",
  lastname: "wells",
};

console.log(invert(obj))

/*var name = '';

for(var value in invert(obj)) {
  name += value + ' ';
}

console.log(name.trim());

*/
