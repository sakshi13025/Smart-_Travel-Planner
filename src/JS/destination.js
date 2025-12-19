const params = new URLSearchParams(window.location.search);

const city = params.get("city");
// console.log(city);

const cityName = document.getElementById("cityName");

let GEODB_API_KEY = "3603acdcf8msh0c263a480c250d6p1eafd4jsn0f14b9d97c0f";
let GEODB_HOST = "wft-geo-db.p.rapidapi.com";

if (city) {
  cityName.textContent = city;

  async function fetchCityDetails(cityName) {
    try {
      let res = await fetch(
        `https://${GEODB_HOST}/v1/geo/cities?namePrefix=${city}&limit=1`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": GEODB_API_KEY,
            "X-RapidAPI-Host": GEODB_HOST,
          },
        }
      );
      console.log(res);

      if (!res.ok) {
        console.log("API Response Not Fetched...");
      }

      let data = await res.json();
      console.log(data);

      if (!data.data || data.data.length === 0) {
        console.log("City Not Found");
      }

      let cityData = data.data[0];
      console.log(cityData);

      // Display City Info
    } catch (error) {
      console.log(error);
    }
  }

  fetchCityDetails(city);
} else {
  cityName.textContent = "Unknown City";
}
