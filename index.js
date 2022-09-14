let billamount = document.getElementById('billAmt');
let service = document.getElementById('serviceQual');
let button = document.getElementById('calculate');
let numberofpeople = document.getElementById('numOfPeople');

button.addEventListener('click', () => {
  let a = billamount.value;
  let b = service.value;
  let c = numberofpeople.value;

  if (a === '') {
    alert('please enter value'); //if billamount or service is not selected
    console.log('enter value');
    return;
  }
  if (b == 0) {
    alert('please select the service');
  }

  if (c === '' || c < 2) {
    //checking if number of people is empty or less than 2
    c = 1;
  }

  let total = (a * b) / c;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById('tip-each').innerHTML = `RS ${total} Each`;
});
