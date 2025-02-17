class News extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="main">
          <div class="box">
            <div class="inner">
              <h1>News!</h1>
              <p>"One Trick Pony" out now on all major streaming platforms!
              </p>
            </div>
          </div>
        </div>
        `;
    }
  }
  
  customElements.define('news-component', News);
  