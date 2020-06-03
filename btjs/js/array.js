const myArray = ['Spring', 'Summer', 0, 3, 'Autumn', 'Winter'];
// co the chua bat cu thu gi trong js
// array co index danh theo thu tu tu` 0
// co thuoc tinh length 
// thêm mới phần tử trong array array.push('xxx')
// Destructuring (rã array)
// newArray = [ ...oldArray, xxx, yyy ]
//console.log(myArray.length);
//console.log(myArray[0]);
//array.push() cho them phan tu vao cuoi mang =/ pop
//array.shift() cho them phan tu vao dau mang =/ unshift
// concat() => noi 2 array oldArray.concat(newArray) = oldArray-newArray
/*array.map
array.map(function(item)//func để transform theo đk){

}

/*
array.filter
dùng để lọc theo điều kiện

/*
array.find
giống filter nhưng khi có 1 phần tử true sẽ dừng lại
*/
/*
array.reduce
array.reduce((item1,item2)=>{
    calculation
    return x
},init);
*/
/*
array.sort
array.sort((a,b //bất kỳ) {//this is sort function})
if sort func return a < 0
  so a will come before b
  a > 0  
  a'll come after b
  return 0
  a and b will stay unchanged
*/

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
        //console.log(i);
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

//array.map
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((item)=>{
    return item*item;
});
const rectangles= [
    {width: 10, height:5},
    {width: 10, height:20},
    {width: 4, height:16}
];
const acreage = rectangles.map((x)=>{
    return x.width*x.height;
});
const evenNumbers = numbers.filter((x)=>{
    return x % 2 === 0;
})

const orders = [
    {name: 'Key', quanity: 2, unitPrice:1000 },
    {name: 'mice' , quanity: 4, unitPrice:800 },
    {name: 'bruce', quanity: 3, unitPrice:600 }
];
const totalOrders = orders.map((x)=>{
    return x.quanity * x.unitPrice;
}).reduce((x , y)=>{
    return x + y;
});


const char = ['Tom', 'Bill', 'Kim'];
const stringResult = char.reduce((x , y)=>{
    return '<' + x + '>' + '<' + y + '>';
});

const stringResult1 = char.map((x)=>{
    return '<' + x + '>';
});
const number = [1, 4, 8, 9, 6];
const ascending = number.sort((a , b)=>{ // đéo hiểu
    return b - a;
});

const products = [
    {name: 'keyboard', price: 50, stock:5},
    {name: 'mice', price: 20, stock:7},
    {name: 'monitor', price: 100, stock:10},
    {name: 'micePad', price: 20, stock:12},
    {name: 'Speaker', price: 70, stock:8},
    {name: 'Console', price: 150, stock:9}
];
const sortByPrice = products.sort((a , b)=>{
    return b.price - a.price;
});
console.log(sortByPrice);
const priceByStock = products.map((x)=>{
    return x.price * x.stock;
}).sort((x , y)=>{
    return y - x;
});
console.log(priceByStock);