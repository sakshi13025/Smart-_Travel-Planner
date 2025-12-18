const params = new URLSearchParams(window.location.search);

const city = params.get("city");
console.log(city);


const cityName = document.getElementById("cityName");

if (city) {
    cityName.textContent = city;
} else {
cityName.textContent = "Unknown City";
}
