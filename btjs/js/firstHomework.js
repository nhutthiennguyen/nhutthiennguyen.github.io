const validate = (name,gender,phone) => {
    if(!name, !gender, !phone){
        return false;
    }
    else{
        return true;
    }
};
const checkGender = (name,gender) =>{
    if (gender=== 'male'){
        return 'Mr ' + name;
    }
    else {
        return 'Mrs ' + name;
    }
};
const greeting = (name,gender,phone) => {
    if(!name, !gender, !phone){
        console.log('please fill the blank');
    }
    else {
        console.log('Hello ' + checkGender(name,gender) + 'phone number is ' + phone);
    }
};
greeting('john', 'female', 12312312)