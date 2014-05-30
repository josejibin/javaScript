//this for checking js

var maxSpeed = {car:300, bike:60, motorbike:200, airplane:1000,
    helicopter:400, rocket:8*60*60}
var sortable = [];
for (var vehicle in maxSpeed)
      sortable.push([vehicle, maxSpeed[vehicle]])
sortable.sort(function(a, b) {return a[1] - b[1]})
//[["bike", 60], ["motorbike", 200], ["car", 300],
//["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]

console.log(sortable[1]);


console.log(Object.keys(sortable));

//var t=Object.keys(maxSpeed);
//k=t.slice(0,2);
//console.log(t.slice(0,2));
//console.log(typeof t);
