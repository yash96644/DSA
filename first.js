// let a = 20;
// let b = 20;

// console.log(a + b);


// console.log("sum of 20 and 20 is" + (a + b));


// console.log("1" * 1);  // type corusion


// let age = + prompt("Enter your age");
// console.log(age);

// type casting

// let a = 20;
// let b = 10;
 
// let temp;

// temp = a;
// a = b;
// b = temp;


// console.log(a, b);

//swap using destructuring
// let a = 20;
// let b = 10;

// [a,b] = [b,a];

// console.log(a)
// console.log(b)





// conditional statements



// if(1+1 == 1){
//     console.log("true");
// }
// else{
//     console.log("false");
// }   

// let age = +prompt("Enter your age");

// if(age >=18){
//     console.log("You are eligible to vote");

// }
// else if(age >= 60){
//     console.log("You are a senior citizen");
// }
// else if(age >= 13){
//     console.log("You are a teenager");
// }
// else{
//     console.log("You are a kid");
// }




// shop discount 
// let price = +prompt("enter the amount");

// if (price < 5000) {
//     console.log("no discount available:", price);
// } 
// else if(price >= 5000 && price <= 7000){
//      let final = (price * 0.05)
//       console.log(final)
// }
// else if (price >= 5000 && price <= 7000) {
// let final = price - (price * 0.05);
//     console.log("final price after 5% discount:", final);
// } 
// else if (price > 7000 && price <= 9000) {
//     let final = price - (price * 0.10); 
//     console.log("final price after 10% discount:", final);
// } 
// else if (price > 9000) {
//     let final = price - (price * 0.20); 
//     console.log("final price after 20% discount:", final);
// }


// let price = +prompt("enter the amount");
  // let dis = 0;
// if (price < 5000) {
//     console.log("no discount available:", price);
// } 
// else if(price >= 5000 && price <= 7000){
     
// dis = 5;//     }
// else if (price >= 5000 && price <= 7000) {
// dis = 10;
// } 
// else if (price > 7000 && price <= 9000) {
   // dis = 20;
// } 
// else if (price > 9000) {
//     dis = 30;
// }

// console.log(price - Math.floor((dis/price)/100))



// top to down approch 


// let unit = +prompt("enter bill unit")
// let amount = 0;
// if(unit > 400){
//     amount = (unit - 400) * 13;
//     unit = 400;

// }
//  if(unit > 200 && unit <= 400){
//     amount += (unit - 200) * 8;
//     unit = 200
//  }

// if(unit > 101 && unit <= 200){
//     amount += (unit - 100) * 6;
//     unit = 100;
// }
// if(unit <= 100){
//     amount += unit * 4;
// }
// console.log(amount)

//INR Demonination

// let amount = +prompt("enter amount")

// if(amount >= 500){
//     console.log(Math.floor(amount/500))
//     amount = amount % 500;
// }

// if( amount >= 200 ){
//     console.log(Math.floor(amount/200))
//     amount = amount % 200;
// }

// if( amount >= 100 ){
//     console.log(Math.floor(amount/100));
//     amount = amount % 100;
    
// }

// if(amount >= 50){
//     console.log(Math.floor(amount/50))
//     amount = amount % 50;
// }

// if(amount >= 20){
//     console.log(Math.floor(amount/20));
//     amount = amount % 20;
    
// }

// if(amount >= 10){
//     console.log(Math.floor(amount / 10));
//     amount = amount % 10;
    
// }

// console.log("remin amount" , amount)



// ternary operator  ? :

// 12 > 13 ? // true console.log(ture) : // false log(false)
// console.log(12 > 13 ? "hey =" : "hello")

// nested ternary operator

// let num = 10 ;
// console.log(num > 0 ? "posotive" : num < 0 ? "negaitve" : "zero");


// let num = (0.1 + 0.2).toFixed(1); // fisec that vlue and cobert into string
// switch (num) {
//     case  "0.3" :
//         console.log("he");
//         break;

//         case 0.5:
//         console.log("hello");
//         break;

//         default :("no")
        
        
// }


// ✅   Loops started ::::::; ✅

// for(let i = 0 ; i < 5 ; i ++){
//     console.log(i);
    
// }

// for(let i= 200 ; i >=100 ; i--){
//     console.log(i);
    
// }

// sum of n natural number 

// let sum = 0;
// let n = +prompt(" enter any nth number")
// for(let i = 1 ; i <n ; i ++){
//      sum = sum + i;
// }

// console.log(sum)



// let fact = 1;
// for(let i = 1 ; i < 5 ; i ++){
//     fact *=i;
// }
// console.log(fact)



// factriol of the  number 

// let n = +prompt("enter any fact number")

// for(let i = 1 ; i <=n/2; i++){

//   if(n%2 == 0){
//     console.log(i);
//   }
  
// }  console.log(n);


//prime number

// let n = +prompt("enter a number")

// console.log(isPrime(n))

// function isPrime(n){
//      if( n <=1) return false;
//      if(n ==2 ) return true;
//      if(n % 2 == 0) return false;
//       for(let i = 3 ; i<Math.floor(Math.sqrt(n));i+=2){ // i is increased by 2 
//         if(n % i == 0){
//           return false;
//         }
        
//       }
//       return true;
// }


// break : just break the whole loop
// contiue : just skip that iterations

/// WHILE LOOP


//Start;
// while(end){
//code
//change
//}

// let guss = prompt("enter the guss number")
 
// while( guss != 'exit'){
//   guss =  prompt("enter the number")
// }



// let digit = +prompt("enter the digit you want to sum")
// let sum = 0;
// let i = 0
// while( i < digit){
//    sum = sum +i;
//    i++;
// }

// console.log(sum);

 /// sum of the digit

// let n = +prompt("enter the number")
// let sum = 0;
// while(n > 0){ // we are tracking number from behind
// let rem = n % 10;

// //{ let rev = rev * 10 + rem}

// sum += rem;
// n = Math.floor(n/10);
// }

// console.log(sum);



