let style = ``;
let template = `<svg width="10" height="10" vertion="1.1"
    style="background-color:#fff"
    id="svg" xmlns="http://www.w3.org/2000/svg">
</svg>`;

customElements.define(
  'm2-graph',
  class extends HTMLElement {
    #shadow = this.attachShadow({
      mode: 'open',
    });

    #createCode() {
      this.#shadow.innerHTML = `${style} ${template}`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (newValue !== oldValue) {
        this.#createCode();
      }
    }
    connectedCallback() {
      this.#createCode();
    }
  }
);
