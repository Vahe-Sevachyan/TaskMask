const taskDB = [];
const ctBtn = document.querySelector(".ct-btn");
function CreateTask(taskName, taskInfo) {
  this.taskName = taskName;
  this.taskInfo = taskInfo;
}

ctBtn.addEventListener("click", () => {
  const input = document.querySelector(".input").value;
  const textArea = document.querySelector(".textarea").value;
  const newTask = new CreateTask(input, textArea);
  taskDB.push(newTask);
  console.log(taskDB);
  console.log("clicked");
});
