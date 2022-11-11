const box = document.getElementById("todaybox");

reminder();
getTodayList();

function getTodayList() {
  fetch(`http://localhost:3001/today`)
    .then((response) => response.json())
    .then((data) => displayTodos(data));
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
                <div class="btn btn-primary rounded-3 d-flex align-items-center">
                    <p class="small mb-0">
                        Complete
                    </p>
                </div>
            </li>`;
    } else {
      items += `
            <li onClick="btnDeleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
                <div class="btn btn-primary rounded-3 d-flex align-items-center">
                    <p class="small mb-0">
                        Delete
                    </p>
                </div>
            </li>
            `;
    }

    box.innerHTML += `<ul class="list-group list-group-horizontal rounded-0">${items}</ul>`;
  });
}

function btnCompleteClick(id) {
  fetch(`http://localhost:3001/list/${id}`, {
    method: "PUT",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
  });

  getTodayList();
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

var div = document.getElementById("span");

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent =
    "Current Time : " +
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);
}

setInterval(time, 1000);

window.btnCompleteClick = btnCompleteClick;
window.btnDeleteClick = btnDeleteClick;