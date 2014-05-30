//checking js

var myObj =
    {
        'b': 'asdsadfd',
        'c': 'masdasaf',
        'a': 'dsfdsfsdf'
    },
    keys = Object.keys(myObj),
    i, len = keys.length;
console.log(keys);
keys.sort();
console.log(keys);
console.log("i=",i)
console.log("l=",len);
for (i = 0; i < len; i++)
{
    k = keys[i];
    console.log(k + ':' + myObj[k]);
}
console.log(myObj);
