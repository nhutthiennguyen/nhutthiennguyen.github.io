const student1 = { name: 'Hoang', age:22, gender:'male', married:false, Math:2, English:3 };
const student2 = { name: 'John', age:23, gender:'male', married:true, Math:10, English:5  };
const student3 = { name: 'Saphia', age:20, gender:'female', married:false, Math:1, English:7  };
const student4 = { name: 'Soviet', age:22, gender:'male', married:true, Math:2, English:9  };
const student5 = { name: 'Cacc', age:25, gender:'female', married:false, Math:8, English:9  };
//properties: key: value, 
//pick value object: student.age, student['age']
//arrow func callback neu k co {} la sau do auto return
/*
Math Object
Math.PI (Properties)
    số Pi 3,14
 Math.ceil (ceiling)
    làm tròn số thập phân lên
Math.floor
    làm tròn xuống
Math.max(param1, param2 ...)
    lượt số lớn nhất
Math.min(param1, param2 ...)
    lượt số nhỏ nhất
Math.random
    auto trả về 1 số từ 0 - 1
ternary operator

*/
//Math.random toss a coin
const tossACoin = () =>{
    const random = Math.random;
    return random > 0.5;
}
//console.log('Mặt ' + tossACoin());
//Math random roll a dice
const rollADice = () => {
    const random = Math.random();
    switch(random){
        case random  <= 0.1666666666666667: 
            return 'result ' + 1;
        case random > 0.1666666666666667 && random <= 0.3333333333333333: 
            return 'result ' + 2;
        case random > 0.3333333333333333 && random <= 0.5000000000000001: 
            return 'result ' + 3;
        case random > 0.5000000000000001 && random <= 0.6666666666666668: 
            return 'result ' + 4;
        case random > 0.6666666666666668 && random <= 0.8333333333333335: 
            return 'result ' + 5;
       default: return 'result' + 6;
    }
};

const students = [];
students.push(student1,student2,student3,student4,student5);
const i = students.forEach((x , y)=>{
    if (x.gender === 'female'){
        //  femaleStudents.push(x);
    };
});
    // console.log(femaleStudents);
const femaleStudents = students.filter((x) => x.gender === 'female');
const marriedStudents = students.filter((x)=> x.married);

function sum(){
    let result = 0;
    for (let i = 0; i <= arguments.length; i++) {
        if (typeof arguments[i] !== 'number'){
            console.log('agruments should be numbers');
            result = 0;
            break;
        }
        else{
             result = result + arguments[i];
        }
    }
};
// let nameStudents = [];
// students.forEach((x)=>{
//     nameStudents.push(x.name);
// });

// const studentsName = students.map((x)=> {
//     return {
//         name: x.name,
//         age: x.age
//     }
// });
const studentsName = students.map((x)=>({name: x.name, age: x.age}))
// console.log(studentsName);

/*
- Make function to calculate average score of Math and English of each student
  - Make an array with students who have average score > 5 (define range ...etc)
  - Make new array with students, each student has current attributes and new attribute named as averageScore
*/
const avgScore = students.map(x => x.Math + x.English);
    console.log('total score ' + avgScore);

const higherAvgScore = avgScore.map(x => x /2).filter(x => x > 5).sort((x, y)=> y - x);
    console.log('Average Score '  + higherAvgScore);

const classificationStudents = avgScore.map((x)=>{
    x = x /2;
        if (x < 5){
            return x + ' Below Average';
        }
        else if (x > 5 && x <= 7){
            return x + ' Average';
        }
        else if (x > 7 && x <= 8.4){
            return x + ' Good';
        }
        else if (x > 8.4){
            return x + ' Exellent';
        }
});
console.log(classificationStudents);

const newStudents = [...students];
newStudents.forEach(x => x.avgScore = (x.Math + x.English) / 2);
console.log(newStudents);


// lab toss a coin using ternary operator
const tossCoin = ()=>{
    const value = Math.random();
    const result1 = (value < 0.5) ? 'Mặt sấp' : 'Mặt ngữa';
    console.log(result1);
}
// remake firt hw 

