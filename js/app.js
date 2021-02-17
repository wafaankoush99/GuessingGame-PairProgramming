/* eslint-disable indent */

'use-strict';

let score =0;
console.log(score);


let userName = prompt ( ' What is your name? ' );
//console.log(userName);
alert('welcome ' + userName);






const firstQ = function () {
  let myName = prompt ('My name is Wafa? yes/no ');
  ///console.log(favDish);
  myName = myName.toLocaleLowerCase(); myName.toLocaleUpperCase();


  switch (myName) {
  case 'y':
  case 'yes':
    //console.log('Right, pizza is my favorite dish');
    alert('Right answer ♥');
    score++;
    break;
  case 'n':
  case 'no':
    //console.log('Ops, I love pizza so much');
    alert('I am really Wafa');
    break;
  default:
    //console.log('You must write y or n')
    alert('You must write y or n');
    break;
  }
  return myName;
};

firstQ ();



function secondQ (){
  let favDish = prompt ('Do I like pizza ? y/n');
  ///console.log(favDish);
  favDish = favDish.toLocaleLowerCase(); favDish.toLocaleUpperCase();


  switch (favDish) {
  case 'y':
  case 'yes':
    //console.log('Right, pizza is my favorite dish');
    alert('Right, pizza is my favorite dish');
    score++;
    break;
  case 'n':
  case 'no':
    //console.log('Ops, I love pizza so much');
    alert('Ops, I love pizza so much');
    break;
  default:
    //console.log('You must write y or n')
    alert('You must write y or n');
    break;
  }
}
secondQ ();


const thirdQ = function () {
  let favColor = prompt ('I love dark colours? y/n');
  //console.log(favColor);
  favColor = favColor.toLocaleLowerCase(); favColor.toLocaleUpperCase();


  switch (favColor) {
  case 'y':
  case 'yes':
    //console.log('No, not exactly .. I like lightly colours more');
    alert('No, not exactly .. I like lightly colours more');


    break;
  case 'n':
  case 'no':
    //console.log('Yes, how do you know that ');
    alert('Yes, how do you know that ');
    score++;
    break;
  default :
    //console.log('You must write y or n')
    alert('You must write y or n');
    break;
  }
};
thirdQ();


function forthQ () {
  let artLove = prompt ('Do I like drawing and art? y/n ');
  //console.log(artLove);
  artLove = artLove.toLocaleLowerCase(); artLove.toLocaleUpperCase();


  switch (artLove) {
  case 'y':
  case 'yes':
    //console.log('Yes, I am fond of everything related to art ');
    alert('Yes, I am fond of everything related to art ');
    score++;

    break;
  case 'n':
  case 'no':
    //console.log(' Just the opposite :( ');
    alert(' Just the opposite :( ');
    break;
  default:
    //console.log('You must write y or n')
    alert('You must write y or n');
    break;
  }
}
forthQ ();

const fifthQ = function () {
let loveMe = prompt ('Do you love me ? yes or no ');
//console.log(loveMe);
loveMe = loveMe.toLocaleLowerCase(); loveMe.toLocaleUpperCase();


switch (loveMe) {
case 'yes':
case 'y':
  //console.log('I love you toooo ♥ ');
  alert('I love you toooo ♥ ');
  score++;

  break;
case 'no':
case 'n':
  //console.log(' Broken heart </3 ');
  alert(' Broken heart </3 ');
  break;
default:
  //console.log('You must write yes or no');
  alert('You must write yes or no');
  break;
}
};
fifthQ ();

alert('Thank you ' + userName + ' for your visiting ♥');











function sixthQ (){
let q1=0;
//console.log('ask user about my siblings' + q1);
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
//console.log('ask user about favorite color' + arr1);
for (let i=0; i < 6 ; i++){
  let q2 = prompt('what is my favorite color?');
  q2 = q2.toLocaleLowerCase(); q2.toLocaleUpperCase();

  if( q2 === arr1[0] || q2 === arr1[1] || q2 === arr1[2] ) {
    alert('correct');
    score++;


    console.log(score);

    break;

  }
  else {alert('try again');
  }
}

alert('the correct answer : black,pink &grey');

alert('your mark is ' + score + ' from 7');

};
seventhQ ();
