// Take a number anc check if it is decimal number or not

let n = 12.5

// parseInt(12.5) => 12 
// parseInt(12) => 12

let p = parseInt(n) // 12 

if(n == p){
    console.log("Its not a decimal number")
}
else if(n!=p){
    console.log("Its a decimal number")
}