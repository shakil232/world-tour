fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries-container');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i] ;
        const countryDiv = document.createElement('div');

        // createElement
        const countryName = document.createElement('h2');
        countryName.innerText = country.name;
        const countryCapital = document.createElement('h4');
        countryCapital.innerText = country.capital;
        const countryRegion = document.createElement('h5');
        countryRegion.innerText = country.region;
        const countryPopulation = document.createElement('p');
        countryPopulation.innerText = country.population;
        
    //    appendChild
        countryDiv.appendChild(countryName);
        countryDiv.appendChild(countryCapital);
        countryDiv.appendChild(countryRegion);
        countryDiv.appendChild(countryPopulation);
        countriesDiv.appendChild(countryDiv);

    }
}