const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const tips = require("./tips.json");

let todoList = [];

app.use(bodyParser.json());
app.use(cors());
app.use("/", express.static(__dirname));

// Web
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/todo", (req, res) => {
  res.sendFile("todo.html", { root: __dirname });
});

app.get("/recap", (req, res) => {
  res.sendFile("recap.html", { root: __dirname });
});

app.get("/tips", (req, res) => {
  res.sendFile("tips.html", { root: __dirname });
});

app.get("/calendar", (req, res) => {
  res.sendFile("calendar.html", { root: __dirname });
});

// API
app.post("/api/set-todo", (req, res) => {
  const localTodo = req.body.localTodo;

  todoList = [...localTodo];

  res.send("ok");
});

app.get("/api/list", (req, res) => {
  const filter = req.query.filter;

  res.send(
    todoList.filter(function (x) {
      return x.status == filter || filter === "All";
    })
  );
});

app.get("/api/list/:id", (req, res) => {
  const id = req.params.id;

  res.send(
    todoList.filter(function (x) {
      return x.id == id;
    })[0]
  );
});

app.get("/api/today", (req, res) => {
  const today = new Date();
  const stringToday = `${("0" + today.getDate()).slice(-2)}/${(
    "0" +
    (today.getMonth() + 1)
  ).slice(-2)}/${today.getFullYear()}`;

  res.send(
    todoList.filter(function (x) {
      return x.date.split(" ")[0] == stringToday;
    })
  );
});

app.post("/api/list", (req, res) => {
  const todo = req.body;

  todoList.push({
    id: todoList.length + 1,
    title: todo.title,
    date: todo.date,
    status: "Pending",
    compliance: "Pending",
  });

  res.send("ok");
});

app.post("/api/list/:id", (req, res) => {
  const id = req.params.id;
  const todo = req.body;

  todoList.forEach((value, index) => {
    if (value.id == id) {
      value.title = todo.title;
      value.date = todo.date;
    }
  });

  res.send("ok");
});

app.put("/api/list/:id", (req, res) => {
  const id = req.params.id;
  const today = new Date();

  todoList.forEach((element, index) => {
    if (element.id == id) {
      todoList[index].status = "Complete";

      const dates = element.date.split(" ");
      let todoDate = new Date(
        dates[0].split("/")[2],
        dates[0].split("/")[1] - 1,
        dates[0].split("/")[0],
        dates[1].split(":")[0],
        dates[1].split(":")[1],
        dates[1].split(":")[2],
        0
      );

      if (today.getTime() <= todoDate.getTime()) {
        todoList[index].compliance = "On Time";
      } else {
        todoList[index].compliance = "Late";
      }
    }
  });

  res.send("ok");
});

app.delete("/api/list/:id", (req, res) => {
  const id = req.params.id;

  todoList.forEach((element, index) => {
    if (element.id == id) {
      todoList.splice(index, 1);
    }
  });

  res.send("ok");
});

app.get("/api/recap", (req, res) => {
  let result = {
    weekly: {
      status: {},
      compliance: {},
    },
    monthly: {
      status: {},
      compliance: {},
    },
  };
  const today = new Date();

  // Weekly
  let firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  for (
    let i = new Date(firstDay.getTime());
    i < lastDay;
    i.setDate(i.getDate() + 7)
  ) {
    let endOfWeekDate = new Date(i.getTime());
    endOfWeekDate.setDate(endOfWeekDate.getDate() + 7);

    const startWeek = `${("0" + i.getDate()).slice(-2)}/${(
      "0" +
      (i.getMonth() + 1)
    ).slice(-2)}/${i.getFullYear()}`;

    todoList.forEach((todo, index) => {
      const dates = todo.date.split(" ");
      let todoDate = new Date(
        dates[0].split("/")[2],
        dates[0].split("/")[1] - 1,
        dates[0].split("/")[0],
        dates[1].split(":")[0],
        dates[1].split(":")[1],
        dates[1].split(":")[2],
        0
      );
      if (
        todoDate.getTime() >= i.getTime() &&
        todoDate.getTime() < endOfWeekDate.getTime()
      ) {
        if (
          result["weekly"]["status"][startWeek] == undefined ||
          result["weekly"]["compliance"][startWeek] == undefined
        ) {
          result["weekly"]["status"][startWeek] = {
            Pending: 0,
            Complete: 0,
          };

          result["weekly"]["compliance"][startWeek] = {
            Pending: 0,
            Late: 0,
            "On Time": 0,
          };
        }
        result["weekly"]["status"][startWeek][todo.status]++;
        result["weekly"]["compliance"][startWeek][todo.compliance]++;
      }
    });
  }

  // Monthly
  let firstDayYear = new Date(today.getFullYear(), 0, 1);
  let lastDayYear = new Date(today.getFullYear(), 11, 1);

  for (
    let i = new Date(firstDayYear.getTime());
    i <= lastDayYear;
    i.setMonth(i.getMonth() + 1)
  ) {
    todoList.forEach((todo, index) => {
      let todoMonth = todo.date.split(" ")[0].split("/")[1];

      if (todoMonth == i.getMonth() + 1) {
        if (
          result["monthly"]["status"][todoMonth] == undefined ||
          result["monthly"]["compliance"][todoMonth] == undefined
        ) {
          result["monthly"]["status"][todoMonth] = {
            Pending: 0,
            Complete: 0,
          };
          result["monthly"]["compliance"][todoMonth] = {
            Pending: 0,
            Late: 0,
            "On Time": 0,
          };
        }
        result["monthly"]["status"][todoMonth][todo.status]++;
        result["monthly"]["compliance"][todoMonth][todo.compliance]++;
      }
    });
  }

  res.send(result);
});

app.post("/api/tips", (req, res) => {
  const score = req.body;

  for (stats in tips) {
    if (score.status <= stats) {
      for (compliance in tips[stats]) {
        if (score.compliance <= compliance) {
          res.send(tips[stats][compliance]);

          return;
        }
      }
    }
  }
});

app.listen(3001, () => {
  console.log("Server Started on Port 3001");
});
