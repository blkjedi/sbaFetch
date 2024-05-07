console.log("hello world");





document.addEventListener('DOMContentLoaded', () => {
  const pokeIdInput = document.getElementById('pokeId');
  const searchBtn = document.getElementById('searchBtn');
  const postContainer = document.getElementById('postContainer');
  searchBtn.addEventListener('click', () => {
    console.log('Search button clicked');
    const pokeId = pokeIdInput.value;
    const request = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
  const json = await response.json();
  console.log(json);
  const pokeName = `<h1>You caught a   ${json.name}</h1> `
  const pokeHeight = `<p>Its height is  ${json.height}</p>`
  const pokeWeight = `<p>Its weight is  ${json.weight}</p>`
postContainer.innerHTML = pokeName + pokeHeight + pokeWeight ;
}

request();
     
    
  });
});
