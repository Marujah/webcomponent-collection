customElements.define("m2-rating", class extends HTMLElement {
    #shadow = this.attachShadow({ mode: "open" });
    
    constructor() {
        super();
    }

    get style() {
      return `
        <style>
            meter::-webkit-meter-bar {
                cursor: pointer;
                background: transparent;
                height: calc(${this.size} * 1em);
                border: none;
                border-radius: 0;
            }
            meter {
                width: calc(${this.max} * ${this.size} * 1em);
                height: calc(${this.size} * 1em);
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\
                <text font-size="100" fill="${this.color.replace('#', '%23')}" y=".8em" opacity="0.3">★</text>\
                </svg>') 0px center / auto 100%;
            }
            meter::-webkit-meter-optimum-value {
                width: calc(${this.max} * ${this.size} * 1em);
                height: calc(${this.size} * 1em);
                background:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\
                <text font-size="100" fill="${this.color.replace('#', '%23')}" y=".8em" >★</text>\
                </svg>')  0px center / auto 100%;
            }
        </style>
      `;
    }

    get template() {
      return `<meter min="${this.min}" max="${this.max}" value="${this.value}"></meter>`;
    } 
    
    get min() {
      const value = Number(this.getAttribute("min"));
      if (value <= 0 || Number.isNaN(value) || !Number.isFinite(value)) {
        return 0; // default
      }
      return value;
    }
    set min(newMin) {
      this.setAttribute("min", newMin);
    }

    get max() {
      const value = Number(this.getAttribute("max"));
      if (value <= 0 || Number.isNaN(value)) {
        return 5; // default
      }
      return value;
    }
    set max(newMax) {
        this.setAttribute("max", newMax);
      }
    
  
    get value() {
      const value = Number(this.getAttribute("value"));
      if (value < 0 || Number.isNaN(value) || !Number.isFinite(value)) {
        return 0; // default
      }
      return value;
    }
    set value (newValue) {
      this.setAttribute("value", newValue);
    }

    get size() {
      const value = Number(this.getAttribute("size"));
      if (value < 1 || Number.isNaN(value) || !Number.isFinite(value) || value > 5) {
        return 1; // default
      }
      return value;
    }
    set size(newSize) {
      this.setAttribute("size", newSize);
    }

    get color() {
      return this.getAttribute("color");
    }
    set color(newColor) {
      this.setAttribute("color", newColor);
    }


    #createCode() {
      this.#shadow.innerHTML = `${this.style} ${this.template}`;
    }
  
    static get observedAttributes() {
      return ["min", "max", "value", "color", "size"];
    }
  
    attributeChangedCallback(name) {
      if (name === "min" || name === "max" || name === "value" || name === "size" || name === "color") {
        this.#createCode();
      }
    }

    #handleClick = (e) => {
      this.dispatchEvent(new CustomEvent('onRatingclick', {
        bubbles: true,
        composed: true,
        detail: {
          width: e.currentTarget.offsetWidth,
          position: e.offsetX,
          ratingNumber: Math.ceil(e.offsetX / (e.currentTarget.offsetWidth / this.max)),
        }
      }));
    }   

    connectedCallback() {
      this.#createCode();
      this.addEventListener('click', this.#handleClick);
    }

    disconnectedCallback() {
      this.removeEventListener('click', this.#handleClick);
    }
  });