$("#todoDate").datetimepicker({
  format: "DD/MM/YYYY hh:mm:ss",
});
$("#editTodoDate").datetimepicker({
  format: "DD/MM/YYYY hh:mm:ss",
});

const box = document.getElementById("box");
const todoBox = document.getElementById("todoBox");
const doneBox = document.getElementById("doneBox");
const filter = document.getElementById("filter");
const editId = document.getElementById("editTodoId");
const editTitle = document.getElementById("editTodoTitle");
const editDate = document.getElementById("editTodoDate");

reminder();
getTodoList();
getAllTodoList();

function getTodoList() {
  fetch(`http://localhost:3001/list?filter=${filter.value}`)
    .then((response) => response.json())
    .then((data) => displayTodos(data));
}

function getAllTodoList() {
  fetch(`http://localhost:3001/list?filter=All`)
    .then((response) => response.json())
    .then((data) => displayTaskProgression(data));
}

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
            <p class="lead fw-normal mb-0"><b>${value.title}</b></p>
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
            <li onClick="btnEditClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent mx-3">
                <div class="btn btn-warning rounded-3 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#editModal">
                    <p class="medium mb-0">
                        Edit
                    </p>
                </div>
            </li>
            <li onClick="btnCompleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
                <div class="btn btn-primary rounded-3 d-flex align-items-center">
                    <p class="medium mb-0">
                        Complete Task
                    </p>
                </div>
            </li>`;
    } else {
      items += `
            <li onClick="btnDeleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
                <div class="btn btn-danger rounded-3 d-flex align-items-center">
                    <p class="medium mb-0">
                        Delete Task
                    </p>
                </div>
            </li>
            `;
    }

    box.innerHTML += `<ul class="list-group list-group-horizontal rounded-0 py-3">${items}</ul>`;
  });
}

function displayTaskProgression(data) {
  todoBox.innerHTML = "";
  doneBox.innerHTML = "";

  const today = new Date();
  const stringToday = `${("0" + today.getDate()).slice(-2)}/${(
    "0" +
    (today.getMonth() + 1)
  ).slice(-2)}/${today.getFullYear()}`;

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
                <p class="lead fw-normal mb-0"><b>${value.title}</b></p>
            </li>`;

    if (value.status == "Complete") {
      // Done Box
      items += `
             <li onClick="btnDeleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
                 <div class="btn btn-danger rounded-3 d-flex align-items-center">
                     <p class="medium mb-0">
                         Delete Task
                     </p>
                 </div>
             </li>
             `;

      doneBox.innerHTML += `<ul class="list-group list-group-horizontal rounded-0 py-3">${items}</ul>`;
    } else if (value.date.split(" ")[0] == stringToday) {
      // Todo Box
      items += `
             <li class="list-group-item rounded-0 border-0 bg-transparent">
                 <div class="text-end text-muted">
                     <a href="#!" class="text-muted" data-mdb-toggle="tooltip m-auto" title="Start Date">
                         <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>${value.date}</p>
                     </a>
                 </div>
             </li>
             <li onClick="btnEditClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent mx-3">
                 <div class="btn btn-warning rounded-3 d-flex align-items-center">
                     <p class="medium mb-0">
                         Edit
                     </p>
                 </div>
             </li>
             <li onClick="btnCompleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
                 <div class="btn btn-primary rounded-3 d-flex align-items-center">
                     <p class="medium mb-0">
                         Complete Task
                     </p>
                 </div>
             </li>`;

      todoBox.innerHTML += `<ul class="list-group list-group-horizontal rounded-0 py-3">${items}</ul>`;
    }
  });
}

function btnAddClick() {
  let todoTitle = document.getElementById("todoTitle");
  let todoDate = document.getElementById("todoDate");

  const dates = todoDate.value.split(" ");

  if (todoTitle.value == "") {
    alert("Please Input Title!");
    return;
  } else if (
    dates.length != 2 ||
    dates[0].split("/").length != 3 ||
    dates[1].split(":").length != 3
  ) {
    alert("Please Follow the Date Format!");
    return;
  }

  fetch("http://localhost:3001/list", {
    method: "POST",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: todoTitle.value,
      date: todoDate.value,
    }),
  });

  todoTitle.value = "";
  todoDate.value = "";

  getTodoList();
  getAllTodoList();
}

function btnCompleteClick(id) {
  fetch(`http://localhost:3001/list/${id}`, {
    method: "PUT",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
  });

  getTodoList();
  getAllTodoList();
}

function btnDeleteClick(id) {
  fetch(`http://localhost:3001/list/${id}`, {
    method: "DELETE",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
  });

  getTodoList();
  getAllTodoList();
}

function btnEditClick(id) {
  fetch(`http://localhost:3001/list/${id}`)
    .then((response) => response.json())
    .then((data) => {
      editId.value = data.id;
      editTitle.value = data.title;
      editDate.value = data.date;
    });
}

function updateTodo() {
  fetch(`http://localhost:3001/list/${editId.value}`, {
    method: "POST",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: editId.value,
      title: editTitle.value,
      date: editDate.value,
    }),
  });

  getTodoList();
  getAllTodoList();

  document.getElementById("modalClose").click();
}

function reminder() {
  fetch(`http://localhost:3001/list?filter=Pending`)
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
            alert(
              `Task Due Date is In 5 Minutes or Less! Please Complete Task ${value.title}`
            );
          }
        }
      });
    });

  setInterval(function () {
    fetch(`http://localhost:3001/list?filter=Pending`)
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

            const dif = (todoDate.getTime() - today.getTime()) / 60000;

            if (dif <= 10 && today < todoDate && value.status != "Complete") {
              alert(`Task ${value.title} Will Start in ${dif} Hour(s)`);
            }
          }
        });
      });
  }, 300000);
}
