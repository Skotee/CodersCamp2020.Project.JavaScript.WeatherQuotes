/* eslint-disable */
const btn = document.querySelector(".find");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
// docelowo weather.main
let weather = "Snow";

// main button
btn.addEventListener("click", () => CheckWeatherMain(weather));

export const getFromRonSwanson = async () => {
  try {
    const response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    if (response.ok) {
      const data = await response.json();

      return {
        quote: data,
        author: "Ron Swanson",
      };
    }
  } catch (error) {
    console.log(`Http error: ${response.status}`);
    return {
      quote: "",
      author: "",
    };
  }
};

export const getFromBreakingBad = async () => {
  try {
    const response = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    if (response.ok) {
      const data = await response.json();
      return {
        quote: data["0"].quote,
        author: data["0"].author,
      };
    }
  } catch (error) {
    console.log(`Http error: ${response.status}`);
    return {
      quote: "",
      author: "",
    };
  }
};

export async function CheckWeatherMain(weather) {
  return weather === "Rain" || weather === "Snow"
    ? await getFromRonSwanson()
    : await getFromBreakingBad();
}

export function displayQuotes(quote, content, author) {
  content.textContent = quote.quote;
  author.textContent = quote.author;
}
