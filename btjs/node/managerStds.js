var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadStds(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
};
 
function menu(){
    console.log('1. List all students');
    console.log('2. Create new student');
    console.log('1. Save and Exit');
};

function mainMenu(){
    loadStds();
    console.log(students);
    menu();
    var option = readlineSync.question('> ');
    switch (option){
        case '1':
            showAllStds();
            break;
        case '2':
            createStds();
            break;
        case '3':
            saveAndExit ();
            break;
        default:
            console.log('something went wrong')
            menu();
    }
};
mainMenu();