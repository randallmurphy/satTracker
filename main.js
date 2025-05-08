const searchBtn = document.querySelector('#search');
const locationInput = document.querySelector('#location');
const noradSatelliteCode = document.querySelector('#norad');


// const getAPIData = () =>{
//     fetch()



// }
//fetch geocode (geocode.maps.co/search?q={address}  https://geocode.maps.co/search?q=memphis&api_key=681ba5ddc89e1001753104wiudb1ee2)

//fetch url satelite pass http://sat.terrestre.ar/passes/{norad_id  https://sat.terrestre.ar/passes/25544?lat=35.1460249&lon=-90.0517638}


// const satUrl = 'https://sat.terrestre.ar/'
// const satUrlMethod = '/passes/{norad_id}'

searchBtn.addEventListener('click', ()=>{
    fetch((`https://geocode.maps.co/search?q=${encodeURI(locationInput.value)}&ap_key`))
        .then((rawResponse)=>{
            return rawResponse.json();
        })
        .then((response)=>{
            console.log(response[0]);
            return fetch(`https://sat.terrestre.ar/passes/${encodeURI(noradSatelliteCode.value)}?lat=${response[0].lat}&lon=${response[0].lon}`)
        })
        .then((rawResponse)=>{
            return rawResponse.json();
        })
        .then((response)=>{
            console.log(response);
        })
});

// 5. Displaying Information to the User
// Finally, add Javascript to display on the DOM the UTC date/time at which the target satellite will rise, culminate, and set on the horizon. You can display this information wherever you like on the page! You may want to edit the HTML to create a designated "output" area.