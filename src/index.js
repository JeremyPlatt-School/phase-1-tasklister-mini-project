document.addEventListener("DOMContentLoaded", () => {
  // your code here
  element = document.getElementById("create-task-form");
  element.addEventListener('submit', function addTask(event){
    task = document.getElementById("new-task-description").value;
    ul = document.getElementById("tasks");
    li = document.createElement("li");
    delBTN = document.createElement("button");
    delBTN.innerHTML = "Completed Task!";
    delBTN.id = "deleteButton";
    li.innerHTML = task;
    console.log(task);
    ul.appendChild(li);
    li.appendChild(delBTN)
    delBTN.addEventListener("click", function(){
      this.parentElement.remove();
    });
    event.preventDefault();
  });
});


