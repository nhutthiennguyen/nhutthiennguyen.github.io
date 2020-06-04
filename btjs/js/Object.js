const student1 = { name: 'Hoang', age:22, gender:'male', married:false, Math:2, English:3 };
const student2 = { name: 'John', age:23, gender:'male', married:true, Math:10, English:5  };
const student3 = { name: 'Saphia', age:20, gender:'female', married:false, Math:1, English:7  };
const student4 = { name: 'Soviet', age:22, gender:'male', married:true, Math:2, English:9  };
const student5 = { name: 'Cacc', age:25, gender:'female', married:false, Math:8, English:9  };
//properties: key: value, 
//pick value object: student.age, student['age']
//arrow func callback neu k co {} la sau do auto return 
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
const avgScore = students.map(x => x.Math + x.English / 2).filter(x => x > 5);
console.log(avgScore);

