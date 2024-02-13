
document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const task = document.getElementById("task").value;
  const date = document.getElementById("date").value;
  const taskList = document.getElementById("taskList");
  
  const taskRow = document.createElement("tr");
  taskRow.innerHTML = `<td>${task}</td>
                       <td>${date}</td>
                       <td>${getDayOfWeek(date)}</td>
                       <td>${getMonthName(date)}</td>`;
  
  taskList.appendChild(taskRow);
  document.getElementById("taskForm").reset();
});

function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

function getMonthName(dateString) {
  const date = new Date(dateString);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[date.getMonth()];
}
