function Student(name, age, gender, math, english){
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.math = math, 
    this.english = english
};

let students = [];

//covert to string
const studentsString = JSON.stringify(students);
localStorage.setItem('students', studentsString);

const std1 = new Student ('john', 20, 'male', 5, 6);
const std2 = new Student ('wick', 20, 'male', 8, 9);
const std3 = new Student ('jenny', 18, 'female', 8, 8);
const std4 = new Student ('stella', 19, 'female', 5, 6);
const std5 = new Student ('Tom', 21, 'male', 8, 6);
const std6 = new Student ('csc', 21, 'male', 3, 4);
students.push(std1, std2, std3, std4, std5, std6);

const $body = document.querySelector('.bdy-std');
console.log($body)

const tableStd = students.map(x=>{
    return '<tr>'
    + '<td>' + x.name + '</td>'
    + '<td>' + x.age + '</td>' 
    + '<td>' + x.gender + '</td>' 
    + '<td>' + x.math + '</td>' 
    + '<td>' + x.english + '</td>'
    + '</tr>';
}).join('');
console.log(tableStd);
$body.innerHTML = tableStd;

const $add = document.querySelector('#submit');
$add = addEventListener('click', addStds);

function addStds(){
   let stds = new Student(
       name = document.querySelector('#name').value,
       age = document.querySelector('#number').value,
       gender = document.querySelector('#gender').value,
       math = document.querySelector('#math').value,
       english = document.querySelector('#english').value
   );

   students.push(stds);
   console.log(stds);
   
   

};

