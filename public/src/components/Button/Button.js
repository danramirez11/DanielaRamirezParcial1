class Button extends HTMLElement {

    static get observedAttributes(){
        return ["name", "alternate_names"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.onButtonClicked = this.onButtonClicked.bind(this)
        const actualName = this.name;
        
    }

    connectedCallback(){
        this.changeName();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.changeName();
    }

    changeName(){
        this.render();
        this.addEventListeners();
    }

    addEventListeners(){
        this.shadowRoot.querySelector("button").addEventListener("click", this.onButtonClicked)
    }

    onButtonClicked(){
        let clicked = false;

        if (clicked) {
            clicked = false;
            this.shadowRoot.querySelector(".name").classList.add("hide")
            this.shadowRoot.querySelector(".alt").classList.add("show")
        } else {
            clicked = true;
            this.shadowRoot.querySelector(".name").classList.add("show")
            this.shadowRoot.querySelector(".alt").classList.add("hide")
        }
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Button/Button.css">
        <h3 class="name">${this.name}</h3>
        <h3 class="alt">${this.alternate_names}</h3>
        <button>Other names</button>
        `
    }
}

customElements.define("my-button", Button)
export default Button;