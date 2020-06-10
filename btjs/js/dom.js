// documentgetbyID
//qselector chi lay ele dau tien
// const $h1 = document.querySelector('h1');
// $h1.innerHTML = 'Hello';
// const $changeTitle = document.querySelector('.btn-click');
// $changeTitle=addEventListener('click',function(){
//     $h1.innerHTML = 'sadasds';
// });
// localStorage || cookie || session
// json.stringify || json.parse
/*
-click button "change tittle"
    change the title to 'heading title'
    change button to Udo

*/
const $h1 = document.getElementById('change');
const $change = document.querySelector('btn-click');
$change = addEventListener('click',()=>{
    $h1.style.border = '1px solid black'
});