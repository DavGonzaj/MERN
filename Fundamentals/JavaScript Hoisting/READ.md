# JavaScript Hoisting
 Practice reading JavaScript the same way as the interpreter reads it.
   
   Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

    // GIVEN
    console.log(example);
    
    var example = "I'm the example!";
    
    AFTER HOISTING BY THE INTERPRETER
    
    // var example; 
    
    // console.log(example); // logs undefined
    
    // example = "I'm the example!";

After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, look back at how the code is hoisted by the interpreter.

*Note:*

Run the same code as above with ES6 syntax and compare your results: