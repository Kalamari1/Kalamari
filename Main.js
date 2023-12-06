
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-900px";
    background_menu.style.display = "none";
}



function expandirCategoria(elemento) {
    const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(categoria => {
      if (categoria !== elemento) {
        categoria.style.transform = "scale(1)";
        categoria.style.zIndex = "0";
      }
    });
  
    elemento.style.transform = "scale(1.2)";
    elemento.style.zIndex = "1";
  }
  
  function contraerCategorias() {
    const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(categoria => {
      categoria.style.transform = "scale(1)";
      categoria.style.zIndex = "0";
    });
  }
  
  function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var comentarios = document.getElementById('comentarios').value;

    // Puedes realizar acciones adicionales aquí, como enviar los datos a un servidor o mostrar un mensaje
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Comentarios:', comentarios);}




  
    
    document.addEventListener("DOMContentLoaded", function () {
      const categoriaLink = document.getElementById("categoria");
      const categoriaSubMenu = document.getElementById("categoriaSubMenu");
    
      // Muestra el submenú al entrar en el enlace "Categoría"
      categoriaLink.addEventListener("mouseenter", function () {
        mostrarSubMenu();
      });
    
      // Mantiene el submenú visible mientras estás sobre él o sobre el enlace "Categoría"
      categoriaLink.addEventListener("mouseleave", function () {
        ocultarSubMenu();
      });
    
      categoriaSubMenu.addEventListener("mouseenter", function () {
        // Cancela la ocultación del submenú si estás sobre él
        clearTimeout(ocultarSubMenuTimeout);
      });
    
      categoriaSubMenu.addEventListener("mouseleave", function () {
        // Oculta el submenú al salir del cuadro negro
        ocultarSubMenu();
      });
    
      // Maneja la selección de opciones en el submenú
      categoriaSubMenu.addEventListener("click", function (event) {
        // Evita que el clic se propague al enlace principal
        event.stopPropagation();
        // Puedes agregar aquí el código para manejar la selección de la opción
        console.log("Opción seleccionada:", event.target.textContent);
      });
    
      function mostrarSubMenu() {
        // Muestra el submenú
        categoriaSubMenu.style.display = "block";
      }
    
      function ocultarSubMenu() {
        // Oculta el submenú después de un breve retraso
        ocultarSubMenuTimeout = setTimeout(function () {
          categoriaSubMenu.style.display = "none";
        }, 300);
      }
    });
    

    document.addEventListener("DOMContentLoaded", function () {
      const iconCaro = document.getElementById("iconcaro");
      const iconVale = document.getElementById("iconvale");
      const iconCami = document.getElementById("iconcami");
    
      [iconCaro, iconVale, iconCami].forEach((icon) => {
        icon.addEventListener("mouseenter", function () {
          // Inicia la animación al pasar el mouse por encima
          icon.style.animation = "vibrar 0.3s ease-in-out infinite";
        });
    
        icon.addEventListener("mouseleave", function () {
          // Detiene la animación al salir el mouse
          icon.style.animation = "";
        });
      });
    });
  


  window.addEventListener('scroll', function () {
            var menu = document.getElementById('menu');
            var scrollPosition = window.scrollY;

            if (scrollPosition > 50) {
                menu.style.backgroundColor = '#482BEB';
            } else {
                menu.style.backgroundColor = 'transparent';
            }
        });



        function toggleItem(event) {
          if (event.target.tagName === 'LI') {
              event.target.classList.toggle('checked');
          }
      }
      
      const audio = document.querySelector('audio'),
          songLength = document.getElementById('SongLength'),
          currentTime = document.getElementById('CurrentSongTime');
      
      const calculateTime = (secs) =>{
          const minutes = Math.floor(secs / 60),
              seconds = Math.floor(secs % 60),
              returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
              return `${minutes}:${returnedSeconds}`;
      }
      
      const displayDuration = () =>{
          songLength.innerHTML = calculateTime(audio.duration);
      }
      
      if(audio.readyState > 0){
          displayDuration();
          currentTime.innerHTML = calculateTime(audio.currentTime);
      }else{
          audio.addEventListener('loadedmetadata', () =>{
              displayDuration();
          })
      }
      
      audio.ontimeupdate = function(){
          currentTime.innerHTML = calculateTime(audio.currentTime);
          setProgress();
      }
      
      function setProgress(){
          let percentage = (audio.currentTime / audio.duration) * 100;
          document.querySelector('.progress').style.width = percentage + '%'; 
      }
      
      //Audio Controls
      const playPause = document.getElementById('PlayPause'),
          plus10 = document.getElementById('Plus10'),
          back10 = document.getElementById('Back10');
      
      playPause.addEventListener('click', ()=>{
          if(audio.paused){
              playPause.src = 'Img/pause.svg';
              audio.play();
          }else{
              playPause.src = 'Img/Play.svg';
              audio.pause();
          }
      })
      
      plus10.addEventListener('click', ()=>{
          audio.currentTime +=10;
      })
      
      back10.addEventListener('click', ()=>{
          audio.currentTime -=10;
      })
      
      
      
      const soundButton = document.getElementById('mute');
      
      soundButton.addEventListener('click', function() {
          if (audio.muted) {
              // Si está muteado, desmutea y cambia la imagen
              audio.muted = false;
              soundButton.src = 'Img/sonido.svg';
          } else {
              // Si no está muteado, mutea y cambia la imagen a "muted"
              audio.muted = true;
              soundButton.src = 'Img/Mute.svg';
          }
      })
      
      
      const reproductor = document.getElementById('reproductor');
      const musicPlayerContainer = document.getElementById('musicPlayerContainer');
      const pinIcon = document.getElementById('pin');
      let offsetX, offsetY;
      let isAnclado = true;
      let storedLeft, storedTop;
      
      // Centrar el reproductor al inicio
      reproductor.style.left = (window.innerWidth - reproductor.clientWidth) / 2 + 'px';
      reproductor.style.top = '50px';
      
      pinIcon.addEventListener('click', toggleAnclar);
      document.addEventListener('mousedown', startDragging);
      document.addEventListener('mousemove', handleDragging);
      document.addEventListener('mouseup', stopDragging);
      
      // Eventos táctiles
      document.addEventListener('touchstart', startDraggingTouch);
      document.addEventListener('touchmove', handleDraggingTouch);
      document.addEventListener('touchend', stopDraggingTouch);
      
      function toggleAnclar() {
          if (isAnclado) {
              // Almacenar las coordenadas actuales
              const rect = reproductor.getBoundingClientRect();
              storedLeft = rect.left;
              storedTop = rect.top;
      
              reproductor.classList.remove('reproductor');
              reproductor.classList.add('reproductor-desanclado');
              pinIcon.src = 'Img/pinout.svg';
          } else {
              // Restaurar las coordenadas almacenadas
              reproductor.style.left = storedLeft + 'px';
              reproductor.style.top = storedTop + 'px';
      
              reproductor.classList.remove('reproductor-desanclado');
              reproductor.classList.add('reproductor');
              pinIcon.src = 'Img/pinfill.svg';
          }
      
          isAnclado = !isAnclado;
      }
      
      function startDragging(event) {
          if (!isAnclado) {
              offsetX = event.clientX - reproductor.getBoundingClientRect().left;
              offsetY = event.clientY - reproductor.getBoundingClientRect().top;
          }
      }
      
      function handleDragging(event) {
          if (event.buttons === 1 && !isAnclado) {
              reproductor.style.right = 'auto';
              reproductor.style.bottom = 'auto';
              reproductor.style.left = event.clientX - offsetX + 'px';
              reproductor.style.top = event.clientY - offsetY + 'px';
          }
      }
      
      function stopDragging() {
          // Detener el arrastre
      }
      
      
      