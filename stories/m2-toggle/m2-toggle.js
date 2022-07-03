customElements.define("m2-toggle", class extends HTMLElement {
    #shadow = this.attachShadow({ mode: "open" });
    get style() {
        return `
            <style>
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 60px;
                    height: 34px;
                    margin: 0 auto;
                }
                .switch input {
                    display: none;
                }
                .switch .slider:before {
                    position: absolute;
                    content: "";
                    height: 26px;
                    width: 26px;
                    left: 4px;
                    bottom: 4px;
                    background-color: #FFFFFF;
                    transition: .4s;
                }
                .switch input:checked+.slider:before {
                    transform: translateX(26px);
                }
                .switch input:checked+.slider {
                    background-color: #449d44;
                }
                .switch .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #a25f5e;
                    transition: .4s;
                }
                .switch .slider.round:before {
                    border-radius: 50%;
                }
                .switch .slider.round {
                    border-radius: 34px;
                }					
            </style>
        `;
      }
  
      get template() {
        return `
            <label class="switch">
                <input type="checkbox">
                <div class="slider round"></div>
            </label>
        `;
      } 
      
    
    #handleClick() {
        return null;
    }
  
    #addEvents () {
      this.addEventListener("click", this.#handleClick);
    }
  
    #removeEvents () {
      this.removeEventListener("click", this.#handleClick);
    }

    #createCode() {
        this.#shadow.innerHTML = `${this.style} ${this.template}`;
    }
  
    static get observedAttributes () {
      return [""];
    }
  
    attributeChangedCallback (name, oldValue, newValue) {
      if (name === "") {
        return this;
      }
    }
  
    connectedCallback () {
        this.#createCode();
        this.#addEvents();
    }
  
    disconnectedCallback () {
      this.#removeEvents();
    }
  
  });