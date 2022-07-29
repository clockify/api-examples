const api_key = 'YOUR API KEY' // Replace with your API key
const workspace_id = "YOUR WORKSPACE ID" // Replace with your workspace id

const yearFilter = {
    "dateRangeStart": "2022-01-01T00:00:00.000",
    "dateRangeEnd": "2022-12-31T23:59:59.000",
    "summaryFilter": {
        "groups": [
            "USER",
        ],
    }
}

async function yearsClockifyReports() {
    const response = await fetch('https://reports.api.clockify.me/v1/workspaces/' + workspace_id + '/reports/summary', {
        headers: {
            'X-Api-Key': api_key,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(yearFilter)
    })
    const reports = await response.json()
    return reports
}

function main() {
    const yearReport = await yearsClockifyReports()
    console.log(yearReport)
}