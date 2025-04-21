function projetos(section) {
  const wrapper = section.querySelector(".wrapper");

  wrapper.innerHTML = `<header>
      <h2>Projetos</h2>
    </header>
    <div class="content">
      <div class="cards">

        <!-- Card para Pixel -->
        <div class="card">
          <h3>PixelTech</h3>
          <div class="img-wrapper">
            <img
              src="img/pixel.PNG"
              alt="Imagem da empresa PixelTech"
            />
            <div class="buttons">
              <a href="https://www.instagram.com/pixeltech._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" title="Ver no Instagram">
                <!-- ícone svg -->
              </a>
            </div>
          </div>
          <p>Empresa de tecnologia focada em inovação digital.</p>
          <p>Design - Marketing</p>
        </div>

        <!-- Card para New Vidros -->
        <div class="card">
          <h3>New Vidros</h3>
          <div class="img-wrapper">
            <img
              src="img/new.PNG"
              alt="Imagem da empresa New Vidros"
            />
            <div class="buttons">
              <a href="https://www.instagram.com/newvidros._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" title="Ver no Instagram">
                <!-- ícone svg -->
              </a>
            </div>
          </div>
          <p>Trabalhos com vidros, janelas e espelhos sob medida.</p>
          <p>Design - Marketing</p>
        </div>

      </div>
    </div>`;
}

export { projetos };
