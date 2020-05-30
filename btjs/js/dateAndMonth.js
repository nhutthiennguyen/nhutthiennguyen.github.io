function checkDayAndMonth(day,month){ 

    if(!day || !month){
        return false;
    }
        return true;
};

function checkDataType(day,month){ 

    if (typeof day === 'number' && typeof month === 'number'){
        return true;
    }

    else{
        return false;
}
};

function checkDayAndMonthValid(day,month){
    if (day <= 31 && month <= 12){
        return true;
    }
    else{
        return false;
    }
};

function checkDayAndMonthValid1(day,month){
    if (month === 2 && day >29){
       return false;
    }
    else if (month === 4, 6, 9, 11 && day >30){
        return false;
    }
    else if (month === 1, 3, 5, 7, 8, 10, 12 && day >31){
        return false;
    }
    else {
        return true;
    }
};

function dayReturn(day){

    switch (day){
        case 1, 21, 31:
            return day + 'st ';
        case 2, 22:
            return day + 'nd ';
        case 3, 23: 
            return day + 'rd ';
        default:
            return day + 'th ';
    }
};

function monthReturn(month){
    switch (month){
        case 1:
            return 'January ';
        case 2:
            return 'February ';
        case 3:
            return 'January ' ;
        case 4:
            return 'April ';
        case 5:
            return 'May ';
        case 6:
            return 'June ';
        case 7:
            return 'July ';
        case 8:
            return 'August ';
        case 9:
            return 'September ';
        case 10:
            return 'October ';
        case 11:
            return 'November ';
        case 12:
            return 'December ';
    }
};

function dayAndMonth(day,month){

    //vadidate day
    if (!checkDayAndMonth(day,month)){
        console.log(day + ' ' + 'or ' + month + ' ' + 'not valid');
    }

    else if (!checkDataType(day,month)){
        console.log('something went wrong, date or month is not valid ');
    } 

    else if (!checkDayAndMonthValid(day,month)){
        console.log('something went wrong, date or month is not valid ');
    }

    else if (!checkDayAndMonthValid1(day,month)){
        console.log('something went wrong, ' + monthReturn(month) + 'has no date of ' + day );
    }
    else{
    console.log('Today' + ' ' + dayReturn(day) + monthReturn(month));
    }
};

dayAndMonth(32,4);

