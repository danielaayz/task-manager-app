// TASK MANAGER

// taskManager object
const taskManager = {
   tasks: [],
   addTask: function () {
      const newTask = Math.floor(Math.random() * 100 + 1);
      for (let i = 0; i < newTask; i++) {
         tasks.push(typeof newTask);
      }

      // pushes the newTask parameter into the 'tasks' array property of the taskManager object
   },
   completeTask: function () {
    const taskCompleted = true;
    const notCompletedTask = true;

   },
   listAllTasks: function () {
      for (let i = 0; i < tasks.length; i++) {
         console.log(tasks[i]);
      }
      const allTasks = alert();
   },
   listCompletedTasks: function () {
    for (let i = 0; i === listCompletedTasks.length; i++) {
      if 
    }
   },
};
taskManager.addTask();
// anropar funktionen som finns innuti objektet?
console.log(taskManager);

// function for asking the user to fill in their name
function askUserName() {
   // add logic here to ask the user to enter their name
   // boolean true/false
   const name = parseInt(
      prompt(`Hello! Please submit your name in the input field:`)
   );
   alert(name);
   alert(
      "This is the alert() function which dispays some text for the user.\nUnlike the prompt(), the alert() does not take any input.\nUse it only to display messages for the user."
   );
}

// menu function
function menu(addTask, completeTask, listAllTasks, listCompletedTasks) {
   const choice = parseInt(
      prompt(
         `Please chooose a number from the menu and add to the input field:
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
         alert("Sorry, you have typed an incorrect value. Try again!");
   }
   // I chose the switch statement because it checks the value of a variable and compares it with all the cases. Since the user is given the option to chose from the
   // menu to be executed, the input in the prompt will.  integer object 1, 2, 3 and 4. It checks only equality expression.
}

//console.log(menu);

// starts with the function askUserName() which triggers the menu() function
askUserName();
