// function check(gender){
//     if (gender=='male'){
//         console.log('Mr');
//         return gender;
//     }
//     else{
//         console.log('Mrs');
//         return gender;
//     }
// }
// function checkGender(gender){
//     if (gender==''){
//         console.log('ban chua nhap gioi tinh')
//     }
//     else {
//         check(gender);
//     }
    
// };
// function checkName(nameClient){
//     if(nameClient==''){
//         console.log('Ban chua nhap ten');
//     }
//     else {
//         return nameClient;
//     }
// };
// function checkPhone(phoneNumber){
//     if(phoneNumber==null){
//         console.log('Ban chua nhap sdt');
//     }
//     else {
//         return phoneNumber;
//     }
// };
// function info(nameClient,gender,phoneNumber){
//     console.log('Xin Chao ' + checkGender(gender) + ' ' + checkName(nameClient) + ' ' + 'so dien thoai la ' + checkPhone(phoneNumber));
// };
// info('john','male',124124);

const validateGreeting = function (name,gender,phone){
    let isValid = true; //trong truong hop hop le
    if (!name || !gender || !phone){ //if !name = falsy || (ep kieu ve boolean) name, gender, phone ===false cung dc (khac 4 gia tri a='',null,0,undifined)
        isValid = false;
    }
    return isValid;
}

// const resolveNameWithGender = function(name,gender){         If else 
//     if (gender.toLowerCase() === 'male') {
//         return 'Mr. ' + name.toLowerCase();
//     } else if (gender.toLowerCase() === 'female'){
//         return 'Ms. ' + name.toLowerCase();
//     }
//     return 'Flexible ' + name.toLowerCase();
// }
function resolveNameWithGender(name, gender){       //Switch Case
    switch(gender.toLowerCase()){
        case 'male': 
             return  'Mr ' + name;
        case 'female':
             return 'Ms' + name;
        default: return 'Flexible ' + name;
    }
}

const greeting = function (name, gender, phone){
    if (validateGreeting(name, gender, phone) === false){
        return console.log('data is not valid');
    }
    const nameWithGender = resolveNameWithGender(name,gender);
    console.log('Hello ' + nameWithGender + "'s " + 'phone number is ' + phone);
    // const massage = `Hello ${nameWithGender}'s phone number is ${phone}`; using String template, same result
    // console.log(massage);
}
greeting('John','MALE',3525435)
/* 
Define a function allowing input 2 params: day, month
Output: -Today, 2nd June (Month's name)
Validate input data:
-day, month are required/
- day, month must be number 
*/
function dateAndMonth(day,month){
    //validate 
    //validate number, string
    //show day and month covert to string
}
