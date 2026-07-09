const API_KEY = "aab108fe8f290daf0565265f0b126d81";

// =========================
// Fetch Weather
// =========================

async function getWeather(city) {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        updateWeather(data);

    }

    catch (error) {

        alert("City not found!");

        console.error(error);

    }

}

// =========================
// Update UI
// =========================

function updateWeather(data) {

    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const wind = Math.round(data.wind.speed);

    document.getElementById("city").textContent =
        data.name + ", " + data.sys.country;

    document.getElementById("temperature").textContent =
        temp + "°C";

    document.getElementById("condition").textContent =
        data.weather[0].description;

    document.getElementById("humidity").textContent =
        humidity + "%";

    document.getElementById("wind").textContent =
        wind + " km/h";

    document.getElementById("pressure").textContent =
        pressure + " hPa";

    document.getElementById("feelsLike").textContent =
        feelsLike + "°C";

    const icon = data.weather[0].icon;

    document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${icon}@4x.png`;

    updateDateTime();

}

// =========================
// Date & Time
// =========================

function updateDateTime() {

    const now = new Date();

    const options = {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric",

        hour: "numeric",

        minute: "2-digit"

    };

    document.getElementById("date").textContent =
        now.toLocaleString("en-US", options);

}

// =========================
// Search Button
// =========================

document.getElementById("searchBtn").addEventListener("click", () => {

    const city =
        document.getElementById("cityInput").value.trim();

    if (city !== "") {

        getWeather(city);

    }

});

// =========================
// Enter Key
// =========================

document.getElementById("cityInput").addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        document.getElementById("searchBtn").click();

    }

});

// =========================
// Default Weather
// =========================

getWeather("Bengaluru");