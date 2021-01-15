// autouzupelnianie miasta
function getCity() {
    var options = {
    types: ['(cities)'],
    componentRestrictions: {
        country: "pol"
    }};
    var input = document.getElementById('searchTextField');
    var autocomplete = new google.maps.places.Autocomplete(input, options);
}
google.maps.event.addDomListener(window, 'load', getCity);
const btn = document.getElementById("searchPlaceBtn");
btn.addEventListener("click", function(){
    var city = document.getElementById("searchTextField").value;
    console.log(city);
})

// autolokalizacja
const localization = {location: {lat: 0, lng: 0}, formatted_address: ""}
      const KEY = "AIzaSyDyXP9UaV5zNdPtmkW2jF8_SwCiH8-QSms"
      let findMebtn = document.getElementById("FindMeBtn");
      let foramttedAdressParagraph = document.getElementById("info");
      findMebtn.addEventListener("click",getLocation);
 
      // sprawdzam dlugosc i szerokosc geograficzna, a nastepnie wrzucam je google maps api
      function showPosition(position) {
        const LAT = position.coords.latitude;
        const LNG = position.coords.longitude;
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${KEY}`;
        fetch(url)
        .then(response => response.json() )
        .then(data => {
          // console.log(data);
          Object.assign(localization, {location: data.results[0].geometry.location, formatted_address: data.results[0].formatted_address});
          foramttedAdressParagraph.innerHTML = localization.formatted_address;  
        })
        .catch(err => console.warn("wystapil problem"))   
      }
      function getLocation(){
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition) : console.log("Brak wspracia wykrywania geolokalizacji w tej przeglądarce");
        console.log(localization);
      }