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
