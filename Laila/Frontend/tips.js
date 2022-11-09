const rate = document.getElementById("Rate");
const tips = document.getElementById("Tips");

getRecap();

function getRecap() {
    fetch(`http://localhost:3001/recap`).then((response) => response.json()).then((data) => displayTips(data));
}

function displayTips(data) {

    let weeklyStatus = {
        totalPending: 0,
        totalComplete: 0,
        completionRate: 0
    };

    let weeklyCompliance = {
        totalPending: 0,
        totalLate: 0,
        totalOnTime: 0,
        onTimeRate: 0
    };

    for (var date in data['weekly']['status']) {
        // Status
        weeklyStatus['totalPending'] += data['weekly']['status'][date]['Pending'];
        weeklyStatus['totalComplete'] += data['weekly']['status'][date]['Complete'];
        weeklyStatus['completionRate'] = (weeklyStatus['totalComplete'] / (weeklyStatus['totalPending'] + weeklyStatus['totalComplete'])) * 100;

        // Compliance    
        weeklyCompliance['totalPending'] += data['weekly']['compliance'][date]['Pending'];
        weeklyCompliance['totalLate'] += data['weekly']['compliance'][date]['Late'];
        weeklyCompliance['totalOnTime'] += data['weekly']['compliance'][date]['On Time'];
        weeklyCompliance['onTimeRate'] = (weeklyCompliance['totalOnTime'] / (weeklyCompliance['totalPending'] + weeklyCompliance['totalLate'] + weeklyCompliance['totalOnTime'])) * 100;

    }

    let monthlyStatus = {
        totalPending: 0,
        totalComplete: 0,
        completionRate: 0
    };

    let monthlyCompliance = {
        totalPending: 0,
        totalLate: 0,
        totalOnTime: 0,
        onTimeRate: 0
    };
    // Monthly Recap
    for (var month in data['monthly']['status']) {
        // Status
        monthlyStatus['totalPending'] += data['monthly']['status'][month]['Pending'];
        monthlyStatus['totalComplete'] += data['monthly']['status'][month]['Complete'];
        monthlyStatus['completionRate'] = (monthlyStatus['totalComplete'] / (monthlyStatus['totalPending'] + monthlyStatus['totalComplete'])) * 100;

        // Compliance
        monthlyCompliance['totalPending'] += data['monthly']['compliance'][month]['Pending'];
        monthlyCompliance['totalLate'] += data['monthly']['compliance'][month]['Late'];
        monthlyCompliance['totalOnTime'] += data['monthly']['compliance'][month]['On Time'];
        monthlyCompliance['onTimeRate'] = (monthlyCompliance['totalOnTime'] / (monthlyCompliance['totalPending'] + monthlyCompliance['totalLate'] + monthlyCompliance['totalOnTime'])) * 100;

    }

    rate.innerHTML += `
        <ul style="list-style: none">
            <li>Total All Week Completion Rate : ${weeklyStatus['completionRate']}%</li>
            <li>Total All Week Compliance Rate : ${weeklyCompliance['onTimeRate']}%</li>
            <li></li>
            <li>Total All Month Completion Rate : ${monthlyStatus['completionRate']}%</li>
            <li>Total All Month Compliance Rate : ${monthlyCompliance['onTimeRate']}%</li>
        </ul>`;

    tips.innerHTML += `
        <ul style="list-style: none">
            <li><b>Week Tips : ${getTips(weeklyStatus['completionRate'], weeklyCompliance['onTimeRate'])}</b></li>
            <li><b>Month Tips : ${getTips(monthlyStatus['completionRate'], monthlyCompliance['onTimeRate'])}</b></li>
        </ul>`;
}

function getTips(status, compliance) {
    if (status <= 25) {
        if (compliance <= 25) {
            return "Keep Opening the App and Write all Your Tasks";
        } else if (compliance <= 50) {
            return "Complete More Tasks by Checking the Daily Task page";
        } else if (compliance <= 75) {
            return "Great You Can Start Early for Tasks and Complete them when you Have Time";
        } else {
            return "You are Efficient on Time you can Use the Extra Time you have and Complete More Tasks";
        }
    } else if (status <= 50) {
        if (compliance <= 25) {
            return "Its a Start But You can do Better Try Opening the Web more Consistently";
        } else if (compliance <= 50) {
            return "Not Bad Theres More to Go make a Time Everyday to Organize and See what Tasks For Today";
        } else if (compliance <= 75) {
            return "You Know how to Manage your Time what you Need is More Focus to Complete Tasks";
        } else {
            return "You are Great on Time Management than Ever now Start Making more Time to Complete your Tasks";
        }
    } else if (status <= 75) {
        if (compliance <= 25) {
            return "You Completed Most of Your Task But Not On Time you Should Organize More and Do a Time Management";
        } else if (compliance <= 50) {
            return "You Completed Most of Your Task and Is Doing quite Okay on The Time Keep Managing the Time Management and Do a Priority List";
        } else if (compliance <= 75) {
            return "You Completed Most of Your Task and doing Quite Great! Improvement Never Hurts though";
        } else {
            return "Now What you need is To Complete More Task and You are Going for a Fast Track!";
        }
    } else {
        if (compliance <= 25) {
            return "You Completed A Lot of Task Just not On Time :( Maybe You Can Try and Organize your Time do the Important Task First and make it On Time!";
        } else if (compliance <= 50) {
            return "You Completed A Lot of Task Just Not so Effectively Maybe make a Schedule and Book Time to Complete Tasks";
        } else if (compliance <= 75) {
            return "You Completed A Lot of Task And Mostly On Time This is Great but There is Still Some Room for Improvement :)";
        } else {
            return "You Are Amazing!";
        }
    }
}