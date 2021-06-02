import 'regenerator-runtime/runtime'

window.addEventListener('load',()=>{
  fetchpoke();
  
});


async function fetchpoke(){
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20');
  const json = await response.json();

  //console.log(json.results);
  //pokemons = json.results;

  const main = document.querySelector('main')


  json.results.forEach(element => {
    const PokemonCard = document.createElement("poke-cards")
    PokemonCard.element = element;
    //console.log(element);
    const details = element.url;

    main.appendChild(PokemonCard);
    fetch_ability();
    async function fetch_ability(){
      const response = await fetch(details);
      const json = await response.json();
      const ability = json.abilities;
      console.log(ability[1])
    }
  });
}


class PokemonDetails extends HTMLElement{


  set element(element){
    this.innerHTML=`
      <div>
      <p>${element.name}</p>
      <ul>
      <li>${element.url}</li>
      </ul>
      </div>
      
    `
  }


}


customElements.define('poke-cards',PokemonDetails);