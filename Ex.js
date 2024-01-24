const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';


// // Exercises: Level 1
// // Read the countries API using fetch and print the name of country, capital, languages, population and area.
// fetch(countriesAPI)
//   .then(response => response.json())
//   .then(data => {
//     const countryInfo = data.map(country => ({
//       name: country.name,
//       capital: country.capital,
//       languages: country.languages.map(lang => lang.name).join(', '),
//       population: country.population,
//       area: country.area,
//     }));
//     console.log('Country Information:', countryInfo);
//   })
//   .catch(error => console.error('Error fetching countries API:', error));

// // Exercises: Level 2
// // Print out all the cat names into catNames variable.
// fetch(catsAPI)
//   .then(response => response.json())
//   .then(data => {
//     const catNames = data.map(cat => cat.name);
//     console.log('Cat Names:', catNames);
//   })
//   .catch(error => console.error('Error fetching cats API:', error));

// // Exercises: Level 3
// // Read the cats API and find the average weight of a cat in metric units.
// fetch(catsAPI)
//   .then(response => response.json())
//   .then(data => {
//     const weights = data.map(cat => cat.weight.metric.replace(/[^0-9.]/g, ''));
//     const averageWeight = weights.reduce((sum, weight) => sum + parseFloat(weight), 0) / weights.length;
//     console.log('Average Weight of a Cat:', averageWeight.toFixed(2), 'kg');
//   })
//   .catch(error => console.error('Error fetching cats API:', error));

// // Read the countries API and find out the 10 largest countries
// fetch(countriesAPI)
//   .then(response => response.json())
//   .then(data => {
//     const largestCountries = data.sort((a, b) => b.area - a.area).slice(0, 10);
//     console.log('Top 10 Largest Countries:', largestCountries.map(country => country.name));
//   })
//   .catch(error => console.error('Error fetching countries API:', error));

// // Read the countries API and count the total number of languages in the world used as officials.
// fetch(countriesAPI)
//   .then(response => response.json())
//   .then(data => {
//     const officialLanguages = data.flatMap(country => country.languages);
//     const totalOfficialLanguages = new Set(officialLanguages.map(lang => lang.name));
//     const counts = []
//     console.log('Total Number of Official Languages:', totalOfficialLanguages.size);
   
   
//     for (const l of totalOfficialLanguages)
//     {
//         const filterLang = officialLanguages.filter((lng) => lng.name === l)
//         counts.push({lang: l, count:filterLang.length })
//     }
//     counts.sort((a,b) => {
//       return  b.count - a.count
//     })

//   })
//   .catch(error => console.error('Error fetching countries API:', error));


 // Async await:
  // Exercises: Level 1
// Read the countries API using async/await and print the name of country, capital, languages, population and area.
async function getCountriesInfo() {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    const countryInfo = data.map(country => ({
      name: country.name,
      capital: country.capital,
      languages: country.languages.map(lang => lang.name).join(', '),
      population: country.population,
      area: country.area,
    }));
    console.log('Country Information:', countryInfo);
  } catch (error) {
    console.error('Error fetching countries API:', error);
  }
}


// Exercises: Level 2
// Print out all the cat names into catNames variable using async/await.
async function getCatNames() {
  try {
    const response = await fetch(catsAPI);
    const data = await response.json();
    const catNames = data.map(cat => cat.name);
    console.log('Cat Names:', catNames);
  } catch (error) {
    console.error('Error fetching cats API:', error);
  }
}


// Exercises: Level 3
// Read the cats API and find the average weight of a cat in metric units using async/await.
async function getAverageWeight() {
  try {
    const response = await fetch(catsAPI);
    const data = await response.json();
    const weights = data.map(cat => parseFloat(cat.weight.metric.replace(/[^0-9.]/g, '')));
    const averageWeight = weights.reduce((sum, weight) => sum + weight, 0) / weights.length;
    console.log('Average Weight of a Cat:', averageWeight.toFixed(2), 'kg');
  } catch (error) {
    console.error('Error fetching cats API:', error);
  }
}


// Read the countries API and find out the 10 largest countries using async/await
async function getTop10LargestCountries() {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    const largestCountries = data.sort((a, b) => b.area - a.area).slice(0, 10);
    console.log('Top 10 Largest Countries:', largestCountries.map(country => country.name));
  } catch (error) {
    console.error('Error fetching countries API:', error);
  }
}


// Read the countries API and count the total number of languages in the world used using async/await.
async function getTotalOfficialLanguages() {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    const officialLanguages = data.flatMap(country => country.languages.filter(lang => lang));
    const totalOfficialLanguages = new Set(officialLanguages.map(lang => lang.name)).size;
    console.log('Total Number of Official Languages:', totalOfficialLanguages);
  } catch (error) {
    console.error('Error fetching countries API:', error);  
  }
}

// setTimeout(() => {
  
//   getCountriesInfo();
//   getCatNames();
//   getAverageWeight();
//   getTop10LargestCountries();
//   getTotalOfficialLanguages();

// })

function fetchDataFromCatApi() {
  return fetch(catsAPI)
    .then(response => response.json());
}

function fetchDataFromCountryApi() {
  return fetch(countriesAPI)
    .then(response => response.json());
}

Promise.all([
  fetchDataFromCatApi(),
  fetchDataFromCountryApi()
])
  .then(([catData, countryData]) => {
    // console.log('Cat API Data:', catData);
    // console.log('Country API Data:', countryData);

  })
  .catch((error) => {
    console.error('Error loading data:', error);
  });

Promise.any([
  fetchDataFromCatApi(),
  fetchDataFromCountryApi()
])
  .then(([catData, countryData]) => {
    console.log('First data resolved:');
  })
  .catch((errors) => {
    console.error('All promises rejected:', errors);
  });
