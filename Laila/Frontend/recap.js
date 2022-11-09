const weeklyStatusBox = document.getElementById("weeklyStatus");
const weeklyComplianceBox = document.getElementById("weeklyCompliance");
const monthlyStatusBox = document.getElementById("monthlyStatus");
const monthlyComplianceBox = document.getElementById("monthlyCompliance");

getRecap();

function getRecap() {
    fetch(`http://localhost:3001/recap`).then((response) => response.json()).then((data) => displayRecap(data));
}

function displayRecap(data) {
    // Weekly Recap
    for (var date in data['weekly']['status']) {
        // Status
        let weeklyStatus = {
            totalPending: 0,
            totalComplete: 0,
            completionRate: 0
        };

        weeklyStatus['totalPending'] += data['weekly']['status'][date]['Pending'];
        weeklyStatus['totalComplete'] += data['weekly']['status'][date]['Complete'];
        weeklyStatus['completionRate'] = (weeklyStatus['totalComplete'] / (weeklyStatus['totalPending'] + weeklyStatus['totalComplete'])) * 100;

        weeklyStatusBox.innerHTML += `<b>Completion Rate Week Of ${date} :</b>
        <div class="progress">
            <div class="progress-bar" style="width:${weeklyStatus['completionRate']}%">${weeklyStatus['completionRate']}%</div>
        </div>`;

        // Compliance
        let weeklyCompliance = {
            totalPending: 0,
            totalLate: 0,
            totalOnTime: 0,
            onTimeRate: 0
        };

        weeklyCompliance['totalPending'] += data['weekly']['compliance'][date]['Pending'];
        weeklyCompliance['totalLate'] += data['weekly']['compliance'][date]['Late'];
        weeklyCompliance['totalOnTime'] += data['weekly']['compliance'][date]['On Time'];
        weeklyCompliance['onTimeRate'] = (weeklyCompliance['totalOnTime'] / (weeklyCompliance['totalPending'] + weeklyCompliance['totalLate'] + weeklyCompliance['totalOnTime'])) * 100;

        weeklyComplianceBox.innerHTML += `<b>On Time Rate Week Of ${date} :</b>
        <div class="progress">
            <div class="progress-bar" style="width:${weeklyCompliance['onTimeRate']}%">${weeklyCompliance['onTimeRate']}%</div>
        </div>`;

    }
    

    

    // Monthly Recap
    for (var month in data['monthly']['status']) {
        // Status
        let monthlyStatus = {
            totalPending: 0,
            totalComplete: 0,
            completionRate: 0
        };

        monthlyStatus['totalPending'] += data['monthly']['status'][month]['Pending'];
        monthlyStatus['totalComplete'] += data['monthly']['status'][month]['Complete'];
        monthlyStatus['completionRate'] = (monthlyStatus['totalComplete'] / (monthlyStatus['totalPending'] + monthlyStatus['totalComplete'])) * 100;

        monthlyStatusBox.innerHTML += `<b>Completion Rate Month Of ${getMonthName(month)} :</b> 
        <div class="progress">
            <div class="progress-bar" style="width:${monthlyStatus['completionRate']}%">${monthlyStatus['completionRate']}%</div>
        </div>`;

        // Compliance
        let monthlyCompliance = {
            totalPending: 0,
            totalLate: 0,
            totalOnTime: 0,
            onTimeRate: 0
        };

        monthlyCompliance['totalPending'] += data['monthly']['compliance'][month]['Pending'];
        monthlyCompliance['totalLate'] += data['monthly']['compliance'][month]['Late'];
        monthlyCompliance['totalOnTime'] += data['monthly']['compliance'][month]['On Time'];
        monthlyCompliance['onTimeRate'] = (monthlyCompliance['totalOnTime'] / (monthlyCompliance['totalPending'] + monthlyCompliance['totalLate'] + monthlyCompliance['totalOnTime'])) * 100;

        monthlyComplianceBox.innerHTML += `<b>On Time Rate Month Of ${getMonthName(month)} :</b>
        <div class="progress">
            <div class="progress-bar" style="width:${monthlyCompliance['onTimeRate']}%">${monthlyCompliance['onTimeRate']}%</div>
        </div>`;

    }
    
}

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
        month: 'long',
    });
}