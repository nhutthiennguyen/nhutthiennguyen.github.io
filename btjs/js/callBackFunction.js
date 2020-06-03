
/*
What is callback?
-synchronous: bth js sẽ chạy đơn luồng đồng bộ 
-asynchronous: khi chạy các tác vụ nặng thì cần sữ dụng bất đồng bộ
*/
//Higher order function
const greeting = {
    name: function(validate){
        console.log('hello ');
        validate();
    }
}
const xer = () =>{
    console.log('cacccccc');
};
greeting.name(xer);