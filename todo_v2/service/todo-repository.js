import { TodoService } from "./todo-service.js";
// import { TodoService } from "./service/todo-repository.js";


// mvvm
// model ? data 저장소, view를 모른다. -> 데이터만 있지 렌더링 관련된 게 하나도 없어야함



// Persistent Storage  : 레파지토리 기능이 뭐냐?
// interface TodoRepository {
//   // JSON.stringify(store) -> string -> setItem -> Promise
//   saveItems: (storageKey: string, data: TodoModel[]) => Promise<boolean>; // 성공 여부

//   // getItem -> JSON.parse -> JS Array -> Promise
//   loadItems: (storageKey: string) => Promise<TodoModel[]>;
// }



// TodoService().getAllTodos();
function TodoRepository() {
  
function loadItems() {
  return JSON.parse(localStorage.getItem('key'));
 }
 
 function saveItems(listData) {
  return localStorage.setItem('key', JSON.stringify(listData));
 }
  
  return{
    loadItemsfn:loadItems,
    saveItemsfn:saveItems
  }
  
}

export  { TodoRepository };

