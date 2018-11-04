function secondLowestGreatest(arr){
  arr = arr.sort();
  return [arr[1], arr[arr.length-2]];
}
console.log(secondLowestGreatest([3,1,2,5,8]));
