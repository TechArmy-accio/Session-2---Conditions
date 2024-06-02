// Take a 3 digit integer, print "YES" if the reversed integer is equal to the input. Print "NO" otherwise.
// let a = 154

// let last  = a%10  //  4

// let remainingDigits =  parseInt(a/10) // 15

// let secondLast = remainingDigits%10  //  5 

// let first = parseInt(remainingDigits/10) // 1

// let reversedNumber = last*100 +secondLast*10 + first 

// // 145 

// if(a == reversedNumber){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }




// 154 =>451

// let a = 154

// let last  = a%10  //  4
// let first = parseInt(a/100) // 1.54
// if(last == first){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }

let a = 154

let last = a%10 //  4
let remaining = parseInt(a/10) // 15 

let secondLast = remaining%10 // 5
let first = parseInt(a/100) // 1


let reverse = last*100+ secondLast*10 +first