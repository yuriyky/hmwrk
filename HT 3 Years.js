
 const PromtUserAge = prompt ("Вказати вік", "" )
let UserAge = PromtUserAge
let count = UserAge % 10 
let AgeString = "" 

if (UserAge < 0 ) {
    AgeString = "помилка"
 console.log ( AgeString)
}  

if (count === 0) {
    AgeString = "років"
    console.log (UserAge + ""+ AgeString)
} 
// [11 - 19]  
 
else if (UserAge >=11 && UserAge <= 19) {
    AgeString = "років"
    console.log (UserAge + AgeString)
} 



// 21 31 41 51 61 71 81 91 - pik 

else if (UserAge > 11 && count === 1) { 
    AgeString = "ріk"
    console.log (UserAge + AgeString)
} 

//  >19 >=2 && <=4 рokи

else if (UserAge > 19 && count >=2 && count<=4) 
{
    AgeString = "рokи"
    console.log (UserAge + AgeString)
} 


//  else if (count >=5 && count<=9) років

else if (count >=5 && count<=9) 
{
    AgeString = "років"
    console.log (UserAge + AgeString)
} 


