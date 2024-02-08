//declaration and initialization of constants
const inputScreen = document.getElementById("output-value");
const resultOfOperation = document.getElementById("resultant");
const clearButton = document.getElementById("clear");
const squareRootButton = document.getElementById("squareRoot");
const percentageSign = document.getElementById("percentage");
const powerButtonOnOff = document.getElementById("onOff");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const minus = document.getElementById("minus");
const equal = document.getElementById("equal");
const plus = document.getElementById("plus");
const division = document.getElementById("division");
const multiply = document.getElementById("multiply");


// End of contants keys


//object for keybutton values

/*   
   This is aryy and objects is meant to have information i'll use for configuring 
   button operations.  
*/

const arrayOfObjectKeys = [
     //fnctional buttons
    {
        name: clearButton,
        "button value": "clear",
        "button id": "clear",
       "button function": clearFunct,
        "button text": "clear",
    },
    {
        name : squareRootButton,
        "button value": "square Root operator",
        "button id": "squareRoot",
    //    "button function": squareRootFunct,
        "button text": "&sqrt;",
    },
    {
        name: percentageSign,
        "button value": "percantage operator",
        "button id": "percentage",
      //  "button function": percentageFunct,
        "button text": "%"
    },
    {
        name: powerButtonOnOff,
        "button value": "On/Off",
        "button id": "onOff",
       "button function": powerBtnFunc,
        "button text": "On/Off",
    },
    //bellow is the four index
    //for the numbers


    {
        name: one,
        "button value": 1,
        "button id": "one",
        "button text": "1",
    },
    {
        name: two,
        "button value": 2,
        "button id": "two",
        "button text": "2",
    },
    {
        name: three,
        "button value": 3,
        "button id": "three",
        "button text": "3",
    },
    {
        name: four,
        "button value": 4,
        "button id": "four",
        "button text": "4",
    },
    {
        name: five,
        "button value": 5,
        "button id": "five",
        "button text": "5",
    },
    {
        name: six,
        "button value": 6,
        "button id": "six",
        "button text": "6",
    },
    {
        name: seven,
        "button value": 7,
        "button id": "seven",
        "button text": "7",
    },
    {
        name: eight,
        "button value": 8,
        "button id": "eight",
        "button text": "8",
    },
    {
        name: nine,
        "button value": 9,
        "button id": "nine",
        "button text": "9",
    },
    {
        name: zero,
        "button value": 0,
        "button id": "zero",
        "button text": "0",
    },

    //arithmetic operators
    {
        name : minus,
        "button value": "-",
        "button id": "minust",
   //     "button function": minusButtonFunc,
        "button text": "-",
    },
    {
        name : equal,
        "button value": "=",
        "button id": "equal",
   //     "button function": equalButtonFunc,
        "button text": "&sqrt;",
    },
    {
        name : plus,
        "button value": "+",
        "button id": "plus",
    //    "button function": plusButtonFunc,
        "button text": "+;",
    },
    {
        name : division,
        "button value": "/",
        "button id": "division",
      //  "button function": divisionButtonFunc,
        "button text": "/",
    },
    {
        name : multiply,
        "button value": "*",
        "button id": "multiply",
   //     "button function": multiplyButtonFunc,
        "button text": "*",
    },
];

//special function buttons

powerButtonOnOff.addEventListener("click", powerBtnFunc)

function powerBtnFunc() {
    
    if(inputScreen.style.visibility === "hidden") {
        inputScreen.style.visibility = "visible";
    } else {
        inputScreen.style.visibility = "hidden";
    }
    console.log(arrayOfObjectKeys[3]["button text"])
    clearFunct()
}

function rejectOperation() {
        if(inputScreen.style.visibility === "hidden") {
            inputScreen.innerText = 0;
        }

}

clearButton.addEventListener("click",clearFunct)

function clearFunct() {
    inputScreen.innerText = arrayOfObjectKeys[13]["button text"];
}

//end of function buuttons

//numerals
//event listners for numetal buttons
one.addEventListener("click", ()=> {
    inputScreen.innerText += arrayOfObjectKeys[4]["button value"];
    rejectOperation();
})
two.addEventListener("click", ()=>{
    inputScreen.innerText += arrayOfObjectKeys[5]["button value"];
    rejectOperation();
})
three.addEventListener("click", ()=>{
    inputScreen.innerText += arrayOfObjectKeys[6]["button value"];
    rejectOperation()
})
four.addEventListener("click", ()=>{
    inputScreen.innerText += arrayOfObjectKeys[7]["button value"];
})
five.addEventListener("click", ()=>{
    inputScreen.innerText += arrayOfObjectKeys[8]["button value"];
})
six.addEventListener("click", ()=> {
    inputScreen.innerText += arrayOfObjectKeys[9]["button value"];
})

seven.addEventListener("click", ()=>{
    inputScreen.innerText += arrayOfObjectKeys[10]["button value"];
})
eight.addEventListener("click", ()=>{
    inputScreen.innerText += arrayOfObjectKeys[11]["button value"];
})
nine.addEventListener("click", ()=>{
    inputScreen.innerText += arrayOfObjectKeys[12]["button value"];
})
zero.addEventListener("click", ()=> {
    inputScreen.innerText += arrayOfObjectKeys[13]["button value"];
})

//events for aritmatic operators
minus.addEventListener("click", ()=> {
    inputScreen.innerText += arrayOfObjectKeys[14]["button value"];
})
equal.addEventListener("click", ()=> {
   // inputScreen.innerText += arrayOfObjectKeys[15]["button value"];

   //I need code that will perfom operations when i run this code bloc.
   
   let output = inputScreen.innerText.split("");
       output.shift();
      // output.sort(); //commented out for testing the loop
      // output.shift();
       //output.toString();
       //let answer = parseInt(output[0]) + parseInt(output[1])
       let answer;
       for(let i = 0; i < output.length; i++ ) {
        /*
          with the randomIndex variable I am trying to
          create randomnes for when i try to input 
          different arithmatic operators in the calculator

          This loop is suppod to handle arithmatic operations
        */
        let randomIndex = Math.floor(Math.random() * output.length);
          if(output[randomIndex] === "+") {
                   output.shift();
                   answer = parseInt(output[randomIndex]) + parseInt(output[randomIndex])
          }else if(output[randomIndex] === "*") {
                   output.shift();
                   answer = parseInt(output[randomIndex]) * parseInt(output[randomIndex]);
          }
       }

       

   console.log(answer)
  // return answer
   
})
plus.addEventListener("click", ()=> {
    inputScreen.innerText += arrayOfObjectKeys[16]["button value"];
})
division.addEventListener("click", ()=>{
    inputScreen.innerText += arrayOfObjectKeys[17]["button value"];
})
multiply.addEventListener("click", ()=>{
    inputScreen.innerText += arrayOfObjectKeys[arrayOfObjectKeys.length - 1]["button value"]
})
//end of event handles....

//