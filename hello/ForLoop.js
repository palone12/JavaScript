//TODO Looping through Array

//TODO  For Loop
const States =["Rajasthan" , "Maharastra",1947, "Assam" ,"AndraPradesh","Karanataka"]
for(let i =0 ;i<States.length;i++){
    if(typeof States[i]!=="string"){
        continue;
    }
   
   console.log(States[i])


}

//TODO While Loop 
let i=0 ;
while(i<States.length){
    console.log(States[i])
    i++

}

// TODO Do While Loop 

let x =22

do{
    console.log(x)
    x++;
}
while(x<10)

//TODO For each  loop

const countries = ["India", "China", "Japan","Australi"]
countries.forEach((s)=>(console.log(s)))


