let firstNum = "";
let secondNum = "";
let result = "";
const nums = document.querySelectorAll(".nums");
const disNum = document.querySelector(".disNum");

const operators = document.querySelectorAll(".operation");
let operator = "";

const btnEqual = document.querySelector(".btnEqual");
const btnReset = document.querySelector(".btnReset");
const btnDel = document.querySelector('.btnDel')


///for displaying numbers
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    if (firstNum && operator && result) {
      secondNum += nums[i].value;
      disNum.textContent = secondNum;
    } else if (firstNum && operator) {
      secondNum += nums[i].value;
      disNum.textContent = secondNum;
    } else {
      firstNum += nums[i].value;
      disNum.textContent = firstNum;
    }
  });
}




//////////operation func
const operateFunc = function () {
  if (operator === "+") {
    result = +firstNum + +secondNum;
  } else if (operator === "-") {
    result = firstNum - secondNum;
  } else if (operator === "*") {
    result = firstNum * secondNum;
  } else if (operator === "/") {
    result = firstNum / secondNum;
  }
  disNum.textContent = result;
  firstNum = result;
  secondNum = "";
};

////PLUS
let action = function (operate) {
  if(firstNum && secondNum && operator) {
    operator = operate;
    operateFunc()
    console.log("operator: ", operator);
  }
  if (firstNum && !secondNum) {
    operator = operate;
    console.log("operator: ", operator);
  }
};

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    action(operators[i].value);
  });
}

/////////BTN-EQUAL
btnEqual.addEventListener("click", function () {
  if (secondNum) {
    operateFunc();

  }
  console.log("firstNumber: ", firstNum);
  console.log("secondNumber: ", secondNum);
  console.log("result: ", result);

  // if (secondNum && result) {
  //   firstNum = result
  //   operator = ''
  //   operateFunc()

  // }else
});

//////BTN Reset

btnReset.addEventListener("click", function () {
  disNum.textContent = "0";
  firstNum = "";
  secondNum = "";
  operator = "";
});


// BTN DELETE 
btnDel.addEventListener('click', function(){
  console.log("firstNum: ", firstNum)
  console.log("secondNum: ", secondNum)
  console.log(disNum.textContent)
  if(disNum.textContent === firstNum && !secondNum) {
    
    disNum.textContent = disNum.textContent.slice(0, -1)
    firstNum = disNum.textContent
  } else if (disNum.textContent === secondNum) {
    console.log("click")
    disNum.textContent = disNum.textContent.slice(0, -1)
    secondNum = disNum.textContent
  } else if (disNum.textContent === result){
    disNum.textContent = ''
    firstNum = ''
    secondNum = ''
    operator = ''
  }


})
///////////Theme Changing

const theme1 = document.querySelector('.theme1')
const theme2 = document.querySelector('.theme2')
const theme3 = document.querySelector('.theme3')
const redDot = document.querySelector('#redDot')

const body = document.querySelector('body')
const display = document.querySelector('.display')
const actionBox = document.querySelector('.actionBox')


const colorChange = function(array, theme){
  for (let i=0; i<array.length; i++){
    if(theme===theme3){
      array[i].style.backgroundColor = '#331C4D'
      array[i].style.color = 'yellow'
      array[i].addEventListener('mouseover', function(){
        array[i].style.backgroundColor = '#6C34AC'
        setTimeout(()=>{
          array[i].style.backgroundColor = '#331C4D'

        },2000)
   
      })
      ///shadow
      array[i].style.borderBottom = '5px solid #8631AF'
    }else if (theme === theme2 || theme1){
      array[i].style.backgroundColor = '#EAE3DC'
      array[i].style.color = 'black'
      array[i].style.borderBottom = '1px solid black'
      array[i].addEventListener('mouseover', function(){
        array[i].style.backgroundColor = '#fff'
        setTimeout(()=>{
          array[i].style.backgroundColor = '#EAE3DC'

        },1000)
   
      })
    }
      
  }
}
theme1.addEventListener('click', function(){
  redDot.classList.remove('dot-theme2','dot-theme3')
  
  body.style.backgroundColor = '#3A4663'
  body.style.color = '#fff'
  display.style.backgroundColor = '#181F33'
  actionBox.style.backgroundColor = '#242D44'
  btnDel.style.backgroundColor = '#647198'
  btnReset.style.backgroundColor = '#647198'
  btnEqual.style.backgroundColor  = '#D03F2F'
  btnEqual.style.color  = '#fff'
  colorChange(nums,theme1)
  colorChange(operators, theme1)
})

theme2.addEventListener('click', function(){
  redDot.classList.remove('dot-theme3')
  redDot.classList.add('dot-theme2')
  body.style.backgroundColor = '#E3E0E0'
  body.style.color = 'black'
  display.style.backgroundColor = '#EEEEEE'
  actionBox.style.backgroundColor = '#D2CDCD'
  btnDel.style.backgroundColor = '#378187'
  btnReset.style.backgroundColor = '#378187'
  colorChange(nums,theme2)
  colorChange(operators, theme2)
  btnEqual.style.backgroundColor  = '#D03F2F'
  btnEqual.style.color  = '#fff'

})
  
 
  

theme3.addEventListener('click', function(){
  redDot.classList.add('dot-theme3')
  body.style.backgroundColor = '#331C4D'
  body.style.color = 'yellow'
  display.style.backgroundColor = '#1E0936'
  actionBox.style.backgroundColor = '#1E0936'
  btnDel.style.backgroundColor = '#56077C'
  btnReset.style.backgroundColor = '#56077C'
  btnEqual.style.backgroundColor  = '#00DED0'
  btnEqual.style.color  = 'black'
  colorChange(nums,theme3)
  colorChange(operators, theme3)
})


