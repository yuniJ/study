import { setDateTime } from "./setDateTime.js";

function todoAdd(listData){
  var index=0;
  var toDoArry = {
    toDoId :null,
    toDoTxt:null,
    toDoDate:null,
    toDoDone:null
  }
  const newID = function () {
    return Math.random().toString(36).substr(2, 16);
  }
  const setTime = setDateTime();
  
  const inputFm = document.getElementById("todoFm");
  const inputTxt = inputFm.value;

  for (var key in listData) {
    if(index<parseInt(key)){
      index=parseInt(key)
    }
  }

  toDoArry.toDoId = newID();
  toDoArry.toDoTxt = inputTxt;
  toDoArry.toDoDate = setTime;
  toDoArry.toDoDone = false;

  localStorage.setItem(index+1, JSON.stringify(toDoArry));
}

export { todoAdd };
