const style = `
<style>
    meter::-webkit-meter-bar {
        background: transparent;
        height: 2em;
        border: none;
        border-radius: 0;
    }

    meter {
        width: 10em;
        height: 2em;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\
        <text font-size="100" fill="blue" y=".8em" opacity="0.3">❤️</text>\
        </svg>') 0px center / auto 100%;
    }
    meter::-webkit-meter-optimum-value {
        width: 10em;
        height: 2em;
        background:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\
        <text font-size="100" fill="blue" y=".8em" >❤️</text>\
        </svg>')  0px center / auto 100%;
    }
</style>
`;


customElements.define("awesome-rating", class extends HTMLElement {
    #shadow = this.attachShadow({ mode: "open" });
    
    constructor() {
        super();
    }

    get template() {
        return `<meter min="${this.min}" max="${this.max}" value="${this.value}"></meter>`;
    } 
    
    get min () {
      const value = Number(this.getAttribute("min"));
      if (value <= 0 || Number.isNaN(value) || !Number.isFinite(value)) {
        return 0; // default
      }
      return value;
    }
    set min (newMin) {
        this.setAttribute("min", newMin);
    }

    get max () {
        const value = Number(this.getAttribute("max"));
        if (value <= 0 || Number.isNaN(value)) {
            return 5; // default
        }
        return value;
    }
    set max (newMax) {
        this.setAttribute("max", newMax);
      }
    
  
    get value () {
      const value = Number(this.getAttribute("value"));
      if (value <= 0 || Number.isNaN(value) || !Number.isFinite(value)) {
        return 2; // default
      }
      return value;
    }
    set value (newValue) {
        this.setAttribute("value", newValue);
    }

    #createCode () {
      this.#shadow.innerHTML = `${style} ${this.template}`;
    }
  
    connectedCallback () {
      this.#createCode();
    }
  
    static get observedAttributes () {
      return ["min", "max", "value"];
    }
  
    attributeChangedCallback (name) {
      if (name === "min" || name === "max" || name === "value") {
        this.#createCode();
      }
    }
  });