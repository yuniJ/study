import { setDateTime } from "../util/convert-date.js";
import { TodoRepository } from "./todo-repository.js";
// mvvm
// model ? data 저장소, view를 모른다. -> 데이터만 있지 렌더링 관련된 게 하나도 없어야함

// 서비스 : 데이터 사용되는 기능?


// interface TodoModel {
//   id: string;
//   title: string;
//   completed: boolean; // 완료 여부
//   createdAt: number; // Date.now() -> 1640928201888
// }



function TodoService(){
  // 함수 네이밍은 동사 + 명사

  // 생성한 후 store.push 그리고 생성한 모델 리턴
  function addTodo(listData) {
    
    // 만들어진 데이터 넣기
    const newID = function () {
      return Math.random().toString(36).substr(2, 16);
    }

    const setTime = setDateTime(); 
    const inputFm = document.getElementById("todoFm");
    const inputTxt = inputFm.value;

    let toDoData = {}
    
    toDoData[newID()] = {
        // toDoData.toDoId = newID();,
        toDoTxt : inputTxt,
        toDoDate : setTime,
        toDoDone : false
    }
    
    Object.assign(toDoData, listData);
    TodoRepository().saveItemsfn(toDoData);
    
  }

  // store 복제 해서 리턴 -> 그냥 리턴하면 참조로 전달 -> 원본까지 변경될 수 있음

  // getAllTodos: () => TodoModel[];
  // function getAllTodos(params) {
  //   return params;
  // }

  // store에서 id에 맞는 todo를 찾은 후 지우고. 성공 여부 리턴
  function todoDel(listData,dataKey) {
    delete listData[dataKey]
    // localStorage.setItem('key', JSON.stringify(listData));
    TodoRepository().saveItemsfn(listData)
    if(!listData[dataKey]){
      return true
    }
  }

  // 완료 여부
  function completeTodo(listData,dataKey) {
    listData[dataKey].toDoDone=true;
    // localStorage.setItem('key', JSON.stringify(listData));
    TodoRepository().saveItemsfn(listData)
    if(listData[dataKey].toDoDone){
      return true
    }
  }
  
  return {
    addTodoFn : addTodo,
    todoDelFn : todoDel,
    completeTodoFn : completeTodo
  }
}

export { TodoService };
