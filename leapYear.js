
// year  4 => leap 

// 2100 => not leap year , 400 => leap year


// let year = 2024

// //   year%4==0 && year %100 !=0


// //   year%4==0 && year%100==0 && year%400==0


// if( (year%4==0 && year %100 !=0) ||
//   ( year%4==0 && year%100==0 && year%400==0)
// ){
//     console.log("Leap Year")
// }
// else{
//     console.log("Not a leap year")
// }


let year = 2100

if(year%4 == 0){
   
     if(year%100 !=0){
        console.log("Leap Year 1")
     }
     else if(year %100 == 0){
           if(year%400 == 0){
               console.log("Leap Year 2")
           }
           else{
               console.log("Not a leap year 3")
           }
     }

}

else{
    console.log("Not a leap year 4")
}