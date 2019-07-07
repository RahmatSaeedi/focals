// jshint esversion : 6
// An educational command-line Todo List app.


// Creates a new task by adding to the arrays
const newTask = (title, description) => {
  let task = {
    "title": title,
    "description": description,
    "complete": false,

    markCompleted: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${JSON.stringify(this.title)} has ${this.complete ? "" : "not"} been completed`);
    }
  };
  return task;
};





// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

task1.logState();
task1.markCompleted();
task1.logState();