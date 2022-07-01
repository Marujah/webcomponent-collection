customElements.define("thumbnail-preview", class extends HTMLVideoElement {

  #startPreview = () => {
    this.volume = 0;
    this.currentTime = 0;
    this.playbackRate = 2.5;
    this.play();
  }

  #stopPreview = () => {
    this.currentTime = 0;
    this.pause();
  }

  #handleClick = () => this.dispatchEvent(new CustomEvent('onClick', {bubbles: true, composed: true, detail: {name: 'Marouen'}}));

  get previewing () {
    return !this.paused;
  }

  set previewing (value) {
    if (value && this.paused) {
      this.#startPreview();
    } else {
      this.stopPreview();
    }
  }

  #addEvents () {
    this.addEventListener("mouseover", this.#startPreview);
    this.addEventListener("mouseout", this.#stopPreview);
    this.addEventListener("click", this.#handleClick);
  }

  #removeEvents () {
    this.removeEventListener("mouseover", this.#startPreview);
    this.removeEventListener("mouseout", this.#stopPreview);
    this.removeEventListener("click", this.#handleClick);
  }

  static get observedAttributes () {
    return ["previewing"];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === "previewing") {
      if (newValue === 'true') {
        this.#startPreview();
      } else {
        this.#stopPreview();
      }
    }
  }

  connectedCallback () {
    this.#addEvents();
  }

  disconnectedCallback () {
    this.#removeEvents();
  }

}, { extends: "video" });