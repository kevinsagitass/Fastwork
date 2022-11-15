const rate = document.getElementById("Rate");
const tips = document.getElementById("Tips");

getRecap();

function getRecap() {
  fetch(`http://localhost:3001/recap`)
    .then((response) => response.json())
    .then((data) => displayTips(data));
}

// Function to Display Tips
async function displayTips(data) {
  let weeklyStatus = {
    totalPending: 0,
    totalComplete: 0,
    completionRate: 0,
  };

  let weeklyCompliance = {
    totalPending: 0,
    totalLate: 0,
    totalOnTime: 0,
    onTimeRate: 0,
  };

  for (var date in data["weekly"]["status"]) {
    // Status
    weeklyStatus["totalPending"] += data["weekly"]["status"][date]["Pending"];
    weeklyStatus["totalComplete"] += data["weekly"]["status"][date]["Complete"];
    weeklyStatus["completionRate"] =
      (weeklyStatus["totalComplete"] /
        (weeklyStatus["totalPending"] + weeklyStatus["totalComplete"])) *
      100;

    // Compliance
    weeklyCompliance["totalPending"] +=
      data["weekly"]["compliance"][date]["Pending"];
    weeklyCompliance["totalLate"] += data["weekly"]["compliance"][date]["Late"];
    weeklyCompliance["totalOnTime"] +=
      data["weekly"]["compliance"][date]["On Time"];
    weeklyCompliance["onTimeRate"] =
      (weeklyCompliance["totalOnTime"] /
        (weeklyCompliance["totalPending"] +
          weeklyCompliance["totalLate"] +
          weeklyCompliance["totalOnTime"])) *
      100;
  }

  let monthlyStatus = {
    totalPending: 0,
    totalComplete: 0,
    completionRate: 0,
  };

  let monthlyCompliance = {
    totalPending: 0,
    totalLate: 0,
    totalOnTime: 0,
    onTimeRate: 0,
  };
  // Monthly Recap
  for (var month in data["monthly"]["status"]) {
    // Status
    monthlyStatus["totalPending"] +=
      data["monthly"]["status"][month]["Pending"];
    monthlyStatus["totalComplete"] +=
      data["monthly"]["status"][month]["Complete"];
    monthlyStatus["completionRate"] =
      (monthlyStatus["totalComplete"] /
        (monthlyStatus["totalPending"] + monthlyStatus["totalComplete"])) *
      100;

    // Compliance
    monthlyCompliance["totalPending"] +=
      data["monthly"]["compliance"][month]["Pending"];
    monthlyCompliance["totalLate"] +=
      data["monthly"]["compliance"][month]["Late"];
    monthlyCompliance["totalOnTime"] +=
      data["monthly"]["compliance"][month]["On Time"];
    monthlyCompliance["onTimeRate"] =
      (monthlyCompliance["totalOnTime"] /
        (monthlyCompliance["totalPending"] +
          monthlyCompliance["totalLate"] +
          monthlyCompliance["totalOnTime"])) *
      100;
  }

  rate.innerHTML += `
        <ul style="list-style: none">
            <li>Total All Week Completion Rate : ${weeklyStatus["completionRate"]}%</li>
            <li>Total All Week Compliance Rate : ${weeklyCompliance["onTimeRate"]}%</li>
            <li></li>
            <li>Total All Month Completion Rate : ${monthlyStatus["completionRate"]}%</li>
            <li>Total All Month Compliance Rate : ${monthlyCompliance["onTimeRate"]}%</li>
        </ul>`;

  tips.innerHTML += `
        <ul style="list-style: none">
            <li><b>Week Tips : ${await getTips(
              weeklyStatus["completionRate"],
              weeklyCompliance["onTimeRate"]
            )}</b></li>
            <li><b>Month Tips : ${await getTips(
              monthlyStatus["completionRate"],
              monthlyCompliance["onTimeRate"]
            )}</b></li>
        </ul>`;
}

// Function to Get Tips from Backend with Status and Compliance Send by Weekly and Monthly
async function getTips(status, compliance) {
  var tips = "";

  const res = await fetch("http://localhost:3001/tips", {
    method: "POST",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      status: status,
      compliance: compliance,
    }),
  });

  tips = await res.text();

  return tips;
}
