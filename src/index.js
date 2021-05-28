console.log("Hello webpack!");

const fancyFunc = () => {
  console.log('inside funct');
  return [1, 2];
};

// document.getElementById('button').onclick = () =>{
//   console.log('button clicked');
// }

const [a, b] = fancyFunc();
console.log(a, b);


class SampleComponent extends HTMLElement {

  
  constructor() {
    super(); 
    shadowRoot = this.attachShadow({mode: 'open'});
    const demo = `
    <h1>Hello webpack!</h1>
    <button id="button">Click me</button>
    `
    this.render(demo)
  }


  connectedCallback() {
    this.shadowRoot.getElementById('button').onclick = () =>{
        console.log('button clicked');
      }
  }

  render(source){
    this.shadowRoot.innerHTML = source
  }

}

customElements.define('sample-comp', SampleComponent);