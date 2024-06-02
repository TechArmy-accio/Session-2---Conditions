// Take an integer and return "YES" if the input is divisible by 3 or 5 or both. "NO" in all other cases


let a = 45

if(a%3==0 || a%5==0){
    console.log("YES")
}
else{
    console.log("NO")

}

// let ans = a%3==0 || a%5==0 || (a%3==0 && a%5==0)

// 50/3 = 16.666666666666668
// 51/3 = 17

// 51, 3 => rem =>0