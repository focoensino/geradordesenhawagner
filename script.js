const inputpassword = document.querySelector('#password')


const inputlength = document.querySelector('#password-length')

const uppercaseCheckEl = document.querySelector('#uppercase-check')
const numberCheckEl = document.querySelector('#number-check')
const simbolCheckEl = document.querySelector('#simbol-check')

const securityIndicatorBarEl = document.querySelector('#security-indicator-bar')


document.querySelector('#copy-1').addEventListener('click',copy)
document.querySelector('#copy-2').addEventListener('click',copy)

document.querySelector('#reload').addEventListener('click',generatePassword)
document.querySelector('#reload').addEventListener('click',generatePassword)



 
let inputlengthvalue = 16


function generatePassword(){
let chars = 'abcdefghjkmnpqrstuvwxyz'
  

const uppercasehChar = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
const numberChar = '123456789'
const simbolChar = '?!@&*()[]'

if( uppercaseCheckEl.checked ){
 chars += uppercasehChar

}

if( numberCheckEl.checked){
 chars += numberChar

}

if( simbolCheckEl.checked ){
chars += simbolChar


}


let Password = ''

for(let i = 0; i < inputlengthvalue; i++){

const randomNumber = Math.floor( Math.random()* chars.length)

Password += chars.substring(randomNumber,randomNumber+1)

}

inputpassword.value=Password

calculateQuality()
calculateFontSize()

}


function calculateQuality(){
const percent = Math.round((inputlengthvalue / 64)*25  +(uppercaseCheckEl.checked ?15: 0) + (numberCheckEl.checked ? 25 : 0)  +
(simbolCheckEl.checked ? 35 : 0) )
securityIndicatorBarEl.style.width = `${percent}%`

if(percent > 70){
 securityIndicatorBarEl.classList.add('safe')
 securityIndicatorBarEl.classList.remove('warning')
 securityIndicatorBarEl.classList.remove('critical')

} else if(percent > 50){
securityIndicatorBarEl.classList.remove('critical')
securityIndicatorBarEl.classList.add('warning')
securityIndicatorBarEl.classList.remove('safe')
}else{
securityIndicatorBarEl.classList.add('critical')
securityIndicatorBarEl.classList.remove('safe')
securityIndicatorBarEl.classList.remove('warning')

}

if(percent >= 100){
securityIndicatorBarEl.classList.add('completed')

}else{
securityIndicatorBarEl.classList.remove('completed')

}



  }

function calculateFontSize(){

if(inputlengthvalue > 45){ 

inputpassword.classList.add('font-xs')
inputpassword.classList.remove('font-sm')
inputpassword.classList.remove('font-md')



}else if (inputlengthvalue > 30){

    inputpassword.classList.add('font-sm')
    inputpassword.classList.remove('font-xs')
    inputpassword.classList.remove('font-md')

}else if (inputlengthvalue > 20){
    inputpassword.classList.add('font-md')
    inputpassword.classList.remove('font-xs')
    inputpassword.classList.remove('font-sm')

  }else  {

  inputpassword.classList.remove('font-md')
  inputpassword.classList.remove('font-xs')
  inputpassword.classList.remove('font-sm')

  }

}


uppercaseCheckEl.addEventListener('click',generatePassword)
numberCheckEl.addEventListener('click',generatePassword)
simbolCheckEl.addEventListener('click',generatePassword)


function copy(){

navigator.clipboard.writeText(inputpassword.value)

}




inputlength.addEventListener('input',function(){

inputlengthvalue = inputlength.value  
generatePassword()
calculateQuality()
document.querySelector('#password-length-text').innerText = inputlengthvalue




}  )

generatePassword()
calculateQuality()