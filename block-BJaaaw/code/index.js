// // if..else

// /*
// 1. Write a program that asks the user for a number and check the following conditions:

//   - `if` the number is even print the message " number is even"
//   - `if` the number is odd print the message "number is odd"
// */
let number1 =  24;
if ( number1 %2 === 0){
alert("number is even")
}
let number2 =  23;
if ( number2 % 2 != 0 ){
alert("number is odd")
}


// // // 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = +prompt("Enter num1");
let num2 = +prompt("enter num2");

if(num1 > num2){
    alert(`${num1} is greater number`)
} else {
    alert(`${num2} is a greater number`)
}


// // // 3. Convert the above code using`?` terniary operator

let numa = +prompt("Enter numa");
let numb = +prompt("enter numb");
 
numa > numb ? alert(`${numa}is greater then numb`) : alert(`${numb} greater then numa`);

 


// // /*
// // 4. Write a program that asks the user for the house name and check the following conditions:

// //   - `if` house name is "stark" then print the message " Winter is coming"
// //   - `if` house name is "lannister" then print the message " A lannister always pays his debt"
// //   - `else` print the message " All men must die"
// // */
  let houseName = prompt("enter house name");
  if(houseName==="stark"){
    alert("winter is comming")

  }
  else if(houseName==="lannister"){
    alert("A lannister always pays his debt")
  }
  else{
    alert("All men must die")
  };
  



// // 5. Convert the above code using`?` terniary operator
//      let houseName1 = prompt("enter house name");
//      houseName1=="stark" ? alert("winter is comming"): alert("all men must die");
//      let houseName2 = prompt("enter house name");
//      houseName2=="lannister" ? alert("A lannister always pays his dept"): alert("all men must die");


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month=prompt('enter month number');
switch (Number(month)){
    case 1:
alert('it has 31 days')
break;
    case 2:
alert('it has 28')
break;
case 3:
alert('it has 31')
break;
case 4:
alert('it has 30')
break;
case 5:
alert('it has 31')
break;
case 6:
alert('it has 30')
break;
case 7:
alert('it has 31')
break;
case 8:
alert('it has 31')
break;
case 9:
alert('it has 30')
break;
case 10:
alert('it has 31')
break;
case 11:
alert('it has 30')
break;
case 12:
alert('it has 31')
break;
    default:
alert("invalid")
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salery = prompt("in hand amount");
if(salery <= "20000"){
  alert(salery-((salery*10) /100));
 }
 else if(salery <= "40000"){
  alert(salery-((salery*20) /100));
}
else if(salery > "50000"){
  alert(salery-((salery*30) /100));
}
else {
  alert(`Enter valid input`);
}









//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marksA = prompt("100");           
  if (marksA > 100){
  alert("marks can't be greater than 100");
}
else if (marksA > 80 && marksA < 100 ){
  alert(`"Grade A"`)
}
else if (marksA > 50 && marksA < 80 ){
  alert("Grade B")
}
else if (marksA > 30 && marksA < 50 ){
  alert("Grade C")
}
else if (marksA > 0 ){
  alert("Grade D")
}

let marksB = +prompt('enter marks');

switch( true ){
 case (marksB > 100):
 alert("marks can't be greater than 100");
 break;
case (marksB > 80 && marksB < 100) :
 alert("Grade A");
 break;
 case (marksB > 50 && marksB < 80) :
 alert("Grade B");
 break;
 case (marksB > 30 && marksB < 50) :
 alert("Grade C");
 break;
 case (marksB > 0 ) :
 alert("Grade D");
 break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("what is the weather like outside")
if (weather==='sunny'){
  alert("wear a t-shirt")
 }
 else if (weather==='rainy'){
 alert("don't forget to take your raincoat")
 }
 else if (weather==='hot'){
  alert("get a hanky")
 }
 else if (weather==='freezing'){
  alert("grt your sweeter on")
 }
 else{
  alert('nothing')
 }
