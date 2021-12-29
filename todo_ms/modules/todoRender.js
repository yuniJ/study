import { clickCheck, clickDel } from "./clickCheck.js";
import { setDateTime } from "./setDateTime.js";

function todoRender(params,index) {
  
  const listBox = document.getElementById("listBox");
  const list = document.createElement("li");
  const listTxt = document.createElement("span");
  const listBtnCheck = document.createElement("a");
  const listBtnClose = document.createElement("a");
  const listTime = document.createElement("span");

  listBox.appendChild(list);
  list.appendChild(listTxt);
  list.appendChild(listBtnCheck);
  list.appendChild(listBtnClose);
  list.appendChild(listTime);

  listTxt.classList.add("txt");

  listBtnCheck.classList.add("bt_check");
  listBtnClose.classList.add("bt_del");
  listTime.classList.add("time");
  listTxt.innerText = params.toDoTxt;
  listBtnCheck.innerText = "완료";
  listBtnClose.innerText = "삭제";
  
  listTime.innerText = params.toDoDate;
  
  var tabIndex=window.location.search;
  var tabBtn = document.querySelectorAll(".tab li");
  if(tabIndex=="?2"){
    tabBtn[1].classList.add('on');
    if (params.toDoDate == setDateTime()) {
      if (params.toDoDone == true) {
        clickDel(list);
      }
    }else{
      clickDel(list);
    }
  }else if(tabIndex=="?3"){
    tabBtn[2].classList.add('on');
    if(params.toDoDone == false){
      clickDel(list);
    }
    
    
  }else{
    tabBtn[0].classList.add('on');
    if (params.toDoDone == true) {
      clickDel(list);
    }
  }
 
  
  listBtnCheck.addEventListener('click',() => {
    clickCheck(listTxt);
    params.toDoDone = true;
    window.location.reload()
    localStorage.setItem(index, JSON.stringify(params));
    
    
  }); 
  
  listBtnClose.addEventListener('click',() => {
    clickDel(list);
    localStorage.removeItem(index);
  })

  if(params.toDoDone == true){
    clickCheck(listTxt);
  }
}

export { todoRender };
