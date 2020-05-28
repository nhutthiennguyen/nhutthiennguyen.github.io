function check(gender){
    if (gender=='male'){
        console.log('Mr');
        return gender;
    }
    else{
        console.log('Mrs');
        return gender;
    }
}
function checkGender(gender){
    if (gender==''){
        console.log('ban chua nhap gioi tinh')
    }
    else {
        check(gender);
    }
};
function checkName(nameClient){
    if(nameClient==''){
        console.log('Ban chua nhap ten');
    }
    else {
        return nameClient;
    }
};
function checkPhone(phoneNumber){
    if(phoneNumber==null){
        console.log('Ban chua nhap sdt');
    }
    else {
        return phoneNumber;
    }
};
function info(nameClient,gender,phoneNumber){
    console.log('Xin Chao ' + checkGender(gender) + ' ' + checkName(nameClient) + ' ' + 'so dien thoai la ' + checkPhone(phoneNumber));
};
info('john','',124124)