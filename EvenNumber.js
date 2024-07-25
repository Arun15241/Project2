let array =[1,2,3,4,5,6];

let result=array.map((element)=> element*2);
console.log(result)

let even=result.filter((element)=> element%2==0 && element<=8);
console.log(even);

let add=even.reduce((element,sum)=>{
  sum =sum+element;
  return sum;
}, 0 );

console.log(add);
