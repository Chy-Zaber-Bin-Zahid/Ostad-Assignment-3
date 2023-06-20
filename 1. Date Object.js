//a
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function date(d){
  let date = new Date(d).getDay()
  return date


}
let storeDate = date("2023-06-13")
//b
console.log(weekday[storeDate]);