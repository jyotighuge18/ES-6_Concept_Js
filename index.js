//default parametr list

// function addition (a,b=5) {
//     console.log(a+b);
// }
// addition(10);
// addition(20, 30);


//Rest Parameter list 
function addition1(...nums) {
    let ans = nums.reduce((ele,total) =>{
        return ele + total;
    })
    console.log(ans);

}
addition1(10,20,30,8);
addition1(5,6,7,8);

// Map
let myMap= new Map();
myMap.set("tomatos",20);
myMap.set("banana",50);
console.log(myMap);

for(let key of myMap.keys()){
    console.log(key);
}
for(let value of myMap.values()){
    console.log(value);

}
for(entry of myMap.entries()){
    console.log(entry);

}

//remove map
myMap.delete("banana");
console.log(myMap);

//size of map

console.log(`size of map is ${myMap.size} <br>`);



//Promise
var Array = [1,2,3,4,5];
function myPromise(){
    return new Promise((resolve,reject)=>{
     //   setTimeout(()=>{
           // resolve("promise resolved");

      //  }, 3000);

      if(Array.length > 0){
        resolve(Array);

      } else {
        reject("no data found");

      }
    })
}
myPromise().then(data=>{
    alert(data);

 }).catch(error=>{
    alert(error);

})