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
         `Please choose a number from the menu and type it to the input field:
         
          1 = Add a task
          2 = Complete a task
          3 = List all tasks
          4 = List completed tasks
          5 = Exit`
      )
   );

   switch (choice) {
      case 1:
         alert("You've chosen to add a new task");
         taskManager.addTasks();
         break;
      case 2:
         alert("You've chosen to complete a task");
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
      case 5:
         alert("You've chosen to exit - Goodbye!");
         return;
         break;
      default:
         alert(
            "Sorry, you need to choose a number between 1 - 5. Please try again!"
         );
   }
   // I chose the switch statement because it checks the value of a variable and compares it with all the cases.
}

menu();

// starts with the function asUserName() which triggers the menu() function
askUserName();
