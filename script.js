// TASK MANAGER

// taskManager object
const taskManager = {
   // fill up with properties, see instructions
   tasks: [],
   // adding a property with an array named 'tasks' to the 'taksManager' object that holds all the tasks. the array can be empty at the start.
   addTask: function () {
      // Each task is an object containing at least a description (string) and a completed (boolean) status.
      //a function that adds a new task to the task array. it should have a uinque identifier - a numeric ID.
      const taskInput = {};
      tasks.push(newTask); // pushes the newTask parameter into the 'tasks' array property of the object
   },
   //we need to store the result of the function in a variable?
   completeTask: function () {},
   listAllTasks: function () {
      // a function that lists all tasks, showing their ID, description, and completion status
      const allTasks = alert();
   },
   listCompletedTasks: function () {},
};

console.log(taskManager);

// function for asking the user to fill in their name
function askUserName() {
   // add logic here to as the user to enter their name
   // boolean true/false
   const name = parseInt(
      prompt(`Hello! Please submit your name in the input field:`)
   );

   alert(
      "This is the alert() function which dispays some text for the user.\nUnlike the prompt(), the alert() does not take any input.\nUse it only to display messages for the user."
   );
}

// menu function
function menu(addTask, completeTask, listAllTasks, listCompletedTasks) {
   const choice = parseInt(
      prompt(
         `Please enter your input from the menu,
         1. Add a task
         2. Complete a task
         3. List all tasks
         4. List completed tasks`
      )
   );
   // add some more logic here:
   // choose between if/else or switch
   switch (choice) {
      case 1:
         text = "You've chosen to add a new task";
         taskManager.addTask;
         break;
      case 2:
         text = "You've chosen to complete a task";
         taskManager.completeTask;
         break;
      case 3:
         text = "You've chosen to list all tasks";
         taskManager.listAllTasks;
         break;
      case 4:
         text = "You've chosen to list all completed tasks";
         taskManager.listCompletedTasks;
         break;
      default:
         text = "Sorry, you have typed an incorrect value. Try again!";
      //taskManager.incorrectInput; ???
   }
   // I chose the switch statement because it checks the value of a variable and compares it with all the cases. Since the user is given the option to chose from the
   // menu to be executed, the input in the prompt will.  integer object 1, 2, 3 and 4. It checks only equality expression.
}

//console.log(menu);

// starts with the function askUserName() which triggers the menu() function
askUserName();
