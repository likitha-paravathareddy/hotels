// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'fc6a1cd463msh5d64427a724172ap11a71djsn7e4d46557571',
//         'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
//     }
// };

//     // var fromplace = document.getElementById('fromplace').value;
//     // var toplace = document.getElementById('toplace').value;
//     // var date = document.getElementById('date').value;
    
// function checkflight()
// {
//     var fromplace = document.getElementById('fromplace').value;
//     var toplace = document.getElementById('toplace').value;
//     var date = document.getElementById('date').value;
//     var url = 'https://timetable-lookup.p.rapidapi.com/TimeTable/' + fromplace + '/' + toplace + '/' + date + '/';

//     fetch(url, options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             const p = document.createElement('P')

//         })
//         .catch(err => console.error(err));
// }


$(document).ready(function(){
    function checkflight() {
        const endpoint = 'http://api.aviationstack.com/v1/flights';// API access key
        const accessKey = 'b8fa758dd01dc4e3c8a4d792363057ca';// Origin and destination airports
        const fromplace = document.getElementById('fromplace').value;
        const toplace = document.getElementById('toplace').value;// Date of the flight (YYYY-MM-DD format)
        const date = '2023-02-20';// Construct the API URL with query parameters
        const apiUrl = `${endpoint}?access_key=${accessKey}&dep_iata=${origin}&arr_iata=${destination}&flight_date=${date}`;// Use the Fetch API to retrieve flight schedule data
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        // Use the flight schedule data
        console.log(data);
        })
        .catch(error => console.error(error));
    }
});

