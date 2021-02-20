
'use-strict';

let score =0;
console.log(score);


let userName = prompt ( ' What is your name? ' );
alert('welcome ' + userName);





const firstQ = function () {
  let myName = prompt ('My name is Wafa? yes/no ');
  myName = myName.toLocaleLowerCase(); myName.toLocaleUpperCase();


  switch (myName) {
  case 'y':
  case 'yes':
    alert('Right answer ♥');
    score++;
    break;
  case 'n':
  case 'no':
    alert('I am really Wafa');
    break;
  default:
    alert('You must write y or n');
    break;
  }
  return myName;
};

firstQ ();



function secondQ (){
  let favDish = prompt ('Do I like pizza ? y/n');
  favDish = favDish.toLocaleLowerCase(); favDish.toLocaleUpperCase();


  switch (favDish) {
  case 'y':
  case 'yes':
    alert('Right, pizza is my favorite dish');
    score++;
    break;
  case 'n':
  case 'no':
    alert('Ops, I love pizza so much');
    break;
  default:
    alert('You must write y or n');
    break;
  }
}
secondQ ();


const thirdQ = function () {
  let favColor = prompt ('I love dark colours? y/n');
  favColor = favColor.toLocaleLowerCase(); favColor.toLocaleUpperCase();


  switch (favColor) {
  case 'y':
  case 'yes':
    alert('No, not exactly .. I like lightly colours more');


    break;
  case 'n':
  case 'no':
    alert('Yes, how do you know that ');
    score++;
    break;
  default :
    alert('You must write y or n');
    break;
  }
};
thirdQ();


function forthQ () {
  let artLove = prompt ('Do I like drawing and art? y/n ');
  artLove = artLove.toLocaleLowerCase(); artLove.toLocaleUpperCase();


  switch (artLove) {
  case 'y':
  case 'yes':
    alert('Yes, I am fond of everything related to art ');
    score++;

    break;
  case 'n':
  case 'no':
    alert(' Just the opposite :( ');
    break;
  default:
    alert('You must write y or n');
    break;
  }
}
forthQ ();

const fifthQ = function () {
  let loveMe = prompt ('Do you love me ? yes or no ');
  loveMe = loveMe.toLocaleLowerCase(); loveMe.toLocaleUpperCase();


  switch (loveMe) {
  case 'yes':
  case 'y':
    alert('I love you toooo ♥ ');
    score++;

    break;
  case 'no':
  case 'n':
    alert(' Broken heart </3 ');
    break;
  default:
    alert('You must write yes or no');
    break;
  }
};
fifthQ ();

alert('Thank you ' + userName + ' for your visiting ♥');











function sixthQ (){
  let q1=0;
  for (let i=0 ;i < 4 ; i++)
  {
    q1 = prompt('How many siblings do I have?');
    if (Number(q1) > 4) {

      alert('too high');

    }
    else if (Number(q1) < 4) {

      alert('too low');

    }
    else if (Number(q1) === 4){
      alert('right answer');
      score++;

      break;
    }
    else {
      alert('please put a number');
    }


  }

  alert('The correct answer is 4');
}
sixthQ ();





const seventhQ = function () {
  let arr1 = ['black' , 'pink', 'grey'];
  for (let i=0; i < 6 ; i++){
    let q2 = prompt('what is my favorite color?');
    q2 = q2.toLocaleLowerCase(); q2.toLocaleUpperCase();

    if( q2 === arr1[0] || q2 === arr1[1] || q2 === arr1[2] ) {
      alert('correct');
      score++;



      break;

    }
    else {alert('try again');
    }
  }

  alert('the correct answer : black,pink &grey');

  alert('your mark is ' + score + ' from 7');

};
seventhQ ();

