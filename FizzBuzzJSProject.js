//Creates and infinite loop that stops when the variable 'i' is equal to 100, Every time it loops back to the start of the code it adds 1 to the value of 'i' 
for (var i = 1; i <= 100; i++)
{
  //Creates a variable that we will use to show the output of the code into the console (Also allows cleaner code)
  var output = "";
  // Checks if the current value of 'i' is a multiplr of three, if it is it adds "Fizz" to the Output string
  if ( i % 3 === 0) {output += "Fizz";}
  // Checks if the current value of 'i' is a multiplr of five, if it is it adds "Buzz" to the Output string
  if ( i % 5 === 0) {output += "Buzz";}

//If it is not a multiple of 3 or 5 and the output is the same as it was set to at the beggining, it changes the variable to 'i' which is the current number the for loop is at
 if (output === "") {output = i;}

//Print either "Fizz", "Buzz", "FizzBuzz", or 'i' (Current number the for loop is at)
 console.log(output);

}