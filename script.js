let taskId = 1;

const taskManager = {
   // an array that contains all the tasks, it's empty at the start
   tasks: [],

   addTasks: function (addNewTask) {
      // get the description of the task from the user through a prompt:
      const taskInput = prompt("Enter a task description:");
      //console.log(taskInput)

      // is there anything that can go wrong with the input from the user? for eg. adding a task with an empty description.
      // an if-statement to check if the user adds an empty string.
      if (taskInput.trim() === "") {
         alert(`Task description cannot be empty 🙃`);
         // call for the addTask-function to run again
         this.addTasks();
      }

      // define the task object, containing an numeric id, description (string) and completed (boolean) status
      const newTask = {
         id: taskId++,
         description: taskInput,
         isCompleted: false,
      };
      // adds the task object onto the tasks array by the push method
      this.tasks.push(newTask);
      alert(`Task added! 🙂`);
      // call for the menu function to run again
      menu();
   },

   // a function that marks a task as completed by changing its
   // completed status.
   completeTask: function () {
      // if there arent any tasks in the array alert and call for the menu function again:
      if (this.tasks.length === 0) {
         alert(`There are no tasks to show `);
         menu();
      }
      // A forEach() loops calls a function for each element in an array, and then stored in the taskList variabel:
      let tasksList = "";
      this.tasks.forEach(function (taskItem) {
         tasksList += `
         Id: ${taskItem.id}  
         Description: ${taskItem.description}  
         Completion status: ${taskItem.isCompleted}
         
         `;
      });

      const changeId = parseInt(
         prompt(
            `Please type the ID of the task to change it's status:
             
            ${tasksList}`
         )
      );

      const task = this.tasks.find((number) => number.id === changeId);
      // the isCompleted property is changed from false to true and an alert message is called to confirm that the new task status.
      task.isCompleted = true;

      alert(`Task is now completed! 🥳`);

      menu();
   },

   // a function that lists all tasks
   listAllTasks: function () {
      // if there arent any tasks (0) in the tasks array, an alert will pop-up and the menu-function called again
      if (this.tasks.length === 0) {
         alert(`There are no tasks to show`);
         menu();
      }
      // initializing an empty string to store the information of the 'tasks' array
      let allTasks = "";
      // the forEach loop used to iterate over each task in the 'tasks' array,
      this.tasks.forEach(function (task) {
         // the information is the stored into the allTasks string =+
         // a template literal that contains information about each task
         allTasks += `
            Id: ${task.id}  
            Description: ${task.description}  
            Completion Status: ${task.isCompleted}`;
      });
      // the content of the of the allTasks is then displayed in the alert pop-up window
      alert(`List of all tasks: \n${allTasks}`);
      // the menu-function is called again for th user to be able to use the app again
      menu();
   },

   listCompletedTasks: function () {
      // an if statement to check

      if (this.tasks.length === 0) {
         alert(`There aren't any completed tasks to show`);
         menu();
      }
      // filter the tasks array and stores the result in the completedTasks variabel:
      const completedTasks = this.tasks.filter((task) => task.isCompleted);
      let onlyCompletedTasks = "";

      // a template literal that contains information about each task
      completedTasks.forEach(function (item) {
         onlyCompletedTasks += `
         Id: ${item.id}
         Description: ${item.description}
         Completion Status: ${item.isCompleted}`;
      });

      alert(`List of Completed tasks: 
      ${onlyCompletedTasks}`);
      menu();
   },
};

// function for asking the user to fill in their name and greeting them i the right value is
function askUserName() {
   // the user is able to fill in a value in the propmt's input field:
   const userInput = prompt(`Hello! Please enter your profile name:`);
   // the input from the user is then saved in a new variable
   const userName = userInput;
   if (userInput === "") {
      // if the input is left empty the following message will pop-up
      // in the confirm
      confirm(`Sorry. You must enter a value in the input field`);
      askUserName();
   } else if (!isNaN(userInput)) {
      // if the input is NOT (!) a isNan (is Not-a-Number):
      confirm(`Sorry, you can only use letters between A - Ö.`);
      askUserName();
   } else {
      // if the user has entered a correct value they are greeted with their name, which is the input saved in the userName variabel
      confirm(`Welcome ${userName}!`);
   }
   menu();
}

// menu()
function menu() {
   // the input from the user is saved in the choice variabel
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
   // and the value from the input is then compared with the values of each case:
   switch (choice) {
      case 1:
         // calls for the addTasks-function inside the taskManager-object and confirms the users input:
         alert("You've chosen to add a new task");
         taskManager.addTasks();
         break;
      case 2:
         // calls for the completeTask-function inside the taskManager-object and confirms the users input:
         alert("You've chosen to complete a task");
         taskManager.completeTask();
         break;
      case 3:
         // calls for the listAllTasks-function inside the taskManager-object and confirms the users input:
         alert("You've chosen to list all tasks");
         taskManager.listAllTasks();
         break;
      case 4:
         alert("You've chosen to list all completed tasks");
         // calls for the listCompletedTasks-function inside the taskManager-object and confirms the users input:
         taskManager.listCompletedTasks();
         break;
      case 5:
         // this values shuts down the app by calling
         alert("You've chosen to exit - Goodbye! 👋");
         //
         return;
      default:
         // when the user types in a invalid choice this message will pop-up, and the menu-function will be called again:
         alert(
            "Sorry, you need to choose a number between 1 - 5. Please try again!"
         );
         menu();
         break;
   }
   // I chose the switch statement because it checks the value of a variable and compares it with all the cases in a more straight
   //forward: If there is a match, the associated block of code is executed.
}

// the app starts with the function asUserName() which then triggers the menu() function
askUserName();
