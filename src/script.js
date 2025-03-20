const submitSearchStringBtn = document.querySelector("#searchStringSubmitBtn");
const inputSearchString = document.querySelector("#searchString");

submitSearchStringBtn.addEventListener("click" , (event) => { 
    searchForLocation(event);
});

function searchForLocation(e) {
    e.preventDefault();
    const searchStringValue = inputSearchString.value;
    if(searchStringValue === ""){console.log('Enter your location properly please!')};

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchStringValue}?unitGroup=metric&key=6EBFYHXCYGNQCBRL8TTF9SXJE`;

    const s = performance.now();
    fetch(url , {mode: 'cors'})
    .then(response => {
        const e = performance.now();
        console.log(`${e - s} in milliSeconds`)
        const data = response.json();
        console.log(data);
    })
    .catch(error => console.log(error));
}