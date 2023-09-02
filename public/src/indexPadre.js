import * as components from "./components/indexHijo.js"
import { characterData } from "./data/characterData.js";

class AppContainer extends HTMLElement {

    characters = []

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        characterData.forEach((character) => {
            const characterContainer = this.ownerDocument.createElement("div");
            characterContainer.classList.add("characterContainer")

            const buttonName = this.ownerDocument.createElement("my-button");
            buttonName.setAttribute("name", character.name)
            buttonName.setAttribute("alternate_names", character.alternate_names)
            characterContainer.appendChild(buttonName)

            const myCharacter = this.ownerDocument.createElement("my-character");
            myCharacter.setAttribute("species", character.species);
            myCharacter.setAttribute("gender", character.gender);
            myCharacter.setAttribute("house", character.house);
            myCharacter.setAttribute("yearOfBirth", toString(character.dateOfBirth));
            
            characterContainer.appendChild(myCharacter)

            this.characters.push(characterContainer)
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/index.css">
        <h1>Harry Potter characters:</h1>

        `

        const charactersContainer = this.ownerDocument.createElement("section")
        charactersContainer.classList.add("charactersContainer")

        this.characters.forEach((character) => {
            charactersContainer.appendChild(character)
        })

        this.shadowRoot.appendChild(charactersContainer)
    }
}

customElements.define("app-container", AppContainer);

