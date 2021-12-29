import { todoAdd } from "./modules/todoAdd.js";
import { todoRender } from "./modules/todoRender.js";


var btnConfirm = document.getElementById("btnConfirm");
var listData = {}

btnConfirm.addEventListener('click',() => {
  
  const inputEmpty = document.getElementById("todoFm");
  if( inputEmpty.value == ""){
    alert('오늘의 할일을 입력해주세요!');
  }else{
    todoAdd(listData);
  }

});

var btnClear = document.getElementById("btnClear");
var array=[];
var arraykey=[];
btnClear.addEventListener('click',() => {
  localStorage.clear(); 
});

for (var i = 0; i < localStorage.length; i++) {
  listData[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
  
}

for (var key in listData) {
  array.push(listData[key])
  arraykey.push(key)
}

for (var i = array.length; i > 0; i--) {
  todoRender(array[i-1],arraykey[i-1])
}
