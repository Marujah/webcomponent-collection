const style = `
<style>
    canvas {
        margin: 0;
        padding: 0;
    }
</style>
`;

customElements.define(
  'm2-rose',
  class Flower extends HTMLElement {
    #shadow = this.attachShadow({
      mode: 'open',
    });
    #t = 0;
    #ctx;

    get template() {
      return `<canvas id="canvas" height="${this.height}" width="${this.width}"></canvas>`;
    }

    get color() {
      return this.getAttribute('color');
    }
    set color(newColor) {
      this.setAttribute('color', newColor);
    }

    get width() {
      const value = Number(this.getAttribute('width'));
      if (value <= 0 || Number.isNaN(value)) {
        return 200; // default
      }
      return value;
    }
    set width(newWidth) {
      this.setAttribute('width', newWidth);
    }

    get height() {
      const value = Number(this.getAttribute('height'));
      if (value <= 0 || Number.isNaN(value)) {
        return 200; // default
      }
      return value;
    }
    set height(newHeight) {
      this.setAttribute('height', newHeight);
    }

    get en() {
      const value = Number(this.getAttribute('en'));
      if (value <= 0 || Number.isNaN(value)) {
        return 1; // default
      }
      return value;
    }
    set en(newEn) {
      this.setAttribute('en', newEn);
    }

    get dee() {
      const value = Number(this.getAttribute('dee'));
      if (value <= 0 || Number.isNaN(value)) {
        return 1; // default
      }
      return value;
    }
    set dee(newDee) {
      this.setAttribute('dee', newDee);
    }

    get amplitude() {
      const value = Number(this.getAttribute('amplitude'));
      if (value <= 0 || Number.isNaN(value)) {
        return 100.0; // default
      }
      return value;
    }
    set amplitude(newAmplitude) {
      this.setAttribute('amplitude', newAmplitude);
    }

    #createCode() {
      this.#shadow.innerHTML = `${style} ${this.template}`;
    }

    #rose(theta, n, d, amplitude) {
      let k = n / d;
      let x = amplitude * Math.cos(k * theta) * Math.cos(theta);
      let y = amplitude * Math.cos(k * theta) * Math.sin(theta);
      return { x, y };
    }

    #point(x, y, context) {
      context.beginPath();
      context.arc(x, y, 1, 0, 2 * Math.PI, true);
      context.stroke();
    }

    #setup() {
      const canvas = this.#shadow.getElementById('canvas');
      if (!canvas.getContext) {
        return;
      }
      this.#ctx = canvas.getContext('2d');
    }

    #draw() {
      window.webkitRequestAnimationFrame(() => this.#draw());

      // set line stroke and line width
      this.#ctx.strokeStyle = this.color;
      this.#ctx.lineWidth = 1;

      this.#ctx.translate(this.width / 2, this.height / 2);
      // for (let i=0; i<1000; i+=0.5) {
      //   let p = this.#rose(i, this.en, this.dee, 100.0);
      //   this.#point(p.x, p.y, this.#ctx);
      // }
      let p = this.#rose(this.#t, this.en, this.dee, this.amplitude);
      this.#point(p.x, p.y, this.#ctx);
      this.#ctx.translate(-this.width / 2, -this.height / 2);

      this.#t += 0.5;
    }

    static get observedAttributes() {
      return ['color', 'en', 'dee', 'amplitude', 'width', 'height'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (
        name === 'color' ||
        name === 'en' ||
        name === 'dee' ||
        name === 'amplitude' ||
        name === 'width' ||
        name === 'height'
      ) {
        if (newValue !== oldValue) {
          this.#createCode();
          this.#setup();
          this.#draw();
        }
      }
    }
    connectedCallback() {
      this.#createCode();
      this.#setup();
      this.#draw();
    }
  }
);
