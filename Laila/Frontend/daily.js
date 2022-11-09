const box = document.getElementById("todaybox");

getTodayList();

function getTodayList() {
    fetch(`http://localhost:3001/list/today`).then((response) => response.json()).then((data) => displayTodos(data));
}

function displayTodos(data) {

    box.innerHTML = "";

    data.forEach(function (value, index) {

        let items = ``;

        items += `
        <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
            <div class="form-check">
                <input class="form-check-input me-0" type="checkbox" value="" aria-label="..." ${value.status == "Complete" ? 'checked' : ''} disabled />
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
                        Complete Task
                    </p>
                </div>
            </li>`;
        } else {
            items += `
            <li onClick="btnDeleteClick(${value.id})" class="list-group-item p-0 d-flex align-items-center border-0 bg-transparent">
                <div class="btn btn-primary rounded-3 d-flex align-items-center">
                    <p class="small mb-0">
                        Delete Task
                    </p>
                </div>
            </li>
            `
        }

        box.innerHTML += `<ul class="list-group list-group-horizontal rounded-0">${items}</ul>`;

    });
}

function btnCompleteClick(id) {
    fetch(`http://localhost:3001/list/${id}`, {
        'method': 'PUT',
        'headers': {
          'accept': '*/*',
          'content-type': 'application/json'
        }
    });

    getTodayList();
}
