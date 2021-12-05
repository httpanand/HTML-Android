function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let d = today.getDate();
  
  m = checkTime(m);
  document.getElementById('time').innerHTML =  h + ":" + m;
  setTimeout(startTime, 1000);
  document.getElementById('time2').innerHTML = h + ":" + m;
  document.getElementById('date').innerHTML = d + " December " + "2021";
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}
