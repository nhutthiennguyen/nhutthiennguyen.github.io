
/*
What is callback?
-synchronous: bth js sẽ chạy đơn luồng đồng bộ 
-asynchronous: khi chạy các tác vụ nặng thì cần sữ dụng bất đồng bộ
*/
//Higher order function
 function makeAdjectifier(adjective){
     return function (string){
         return adjective + ' ' + string;
     };
 }
 var coolifier = makeAdjectifier('cool');
 coolifier('conference');