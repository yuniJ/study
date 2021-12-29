function clickCheck(listTxt) {
  listTxt.classList.add('del');
  
}

function clickDel(list) {
  list.remove();
}

export {clickCheck, clickDel};