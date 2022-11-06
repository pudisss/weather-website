// Import file 
import { getLocation, readWeatherApi } from "../api/api.js";

// Initialize variable here 
const input = document.getElementById("inputCityName");
const submitButton = document.getElementById("submit");
const cityNameText = document.getElementById("cityName");
const countryNameText = document.getElementById("countryName");
const tempText = document.getElementById("temp");
const tempImage = document.getElementById("temp-image");
const cloudType = document.getElementById("cloudType");
// Code begin here

document.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        enterPress();
    }
})
submitButton.addEventListener("click", () => {
    enterPress();

    

});

// Main function

const enterPress = () => {
    let inputText = input.value;

    
    checkCapitalization(inputText);
}



const checkCapitalization = (str) => {
    // Initialize variable here 
    
    let [cityName, countryName] = str.split(", ");

    cityNameText.innerText = cityName;
    countryNameText.innerText = countryName.toUpperCase();


    


    getLocation(cityName.toLowerCase(), countryName.toLowerCase());
    
}

// Export here

export { tempText, cloudType}; 