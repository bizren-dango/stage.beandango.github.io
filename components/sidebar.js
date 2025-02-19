class Sidebar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
    <div class="box">
    <h1>Directory</h1>
    <div class="inner">

      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <a href="index.html">
              <button 
              class="accordion-button no-arrow" 
              type="button" style="background-color: #FFF;">
                Home
              </button>
            </a>
          </h2>
          <div 
            id="collapseOne" 
            class="accordion-collapse collapse"
          >
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <a href="https://bizren.moe" target="_blank">
              <button 
              class="accordion-button no-arrow" 
              type="button" style="background-color: #FFF;">
                Bizren Site
              </button>
            </a>
          </h2>
          <div 
            id="collapseOne" 
            class="accordion-collapse collapse"
          >
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button 
              class="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo" 
              aria-expanded="false" 
              aria-controls="collapseTwo"
            >
              Links
            </button>
          </h2>
          <div 
            id="collapseTwo" 
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <a href="https://bsky.app/profile/hajimedango.bizren.moe" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                Bluesky | Endless rambling
                </button>
              </a>
              <a href="https://youtube.com/@hajimedangovt" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                  Youtube | I stream and posts my covers here!
                </button>
              </a>
              <a href="https://discord.gg/d6ByZfC8gZ" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                  Discord | pls join im so lonely
                </button>
              </a>
              <a href="https://vgen.co/beandango" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                  VGen
                </button>
              </a>
              <a href="https://beandango.straw.page/" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                  Strawpage | Give me fun doodles!!!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button 
              class="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseThree" 
              aria-expanded="false" 
              aria-controls="collapseThree"
            >
              Credits
            </button>
          </h2>
          <div 
            id="collapseThree" 
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
            <a href="https://vgen.co/kaobnir" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                Overlays: Kaobnir
                </button>
              </a>
              <a href="https://bsky.app/profile/cherripa.bizren.moe" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                Live2D art: Cherripa
                </button>
              </a>
              <a href="https://bsky.app/profile/hajimedango.bizren.moe" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                Live2D Rig: Me :)
                </button>
              </a>
              <a href="https://bsky.app/profile/cherripa.bizren.moe" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                Emotes: Cherripa
                </button>
              </a>
              <a href="https://bsky.app/profile/cherripa.bizren.moe" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                Vroid model: me + cherripa
                </button>
              </a>
              <a href="https://jingo1016.booth.pm/items/5058077" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                VRChat model base: STUDIO JINGO (Manuka)
                </button>
              </a>
              <a href="https://vgen.co/ValeforZero" target="_blank">
                <button 
                class="accordion-button no-arrow" 
                type="button" style="background-color: #FFF;">
                Bluesky banner: Valeforzero
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="box">
    <h1> Here we go again...</h1>
    <div class="inner">
      <p>
        <b>SUBJECT:</b> Hajime Dango <br>
        <b>GENDER:</b> Female<br>
        <b>AGE:</b> 24
      </p>
    </div>
  </div>
  <div class="box">
    <h1>Apparent interests</h1>
    <div class="inner">
      <ul>
        <li>Snakes</li>
        <li>Cats</li>
        <li>Music, digital art</li>
        <li>Anime (She has a MAL <a href="https://myanimelist.net/animelist/beanDango">here!</a>!)</li>
        <li>Rats</li>
        <li>Japanese language and weeb shit</li>
      </ul>
    </div>
  </div>`;
    }
  }
  
  customElements.define('sidebar-component', Sidebar);
  