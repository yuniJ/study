import { setDateTime } from "../util/convert-date.js";


// mvvm
// veiw model ?

// todo  렌더 할 구조 만들기 


// 리스트 영역
function todoView(data,dataKey,tab){
  const listBox = document.getElementById("listBox");
  const list = document.createElement("li");
  const listTxt = document.createElement("span");
  const listBtnCheck = document.createElement("button");
  const listBtnClose = document.createElement("button");
  const listTime = document.createElement("span");
  if(tab==="all"){
    if(data[dataKey].toDoDone === true){
      return
     }
  }else if(tab==="today"){
    if(data[dataKey].toDoDate!==setDateTime()){
      return
     }
     if(data[dataKey].toDoDone === true){
      return
     }
  }else if(tab==="done"){
    if(data[dataKey].toDoDone === false){
      return
     }
     list.classList.add('complete')
  }

  listBox.appendChild(list);
  list.setAttribute("data-id",dataKey)
  list.appendChild(listTxt);
  list.appendChild(listBtnCheck);
  list.appendChild(listBtnClose);
  list.appendChild(listTime);

  listTxt.classList.add("txt");

  listBtnCheck.classList.add("bt_complete");
  listBtnClose.classList.add("bt_del");
  listTime.classList.add("time");

  listTxt.innerText = data[dataKey].toDoTxt;
  listTime.innerText = data[dataKey].toDoDate;
 
  listBtnCheck.innerText = "완료";
  listBtnClose.innerText = "삭제";
  
}

export { todoView };
