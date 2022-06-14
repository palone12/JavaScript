const numbers =[9,25,6,85,25,9,4,5,6]
numbers.sort((x,y)=> x-y)
let duplicate
for(let i =0 ;i<numbers.length;i++){
    duplicate =false;
    for(let j =0 ;j<numbers.length;j++){
        if(i!=j){
            if(numbers[i]===numbers[j]){
                duplicate = true
                break
            }
        }
    }
    if(duplicate){
        console.log(numbers[i])
      
    
}
    
}
