class Character extends HTMLElement {

    static get observedAttributes(){
        return ["species", "gender", "house", "yearOfBirth"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Character/Character.css">
        <p>Species: ${this.species}</p>
        <p>Gender: ${this.gender}</p>
        <p>House: ${this.house}</p>
        <p>Year of birth: ${this.yearOfBirth}</p>
        `
    }
}

customElements.define("my-character", Character);
export default Character;