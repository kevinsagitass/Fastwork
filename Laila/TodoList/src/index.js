const box = document.getElementById("todaybox");

checkLocalItem();
reminder();

// Check Local Storage for Todo if Exists then Proceed to Set the Todos in Backend
function checkLocalItem() {
  let localTodos = JSON.parse(localStorage.getItem("todos"));

  if (localTodos != null && localTodos != undefined && localTodos.length > 0) {
    // Set Todos to Backend
    setTodos(localTodos);
  }

  getTodayList();
}

// Set Todos in Backend
function setTodos(localTodo) {
  fetch(`http://localhost:3001/api/set-todo`, {
    method: "POST",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      localTodo: localTodo,
    }),
  });
}

// Check if Notification Permission is Granted if Not Request Permission
if (Notification.permission != "denied" && Notification.permission != "granted") {
  Notification.requestPermission().then((permission) => {});
}

// Function to Show Notification
function showNotification(title, message) {
  new Notification(title, {
    body: message,
  });
}

// Get List of Todo that Has Start Date Today
function getTodayList() {
  fetch(`http://localhost:3001/api/today`)
    .then((response) => response.json())
    .then((data) => displayTodos(data));

  fetch(`http://localhost:3001/api/list?filter=All`)
    .then((response) => response.json())
    .then((data) => localStorage.setItem("todos", JSON.stringify(data)));
}

// Display List of Todos to FrontEnd
function displayTodos(data) {
  box.innerHTML = "";

  data.forEach(function (value, index) {
    let items = ``;

    items += `
        <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
            <div class="form-check">
                <input class="form-check-input me-0" type="checkbox" value="" aria-label="..." ${
                  value.status == "Complete" ? "checked" : ""
                } disabled />
            </div>
        </li>
        <li
            class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
            <p class="lead fw-normal mb-0">${value.title}</p>
        </li>`;

    if (value.status != "Complete") {
      items += `
            <li class="list-group-item rounded-0 border-0 bg-transparent">
                <div class="text-end text-muted">
                    <a href="#!" class="text-muted" data-mdb-toggle="tooltip m-auto" title="Start Date">
                        <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>${value.date}</p>
                    </a>
                </div>
            </li>
            <li onClick="btnCompleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
              <div class="btn btn-primary rounded-3 d-flex align-items-center hidden-sm hidden-xs visible-md-block visible-lg-block">
                  <p class="small mb-0">
                      Complete
                  </p>
              </div>
              <div class="hidden-md hidden-lg visible-sm-block visible-xs-block">
                <i class="fa fa-solid fa-check"></i>
              </div>
            </li>`;
    } else {
      items += `
            <li onClick="btnDeleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
              <div class="btn btn-danger rounded-3 d-flex align-items-center hidden-sm hidden-xs visible-md-block visible-lg-block">
                <p class="small mb-0">
                    Delete
                </p>
              </div>
              <div class="hidden-md hidden-lg visible-sm-block visible-xs-block">
                  <i class="fa fa-solid fa-trash"></i>
              </div>
            </li>
            `;
    }

    box.innerHTML += `<ul class="list-group list-group-horizontal rounded-0">${items}</ul>`;
  });
}

// Delete Todo by ID
function btnDeleteClick(id) {
  fetch(`http://localhost:3001/api/list/${id}`, {
    method: "DELETE",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
  });

  getTodayList();
}

// Change Todo Status to Complete
function btnCompleteClick(id) {
  fetch(`http://localhost:3001/api/list/${id}`, {
    method: "PUT",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
  });

  getTodayList();
}

// Setup Interval to Check if a Todo is Missed or Will Soon Start
function reminder() {
  fetch(`http://localhost:3001/api/list?filter=Pending`)
    .then((response) => response.json())
    .then((data) => {
      const today = new Date();

      data.forEach(function (value, index) {
        const dates = value.date.split(" ");

        if (dates.length > 1) {
          const date = dates[0].split("/");
          const time = dates[1].split(":");

          const todoDate = new Date(
            date[2],
            date[1] - 1,
            date[0],
            time[0],
            time[1],
            time[2],
            0
          );

          const dif = (todoDate.getTime() - today.getTime()) / 1000;

          if (dif <= 300 && today < todoDate && value.status != "Complete") {
            showNotification(
              "Reminder",
              `Task Due Date is In 5 Minutes or Less! Please Complete Task ${value.title}`
            );
          } else if (dif <= 0 && value.status != "Complete") {
            showNotification("Task Missed", `You Missed Task ${value.title}`);
          }
        }
      });
    });

  setInterval(function () {
    fetch(`http://localhost:3001/api/list?filter=Pending`)
      .then((response) => response.json())
      .then((data) => {
        const today = new Date();

        data.forEach(function (value, index) {
          const dates = value.date.split(" ");

          if (dates.length > 1) {
            const date = dates[0].split("/");
            const time = dates[1].split(":");

            const todoDate = new Date(
              date[2],
              date[1] - 1,
              date[0],
              time[0],
              time[1],
              time[2],
              0
            );

            const dif = (todoDate.getTime() - today.getTime()) / 1000;

            if (dif <= 300 && today < todoDate && value.status != "Complete") {
              showNotification(
                "Reminder",
                `Task Due Date is In 5 Minutes or Less! Please Complete Task ${value.title}`
              );
            } else if (dif <= 0 && value.status != "Complete") {
              showNotification("Task Missed", `You Missed Task ${value.title}`);
            }
          }
        });
      });
  }, 300000);
}

var div = document.getElementById("span");

// Display Timer in Daily Screen
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();

  span.innerHTML = "";

  span.innerHTML +=
    "Current Time : " +
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);

  span.innerHTML += `<a style="float: right" href="/calendar"><i class="fa fa-solid fa-calendar"></i></a>`;
}

setInterval(time, 1000);

window.btnCompleteClick = btnCompleteClick;
window.btnDeleteClick = btnDeleteClick;
