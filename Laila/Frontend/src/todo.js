$("#todoDate").datetimepicker({
  format: "DD/MM/YYYY HH:mm:ss",
});
$("#editTodoDate").datetimepicker({
  format: "DD/MM/YYYY HH:mm:ss",
});

const todoContainer = document.getElementById("thingsToDo");
const doneContainer = document.getElementById("thingsDone");
const missedContainer = document.getElementById("thingsMissed");
const todoBox = document.getElementById("todoBox");
const doneBox = document.getElementById("doneBox");
const missedBox = document.getElementById("missedBox");
const filter = document.getElementById("filter");
const editId = document.getElementById("editTodoId");
const editTitle = document.getElementById("editTodoTitle");
const editDate = document.getElementById("editTodoDate");

reminder();
getAllTodoList();

function getAllTodoList() {
  fetch(`http://localhost:3001/list?filter=All`)
    .then((response) => response.json())
    .then((data) => displayTaskProgression(data));
}

function displayTaskProgression(data) {
  todoBox.innerHTML = "";
  doneBox.innerHTML = "";
  missedBox.innerHTML = "";

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
                  class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent mw-25" style="word-break: break-word;">
                  <p class="lead fw-normal mb-0"><b>${value.title}</b></p>
              </li>`;

    const dates = value.date.split(" ");

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

    if (value.status == "Complete") {
      // Done Box
      items += `
               <li onClick="btnDeleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
                   <div class="btn btn-danger rounded-3 d-flex align-items-center">
                       <p class="small mb-0">
                           Delete
                       </p>
                   </div>
               </li>
               `;

      doneBox.innerHTML += `<ul class="list-group list-group-horizontal rounded-0 py-3">${items}</ul>`;
    } else if (
      (todoDate.getTime() - new Date().getTime()) / 1000 <= 0 &&
      value.status != "Complete"
    ) {
      // Missed Box
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
                         <p class="small mb-0">
                             Edit
                         </p>
                     </div>
                 </li>
                 <li onClick="btnCompleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
                     <div class="btn btn-primary rounded-3 d-flex align-items-center">
                         <p class="small mb-0">
                             Complete
                         </p>
                     </div>
                 </li>`;

      missedBox.innerHTML += `<ul class="list-group list-group-horizontal rounded-0 py-3">${items}</ul>`;
    } else {
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
                   <div class="btn btn-warning rounded-3 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#editModal">
                       <p class="small mb-0">
                           Edit
                       </p>
                   </div>
               </li>
               <li onClick="btnCompleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
                   <div class="btn btn-primary rounded-3 d-flex align-items-center">
                       <p class="small mb-0">
                           Complete
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

  getAllTodoList();

  document.getElementById("modalClose").click();
}

function filterChange() {
  const filterVal = filter.value;

  if (filterVal == "All") {
    todoContainer.style.display = "block";
    doneContainer.style.display = "block";
    missedContainer.style.display = "block";
  } else if (filterVal == "Pending") {
    todoContainer.style.display = "block";
    doneContainer.style.display = "none";
    missedContainer.style.display = "block";
  } else if (filterVal == "Complete") {
    todoContainer.style.display = "none";
    doneContainer.style.display = "block";
    missedContainer.style.display = "none";
  }
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
          } else if (dif <= 0 && value.status != "Complete") {
            alert(`You Missed Task ${value.title}`);
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

            const dif = (todoDate.getTime() - today.getTime()) / 1000;

            if (dif <= 300 && value.status != "Complete") {
              alert(
                `Task Due Date is In 5 Minutes or Less! Please Complete Task ${value.title}`
              );
            } else if (dif <= 0 && value.status != "Complete") {
              alert(`You Missed Task ${value.title}`);
            }
          }
        });
      });
  }, 300000);
}

window.btnAddClick = btnAddClick;
window.btnCompleteClick = btnCompleteClick;
window.btnDeleteClick = btnDeleteClick;
window.btnEditClick = btnEditClick;
window.filterChange = filterChange;
window.updateTodo = updateTodo;