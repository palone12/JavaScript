//Objects in Javascript

var user ={
    firstName :"Pranay",
    LastName: "Alone",
    Age:23,
    Role: "SDE 1 at Microsoft",
    Country: "India"
}
console.log(user.Role) //accesing the object 
// Another way to access
console.log(user["firstName"]) // parametr should be in "c=double quotes"


// Changing values using keys
user.Role="SDE at Amazon"
console.log(user.Role)

//table
console.table(user)


// TODO Methods inside the objects
var  UdemyUser = {
     FullName : "Pranay Alone",
     College: 'Dr. Babasaheb Ambedkar Technological University',
     CourseList : [] ,
     buyCourse: function(courseNameTo){
         this.CourseList.push(courseNameTo)
     },
     courseCount: function(){
        return `Total no of courses purchased is ${this.CourseList.length}`
     },
     Info:function(){
        console.table(this)
       
     

     }
     
}
console.log(UdemyUser.courseCount())
UdemyUser.buyCourse("Reactjs")
UdemyUser.buyCourse("Angular")
console.log(UdemyUser.courseCount())
UdemyUser.Info()