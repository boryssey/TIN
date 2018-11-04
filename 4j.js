function binSearch(arr, num) {
  arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
console.log("index of number 24 in array [10, 2, 24, 25, 12, 100] = " + binSearch([10, 2, 24, 25, 12, 100], 24));
