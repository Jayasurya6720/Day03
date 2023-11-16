let obj1 = {
    name: "person 1",
    age: 5
}
let obj2 = {
    age: 5,
    name: "person 1"
}

 let a = Object.values(obj1);
 let b = Object.values(obj2);

 if(a=b){
    console.log(true);
 }else{
     console.log(false);
 }
