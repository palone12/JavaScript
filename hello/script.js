
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

//Function in varaible
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


//Arrays 

//Declaration 
var arr= [2,3,4,56,67,7]
console.log(arr[2]) // aAccessing the element 
console.log(arr.indexOf(2)); // Accensing Index of the element present in Array
console.log(arr.length) // Gives the length of the array
console.log(arr.fill("Chiron"));
var result =  arr.fill("Maruti",3) //  Filling array with start index
console.log(result)
const temp = ["Bugati" ,"Ferrari", "Porsche" , "Gulia"]
var reuslt2 = temp.fill("Alto" ,2,3) // Filling array  with start and and end and  end is exclusive
console.log(reuslt2)


//TODO 
// Arrow funstions
// function printName(myName){
//     console.log(myName)
// }
// console.log(printName("Pranay"))

var xxx = (myName)=>{
    console.log(myName)
}
console.log(xxx("Pranya"))


// Filter in Array 
const Array= [ 10,20,3,6,7,5484,541,84,5]
var result = Array.filter((num)=>(num%2===0))
console.log(result)


//Slicing and Splicing in Array
//Slice means take some part of original array 
//for example
const  users=["Pranay " ,"Naman ", " Vaibhav" ,"Prajwal" , "Prasad"]
console.log(users.slice(1,3)) //this is slicing with start and end index where end index is not inclusive
// Another way of slicing  -- only giving start value
console.log(users.slice(1)) // Here given value is exclusive

//Splicing in Arrays
const friends =["Tim", "sim ","Lin","gin " ,"oldmonk"]
//friends.splice(1,3,"Gandus") //Start counting from index 1 and count 3 element and replace them with given string
// Other ways
console.log(friends.splice(1,3,"hi" ,"chutiya")) //start countuing fromn 1 and replace the count  no of element and put givrn  strings in it 
console.log(friends)