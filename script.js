const taskManager = {
   // fill up with properties
};

// function for asking the user to fill in their name
function askUserName() {
   const userInput = prompt(`Hello! Please enter your profile name:`);
   const userName = userInput;
   if (userInput === "") {
      confirm(`Sorry. You must enter a value in the input field`);
      return askUserName();
   } else if (!isNaN(userInput)) {
      confirm(`Sorry, you can only use letters between A - Ö.`);
      return askUserName();
   } else {
      confirm(`Welcome ${userName}!`);
   }
   menu();
}

// menu function
function menu() {
   const choice = parseInt(
      prompt(
         "Hello, this is a the prompt function that displays an input and some text.\n" +
            "We use parseInt() to make sure that we can take an int as a input from the user.\n" +
            "By default the prompt() function takes all input as strings."
      )
   );
}

// starts with the function asUserName() which triggers the menu() function
askUserName();
