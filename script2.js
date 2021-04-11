document.write("This is Luuuooo's website:)");

document.body.style.backgroundImage = "URL(background.jpg)";

function f(){
  var college = prompt("Welcome to Hogwarts!Which college do you want to join?\nGryffindor,Hufflepuff,Ravenclaw or Slytherin?");
 alert("That's perfect choice for you!Before you officially join " + college + "\n, please finish the puzzles below as a warm-up!");
};

function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if(x == "")  throw ("Your answer is null.");
        if(isNaN(x)) throw ("The type of your answer is a number.");
        x = Number(x);
        if(x == 4800)    throw("Correct!");
        if(x > 4800)   throw("Incorrect!");
        if(x < 4800)   throw("Incorrect!");
    }
    catch(err) {
        message.innerHTML = "Result: " + err;
    }
};

function myFunction2() {
    var message2, y;
    message2 = document.getElementById("message2");
    message2.innerHTML = "";
    y = document.getElementById("demo2").value;
    try {
        if(y == "")  throw ("Your answer is null.");
        if(isNaN(y)) throw ("The type of your answer is not a number.");
        y = Number(y);
        if(y == 41)    throw("Correct!");
        if(y > 41)   throw("Incorrect!");
        if(y < 41)   throw("Incorrect!");
    }
    catch(err) {
        message2.innerHTML = "Result: " + err;
    }
};

function myFunction3() {
    var message3, z;
    message3 = document.getElementById("message3");
    message3.innerHTML = "";
    z = document.getElementById("demo3").value;
    try {
        if(z == "")  throw ("Your answer is null.");
        if(isNaN(z)) throw ("The type of your answer is not a number.");
        z = Number(z);
        if(z == 90)    throw("Correct!");
        if(z > 90)   throw("Incorrect!");
        if(z < 90)   throw("Incorrect!");
    }
    catch(err) {
        message3.innerHTML = "Result: " + err;
    }
};

function f1(){
  var response = prompt("Q1:What is clean when it is black and dirty when it is white?(lowercase form)")
  if(response === "blackboard"){
    alert("Congratulations!You are right!");}
  else{
    alert("Sorry,your answer is incorrect.Please try again.");
  }
};



  function f2(){
    var response2 = prompt("Q2:Which letter is an animal?(uppercase form)")
    if(response2 === "B"){
      alert("Congratulations!You are right!");}
    else{
      alert("Sorry,your answer is incorrect.Please try again.");
    }
  };

     function f3(){
       var response3 = prompt("Q3:Which letter is a question?(uppercase form)")
       if(response3 === "Y"){
         alert("Congratulations!You are right!");}
       else{
         alert("Sorry,your answer is incorrect.Please try again.");
       }
     };

       function f4(){
         var response4 = prompt("Q4:Which letter is a part of your body?(uppercase form)")
         if(response3 === "I"){
           alert("Congratulations!You are right!");}
         else{
           alert("Sorry,your answer is incorrect.Please try again.");
         }
       };

         function f5(){
           var response5 = prompt("Q5:What changes a pear into a pearl?(a letter,uppercase form)")
           if(response5 === "L"){
             alert("Congratulations!" + "\n" + "You've finished all the puzzles!\nStart your happy and magical life at school now!");}
           else{
             alert("Sorry,your answer is incorrect.Please try again.");
           }
         };
