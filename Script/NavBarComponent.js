class CustomNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          position: fixed;
          top: 0;
          z-index: 1100; /* Garante que fique acima de todo o conteúdo */
          background-color: #37A58F;
          display: flex; 
          justify-content: space-between;
          align-items: center;
          padding: 0px 15px 0px 0px;
          width: 100%;
        }
        .menu {
          cursor: pointer;
        }
        .busca {
          cursor: pointer;
        }
        .menu-de-busca {
          display: flex;
          gap: 30px;
          padding-right: 18px;
        }
        .menu-de-busca img {
          height: 50px;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.1);
          display: none;
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: 1000;
        }
        .barra-lateral {
          background-color: #37A58F;
          display: flex;
          position: fixed;
          top: 0;
          right: -300px;
          width: 250px;
          height: 100%;
          flex-direction: column;
          align-items: center;
          box-shadow: -2px 1px 20px;
          transition: right 0.3s ease;
          z-index: 1001;
        }
        .barra-lateral.ativa {
          right: 0;
        }
        .linha, .linha-sem-margin-top {
          background-color: rgba(255, 255, 255, 0.493);
          width: 250px;
          height: 1px;
          margin-bottom: 5px;
        }
        .linha {
          margin-top: 5px;
        }
        .a-barra-lateral {
          color: white;
          text-decoration: none;
          font-family: sans-serif;
          font-weight: bold;
          font-size: 24px;
        }
        .barra-busca {
          background-color: #37A58F;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          position: fixed;
          padding: 10px;
          right: -600px;
          top: 0;
          width: 500px;
          height: 100%;
          box-shadow: -2px 1px 20px;
          transition: right 0.3s ease;
          z-index: 1001;
        }
        .barra-busca.ativa {
          right: 0;
        }
        .retangulo {
          display: flex;
          background-color: #318E7C;
          width: 100%;
          height: 60px;
          border-radius: 30px;
          padding: 0 10px;
          cursor: pointer;
          gap: 10px;
        }
        .retangulo input {
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 22px;
          color: white;
          width: 100%;
        }
        .retangulo input::placeholder {
          color: white;
        }
      </style>

      <nav>
        <div class="logo">
          <img src="/img/logo 1.png" alt="Logo">
        </div>
        <div class="menu-de-busca">
          <div class="busca">
            <img src="/img/search.png" alt="Busca">
          </div>
          <div class="menu">
            <img src="/img/menu.png" alt="Menu">
          </div>
        </div>
      </nav>

      <div class="barra-busca" id="barra-busca">
        <div class="retangulo">
          <img src="/img/search.png" alt="Busca">
          <input type="text" placeholder="Search...">
        </div>
      </div>

      <div class="overlay" id="overlay"></div>

      <div class="barra-lateral" id="barra-lateral">
        <div class="logo">
          <img src="/img/logo 1.png" alt="Logo">
        </div>
        <div class="linha-sem-margin-top"></div>
        <a href="SerieAPaginaPrincipal.html" class="a-barra-lateral">Times Série A</a>
        <div class="linha"></div>
        <a href="SerieBPaginaPrincipal.html" class="a-barra-lateral">Times Série B</a>
        <div class="linha"></div>
        <a href="EuropaPaginaPrincipal.html" class="a-barra-lateral">Fut. Europeu</a>
        <div class="linha"></div>
        <a href="FutebolPaginaPrincipal.html" class="a-barra-lateral">Futebol</a>
        <div class="linha"></div>
        <a href="BasquetePaginaPrincipal.html" class="a-barra-lateral">Basquete</a>
        <div class="linha"></div>
        <a href="VoleiPaginaPrincipal.html" class="a-barra-lateral">Vôlei</a>
        <div class="linha"></div>
        <a href="TenisPaginaPrincipal.html" class="a-barra-lateral">Tênis</a>
        <div class="linha"></div>
        <a href="SurfePaginaPrincipal.html" class="a-barra-lateral">Surfe</a>
        <div class="linha"></div>
        <a href="Formula1PaginaPrincipal.html" class="a-barra-lateral">Fórmula 1</a>
        <div class="linha"></div>
        <a href="PaginaSobre.html" class="a-barra-lateral">Sobre Nós</a>
      </div>
    `;

    this.querySelector(".menu img").addEventListener("click", () => this.abrirBarraLateral());
    this.querySelector(".busca img").addEventListener("click", () => this.abrirBarraBusca());
    this.querySelector("#overlay").addEventListener("click", () => this.fecharTudo());
  }

  abrirBarraLateral() {
    this.querySelector("#barra-lateral").classList.add("ativa");
    this.querySelector("#overlay").style.display = "block";
  }

  abrirBarraBusca() {
    this.querySelector("#barra-busca").classList.add("ativa");
    this.querySelector("#overlay").style.display = "block";
  }

  fecharTudo() {
    this.querySelector("#barra-lateral").classList.remove("ativa");
    this.querySelector("#barra-busca").classList.remove("ativa");
    this.querySelector("#overlay").style.display = "none";
  }
}

customElements.define('custom-navbar', CustomNavbar);
