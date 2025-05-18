function filterEven(numbers){ //a function to filter even numbers from an array of numbers
    
    // let res = []; //set up results array
    // for(let i = 0; i < numbers.length; i++){ //loop through the length of the array
    //     if(numbers[i] % 2 == 0){ //if the number is divisible by 2 (even) then add it to the result aray
    //         res.push(numbers[i]);
    //     }
    // }
    // return res; //return the results


    return numbers.filter(function(num){ //use the .filter method to filter through the array and find the numbers that are even
        return num % 2 ==0;
    })

    }
    
//Write Test cases
console.log(filterEven([1, 2, 3, 4, 5, 6])); 
console.log(filterEven([11, 33, 44, 60]));  
console.log(filterEven([]));               



