function setDateTime() {
  // 유저 시간 값
  var setTime = new Date();
  var year = setTime.getFullYear();
  var month = setTime.getMonth() + 1;
  var date = setTime.getDate();
  return year + "년" + month + "월" + date + "일";
}

export { setDateTime };
