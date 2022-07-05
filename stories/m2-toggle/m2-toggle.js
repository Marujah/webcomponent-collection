customElements.define("m2-toggle", class extends HTMLElement {
  #shadow = this.attachShadow({ mode: "open" });
  get style() {
    return `
      <style>
          :host {
            --toggle-size: 1;
          }
          .s-small {
            --toggle-size: 0.75;
          }
          .s-medium {
            --toggle-size: 1;
          }
          .s-large {
            --toggle-size: 1.25;
          }
          .switch {
              --toggle-width: calc(var(--toggle-size) * 4em);
              --toggle-hight: calc(var(--toggle-size) * 2em);
              position: relative;
              display: inline-block;
              width: var(--toggle-width);
              height: var(--toggle-hight);
              margin: 0 auto;
          }
          .switch input {
              display: none;
          }
          .switch .slider:before {
              position: absolute;
              content: "";
              height: calc(var(--toggle-hight) - 10px);
              width: calc(var(--toggle-hight) - 10px);
              left: 4px;
              bottom: 3px;
              background-color: #FFFFFF;
              transition: .3s;
              border: 1px solid #e8e8e8;
          }
          .switch input:checked+.slider:before {
              transform: translateX(calc((var(--toggle-width) / 2) - 1px));
          }
          .switch input:checked+.slider {
              background-color: ${this.rightColor};
              border: 1px solid #e8e8e8;
          }
          .switch .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: ${this.leftColor};
              transition: .4s;
              border: 1px solid #e8e8e8;
          }
          .switch .slider.round:before {
              border-radius: 50%;
          }
          .switch .slider.round {
              border-radius: calc(var(--toggle-size) * 2em);
          }					
      </style>
    `;
  }

  get template() {
    return `
        <label class="switch s-${this.size}">
            <input type="checkbox">
            <div class="slider round"></div>
        </label>
    `;
  }

  #handleClick(event) {
    if(event.path[0].tagName === 'INPUT') {
      this.dispatchEvent(new CustomEvent('onToggleClick', {
          bubbles: true,
          composed: true,
          detail: {
            checked: event.path[0].checked,
          }
      }));
    }
  }

  #addEvents() {
    this.addEventListener("click", this.#handleClick);
  }

  #removeEvents() {
    this.removeEventListener("click", this.#handleClick);
  }

  #createCode() {
    this.#shadow.innerHTML = `${this.style} ${this.template}`;
  }

  get leftColor() {
    return this.getAttribute('leftColor');
  }
  set leftColor(newColor) {
    if (!newColor) {
      newColor = 'green';
    }
    this.setAttribute('leftColor', newColor);
  }

  get rightColor() {
    return this.getAttribute('rightColor');
  }
  set rightColor(newColor) {
    if (!newColor) {
      newColor = 'red';
    }
    this.setAttribute('rightColor', newColor);
  }

  get size() {
    return this.getAttribute('size');
  }
  set size(newSize) {
    if (!newSize || ['small', 'medium', 'large'].includes(newSize)) {
      newSize = 'medium';
    }
    this.setAttribute('size', newSize);
  }

  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "color" || name === "size") {
      if (newValue !== oldValue) {
        this.#createCode();
      }
    }
  }

  connectedCallback() {
    this.#createCode();
    this.#addEvents();
  }

  disconnectedCallback() {
    this.#removeEvents();
  }

});