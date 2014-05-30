//my second javascript program using node js

function range(start,end){
  if(arguments.length<2){
     end=start;
     start=0;
   }
  for(var i=start;i<=end;i++){
    console.log(i)
   }
}

range(4);
range(2,9);
