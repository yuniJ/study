import { TodoRepository } from "./service/todo-repository.js";
import { TodoService } from "./service/todo-service.js";
import { todoView } from "./view/todo-view.js";
// import { store } from "./store/todo-store.js";

// import { TodoRepository } from "./store/todo-store.js";

// CRUD ? 
// todo 에서는?
// C : 유저 입력공간, todo 리스트 생성
// R : todo 리스트출력
// U : todo 리스트 추가, 완료, today, 데이터 변화시 업데이트 필요한 내용 
// D : todo 리스트 삭제, 전체 데이터 삭제

// ### App 시작 될 때

// 1. repository 에서 load -> store를 채움
// 2. view 를 렌더링 하고
// 3. 이벤트를 바인딩하고
// 4. 현재 URL hash 를 보고 view를 조작


let loadData=TodoRepository().loadItemsfn();
// 0.  데이터 몇개인지 확인 하고 가져옴, 3.여러개 저장이 되는지?
renderList(loadData,"all");

function renderList(loadData,tabState) {
  if(loadData != null){
    for (let i = 0; i < Object.keys(loadData).length; i++) {
      todoView(loadData,Object.keys(loadData)[i],tabState);
    }
  }
}

// 1. input 입력  확인 버튼 클릭
const btnConfirm = document.getElementById("btnConfirm");
const inputEmpty = document.getElementById("todoFm");

btnConfirm.addEventListener('click',() => {
  if( inputEmpty.value == ""){
    alert('오늘의 할일을 입력해주세요!');
  }else{ //비어 있지 않다면?
    // 2. 값 저장한 todo add
    // 3.여러개 저장이 되는지?
    
    TodoService().addTodoFn(loadData);
  }
});


// 4.리스트 모양 출력 
// renderList()



// 5. 전체삭제기능
const btnClear = document.getElementById("btnClear");
btnClear.addEventListener('click',()=>{ 
  localStorage.clear();
});

// 5. 삭제, 완료기능
let todoList = document.getElementById("listBox");
todoList.addEventListener("click", function(e) {
  let btnTarget= e.target;
  let dataId= btnTarget.parentElement.getAttribute("data-id");

  if(btnTarget.innerText=="삭제"){
    TodoService().todoDelFn(loadData,dataId);
    btnTarget.parentElement.remove();
  } 
  if(btnTarget.innerText=="완료"){
    TodoService().completeTodoFn(loadData,dataId);
    let urlHash = location.hash;
    if(urlHash !== '#done'){
      btnTarget.parentElement.remove();
    }
  }
});


//6. 탭클릭시 카테고리에 맞는 데이터 렌더
  // - all 전체 리스트 뿌려주기
  // - doday 오늘날짜 확인비교
  // - done 완료 여부 확인
  let tabBtn = document.querySelector('#tabBtnAct ul');
  tabBtn.addEventListener('click', tabBtnHashchange);
  
  function tabBtnHashchange(e) {
    let tabTarget = e.target.hash;
    while(todoList.hasChildNodes()){
      todoList.removeChild(todoList.firstChild)
    }
    if(tabTarget === '#today'){
      renderList(loadData,"today")
    }else if(tabTarget === '#done'){
      renderList(loadData,"done")
    }else if(tabTarget === '#all'){
      renderList(loadData,"all")
    }
  }



// function doAsync() {
//   return new Promise((resolve, reject) => {
//     try {
      
//         resolve('결과!');
//       } catch (err) {
//         reject(err); // Error 객체
//     }
//   });
// }

// doAsync().then((result) => {
//   console.log(result); // '결과'
// }).catch((err) => {
//     console.log(err); // err.name, err.message
//   });
