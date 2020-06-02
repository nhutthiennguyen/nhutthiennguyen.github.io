const myArray = ['Spring', 'Summer', 0, 3, 'Autumn', 'Winter'];
// co the chua bat cu thu gi trong js
// array co index danh theo thu tu tu` 0
// co thuoc tinh length 
// thêm mới phần tử trong array array.push('xxx')
// Destructuring (rã array)
// newArray = [ ...oldArray, xxx, yyy ]
//console.log(myArray.length);
//console.log(myArray[0]);

// vong lap for
// for (var i = 0; i < myArray.length; i++){
//     const current = myArray;
//     if(typeof current === 'number'){
//         console.log(current + 10);
//     }
//     console.log(i);
// };

//forEach là hàm để duyệt các phần tử trong array
//callback
//myArray.forEach((Element, idx) => { });

// function myFunction(param1, callback){
//     callback(param1);
// }
// myFunction()
const newArray = [];
for (i=20; i <= 30; i++){
    if (i % 2 === 0){
        console.log(i);
    }
    newArray.push(i);
};
let evenArray = [];
let oddArray = [];
newArray.forEach( (a,b)=>{
    
    if(a % 2 === 0){
        evenArray = [...newArray];
    }
    else{
        oddArray = [...newArray];
    }
   
});
console.log(evenArray);
console.log(oddArray);




