fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displaycountryNames(data));

const displaycountryNames = countries => {
    const countriesDiv = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = `countries`
        const countryInfo = `
    <h2 class="C-Name"> ${country.name}</h2>
    <h4 class="C-capital"> ${country.capital}</h4>
    <p class="C-region"> ${country.region}</p>
    <h3 class="C-population"> ${country.population}</h3>
    `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv)
    });
}

// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => displayCountries(data));

// const displayCountries = countries => {
//     const countriesDiv = document.getElementById('countries-container');

//     countries.forEach(country=> {
//         
//         const countryDiv = document.createElement('div');
//         countryDiv.className =  `countries`;
//         const countryInfo =  `
//         <h2 class="C-Name">${country.name}</h2>
//         <h4  class="C-capital">${country.capital}</h4>
//         <p  class="C-region">${country.region}</p>
//         <h5  class="C-population">${country.population}</h5>

//         `
//            countryDiv.innerHTML = countryInfo;
//             countriesDiv.appendChild(countryDiv)

//     });

// }  
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i] ;
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className =  `countries`;
    //     const countryInfo =  `
    //     <h2 class="C-Name">${country.name}</h2>
    //     <h4  class="C-capital">${country.capital}</h4>
    //     <p  class="C-region">${country.region}</p>
    //     <h5  class="C-population">${country.population}</h5>

    //     `
    //        countryDiv.innerHTML = countryInfo;
    //         countriesDiv.appendChild(countryDiv)



        // createElement
    //     const countryName = document.createElement('h2');
    //     countryName.innerText = country.name;
    //     const countryCapital = document.createElement('h4');
    //     countryCapital.innerText = country.capital;
    //     const countryRegion = document.createElement('h5');
    //     countryRegion.innerText = country.region;
    //     const countryPopulation = document.createElement('p');
    //     countryPopulation.innerText = country.population;

    // //    appendChild
    //     countryDiv.appendChild(countryName);
    //     countryDiv.appendChild(countryCapital);
    //     countryDiv.appendChild(countryRegion);
    //     countryDiv.appendChild(countryPopulation);
    //     countriesDiv.appendChild(countryDiv);

