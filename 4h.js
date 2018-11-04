function secondLowestGreatest(arr){
  arr = arr.sort();
  return [arr[1], arr[arr.length-2]];
}
console.log("second lowest and second greatest of [3,1,2,5,8] = " + secondLowestGreatest([3,1,2,5,8]).toString());
