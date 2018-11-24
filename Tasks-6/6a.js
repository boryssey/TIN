function convert() {
  let temp = document.getElementById('value1').value;
  let select = document.getElementById('selectTemp');
  let optionIndx = select.options[select.selectedIndex].value;

  if (optionIndx === 1) {
    document.getElementById('value2').value = (temp - 32) / 1.8;
  } else {
    document.getElementById('value2').value = temp * 1.8 + 32;
  }
  document.getElementById('value1').value = "";
}
