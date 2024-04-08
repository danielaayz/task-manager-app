const taskManager = {
   // fill up with properties
};

// function for asking the user to fill in their name
function askUserName() {
   const userInput = prompt(`Hello! Please enter your profile name:`);
   const userName = userInput;
   if (userInput === "") {
      confirm(`Sorry. You must enter a value in the input field`);
      askUserName();
   } else if (!isNaN(userInput)) {
      confirm(`Sorry, you can only use letters between A - Ö.`);
      askUserName();
   } else {
      confirm(`Welcome ${userName}!`);
   }
   menu();
}

// menu()
function menu() {
   const choice = parseInt(
      prompt(
         `Please chooose a number from the menu and type it to the input field:
          1 = Add a task
          2 = Complete a task
          3 = List all tasks
          4 = List completed tasks`
      )
   );
   // add some more logic here:
   // choose between if/else or switch
   switch (choice) {
      case 1:
         alert("You've chosen to add a new task");
         taskManager.addTasks();
         break;
      case 2:
         alert("You've chosen to complete a task");
         console.log(taskManager.tasks);
         taskManager.completeTask();
         break;
      case 3:
         alert("You've chosen to list all tasks");
         taskManager.listAllTasks();
         break;
      case 4:
         alert("You've chosen to list all completed tasks");
         taskManager.listCompletedTasks();
         break;
      default:
         alert(
            "Sorry, you need to choose a number between 1 - 4. Please try again!"
         );
   }
   // I chose the switch statement because it checks the value of a variable and compares it with all the cases. Since the user is given the option to chose from the
   // menu to be executed, the input in the prompt will.  integer object 1, 2, 3 and 4. It checks only equality expression.
   // The switch statement evaluates a given expression, which can be a variable or a value, and compares it to several possible cases.
   // If the value of the expression matches one of the cases, the associated code block (a set of instructions) is executed.
   //console.log(choice);
}

menu();

// starts with the function asUserName() which triggers the menu() function
askUserName();
