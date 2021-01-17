
const btn = document.querySelector('.find');
const quote = document.querySelector(".quote-content");
const author = document.querySelector(".quote-author");
// docelowo weather.main
let weather = data.weather[0].main
console.log(`weatherData w quotes.js`, weatherData);

const getFromRonSwanson = async () => {
    try {
        const response = await fetch(
            "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
        )
        if (response.ok) {
            const data = await response.json();
            quote.textContent = data
            author.textContent = "Ron Swanson";
        }
    } catch (error) {
        console.log(`Http error: ${response.status}`);
    }
};

const getFromBreakingBad = async () => {
    try {
        const response = await fetch(
            "https://breaking-bad-quotes.herokuapp.com/v1/quotes",
        );
        if (response.ok) {
            const data = await response.json();
            quote.textContent = data['0'].quote;
            author.textContent = data['0'].author;
        }
    } catch (error) {
        console.log(`Http error: ${response.status}`);;
    }
};
// main button
btn.addEventListener('click', () => CheckWeatherMain(weather));

function CheckWeatherMain(weather) {
    (weather === "Rain" || weather === "Snow") ? getFromRonSwanson(): getFromBreakingBad();
}