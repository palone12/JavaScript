
// // Sign Up Form;
// var firstName ="Pranay"
// var lastName ="Alone"
// var email= "alonepranay123@gmail.com"
// var Dob =29031999
// var password ="lawdaLasun"


// console.log(`
//    First Name :${firstName}
//    Last Name : ${lastName}
//    Email: ${email}
//    Date of Birth : ${Dob}
  


// `)
// // var myHeading = document.querySelector("h1");
// // myHeading.textContent="Hello Bhosdiwalo";
// // console.log(myHeading);
// /* Operations in 
//    javaScript */
 
//    //Adittion;
//    var a = 10 ;
//    var b =56;
//    console.log( "addition is " ,a+b);
//    console.log("Substraction", b-a);
//    console.log("Multiplicatuiom " ,a*b);
//    console.log("Division",a/b);

//    // Some Other  Operators
//    var sex= 69;
//    var noSex = 696;
//    console.log(sex===noSex);


//    // Coditionals

//    var temp =30;
//    if(temp<30){
//       console.log("It is little cold Outside");
//    }
//    else{
//       console.log("It  is very hot Outside");
//    }

//    // Make a Purchase
//    var email =false;
//    var cardInfo = true;
//    var Cvv = true;
//    if(email){
//       if(cardInfo){
//          if(Cvv){
//             console.log("Everythig is valid")
//          }
//       }
//    }
   

//    // In One go
 
//  if(email&& cardInfo&&Cvv){
//     console.log("You can buy  the product");
//  }
//  else{
//     console.log("Tera Bapp ya chod gya tha kya 10 20 crore");
//  }
//  //OR Operattor
//  if(email||  cardInfo|| Cvv){
//    console.log("You can buy  the product");
// }
// else{
//    console.log("Tera Bapp ya chod gya tha kya 10 20 crore");
// }

// // Switch and Case
// var user ="admin"
// switch (user) {
//    case  "admin": console.log("Hello admin")
      
//       break;
//       case  "not": console.log("Hello not admin")
      
//       break;

//    default:
//       break;
// }


// // Functions  in javasript
// function greet(){
//    return "Hello Lovely Indian"
// }
// console.log(greet())

// var ab=3;
// function  incri(){
//    ab++;
//    console.log(ab);
// }
// incri()



// // Hoisting 
// var nam1;

// function names(name1){
//    console.log(name1)
// }

// names("Pranay")


// //Closures
// function x(){
//    var a =1;
//    function y(){
//       console.log(a);
//    }
//    y();
// }
// x()

// function abc (){
//    let x = "ankitz"
//    let y = "Gandu"
//    function def(){
//       var z ="tarun"
//       function def(){
//          console.log(x)
//       }
//       console.dir(ghi)
//    }
//    console.dir(def)
// }
// abc()

//Functions Continued
var  getUserRole=function (name,role){
    switch (role) {
        case "admin":
            return `${name} is admin `
        case "subAdmin":
            return `${name} is have some permission`
        case "PaidUser":
            return `${name} is allowedd to acces the content `
        case "Trail User":
            return `${name} is allowed to access the free content  `
    
        default:
           return 'Trial User'
    }
}
console.log(getUserRole("Pranay" ,"admin"))
var getData=getUserRole("Pranay" ,"admin")
console.log(getData)