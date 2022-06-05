//get the values from the user. We need to get the Fizz and Buzz value
function getValues(){

    //get the users values from the DOM
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check that they the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    
        //we call fizzBuzz
        let fbArray = fizzBuzz(fizzValue,buzzValue);
        //take return from fizzBuzz and call displayData
        displayData(fbArray);
    }else{
        alert("You Must Enter A Number!");
    }
}

//Generate the values
function fizzBuzz(fizzValue, buzzValue){
    let returnArray = [];

    //write a loop from 1-100
    for (let i = 1; i <= 100; i++) {
        //we need to check the current value in three steps 
        //check to see if divisable by both (3 and 5 for example) 
        //if so, push "FizzBuzz" into an array not the number
        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push("FizzBuzz");
        //check to see if divisible by fizz value (3 for example)
        //if so, push "Fizz" into an array and not the number
        }else if(i % fizzValue == 0){
            returnArray.push("Fizz");
        //check to se if divisible by buzz value (5 for example)
        //if so, push "Buzz" into an array and not the number
        }else if(i % buzzValue == 0){
            returnArray.push("Buzz");
        //if neither, push the number into the array
        }else{
           returnArray.push(i);   
        }        
    }

    return returnArray;
}

//dispay the values
//loop over the array and create a tablerow for each item
function displayData(fbArray){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear the table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //grab just the td, put into arrary
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }
    //add all the rows to the table. 
}


