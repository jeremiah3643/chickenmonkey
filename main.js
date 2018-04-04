let number ="";


for (let i=1; i <= 100; i++) 
{
    if (i%5===0 && i%7===0) {
        number += 'ChickenMonkey,'
    }
    
    else if (i%5===0) {
    number+= 'Chicken,'}


    else if (i%7===0) {
    number += 'Monkey,';
    }
   else {
       number += i + ','; 
   }
   console.log(number)  
}


