//human coding using java script in node js

function frequency(str){
  //console.log(str);
  var freq={};
  for(var i=0;i< str.length;i++){
    //console.log(str.charAt(i));
    l=str.charAt(i);
    if(l in freq)
      freq[l]+=1
    else
      freq[l]=1
  }
 return freq;
}

function sortFreq(ferq){
 var sortT=[]
 for(var l in freq){
   sortT.push([ferq[l],l]);
 }

// console.log(sortT)
// console.log(sortT[0][1]); we get a
 return sortT.sort();
}

function buildTree(sortT){
  while(sortT.length>1){
   var  temp1=[sortT[0][1],sortT[1][1]];
   //console.log("sorted tree",sortT);
   var rest=sortT.slice(2,sortT.length);
   var sum=sortT[0][0]+sortT[1][0];
   sortT=rest;
   neww=[sum,temp1];
   sortT.push(neww);
   sortT.sort();
  } 
  return sortT;
}

function trimTree(tree){
 return tree[0][1];
}

var codes={};

function assignCode(node,pat){
//console.log(node)
  if(typeof pat=== 'undefined')
    pat="";
  if( typeof node == typeof "" ){
     codes[node]=pat
 //  console.log("pat is ",pat,node);
  }
  else{
    assignCode(node[0],pat+"0")
    assignCode(node[1],pat+"1")
  }
}

function encode(str){
 var output="";
 for(i in str)
   output+=codes[str[i]];
// console.log(output)
 return output
}


function decode(tree,str){
 var  output="";
 var p=tree;
 //console.log(str);
 //console.log(str.length-1)
 //console.log("tree is",p);
 for(var bit in str){
  if(str[bit]=="0")
     p=p[0];
  // console.log("0 is ",str[bit]
  else
     p=p[1]
   // console.log("1 is ",p)
  if(typeof p == typeof "" ){
    output+=p
    p=tree
   // console.log(output);
  }
 }
 return output;
}



var s="aabbccc"
freq=frequency(s);
sortT=sortFreq(freq);
tree=buildTree(sortT);
Tree=trimTree(tree)

//console.log(Tree);
assignCode(Tree);
//console.log(codes);
var enc=encode(s);
console.log("Input msg is ",s);
console.log("Encodeed output is",enc);
//console.log("length is ",enc.length);
var fin=decode(Tree,enc)
console.log("Decoded output is ",fin);

