let input = document.querySelector('input');   
let datalist = document.querySelector('datalist');

 fetch('city_pol.txt')
    .then (response => response.text())
    .then(text => { 
        let citiesNames = text.split("\n");

        let citiesNamesWithoutDuplicates = [...new Set(citiesNames)];
        let citiesNamesUpperCase = [];
        

        citiesNamesWithoutDuplicates.forEach(function(obj) {
            citiesNamesUpperCase.push(obj.toUpperCase());
        });
           
        inputAutocomplete(citiesNamesUpperCase);
        
    })
    .catch(err => {
        console.log('Request Failed', err); 
        alert("Autouzupełnianie miast nie działa");
    });

function cleanInputOptions(node) {
    while(node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}

function inputAutocomplete(citiesNamesUpperCase) {
    input.addEventListener("keyup", (e) => {
        cleanInputOptions(datalist);

        if (e.target.value.length >= 2)  {
            citiesNamesUpperCase.forEach(function(name)  {    
                let newOption = document.createElement('option');
                if(name.startsWith(e.target.value.toUpperCase()) ) {
                    datalist.appendChild(newOption).setAttribute('value', `${name.slice(0, -1)}`);
                }
            })
        }
    })
}