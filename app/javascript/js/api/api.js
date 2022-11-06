// Import file
import { tempText, cloudType } from "../client/index.js";


// Initialize variable here

// Code begins here


const getLocation = async (cityName, countryName) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea53a94d9emsh6d22b5b6656a0bdp124964jsn4c493cc8e191',
            'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
        }
    };
    console.log(cityName, countryName);
    
    const res = await (await fetch(`https://aerisweather1.p.rapidapi.com/observations/${cityName},fr`, options)).json();
    

    // Get lat and lon
    let lat = res.response["loc"]["lat"];
    let lon = res.response["loc"]["long"];

    readWeatherApi(lat, lon);

}
const readWeatherApi = async (lat, lon) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea53a94d9emsh6d22b5b6656a0bdp124964jsn4c493cc8e191',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };
    
    const response = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lon}&lat=${lat}`, options);
    const json = await response.json();
    // Get temp and cloudtype

    let getData = []
    
    for (let data of json.data) {
        getData.push(data.temp);
        getData.push(data.weather["description"]);
        
    }

    let [temp, weatherCondition] = getData;

    tempText.innerText = `${temp} Cesius`;
    cloudType.innerText = weatherCondition;

    

    
    
}
// Export here

export { getLocation, readWeatherApi };