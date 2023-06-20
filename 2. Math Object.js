//a
function array(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += Math.pow(a[i], 2);
  }
  return Math.sqrt(sum);
}


let store = array([1,2,3,4,5])
//b
console.log(store);