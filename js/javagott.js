let header = `
<div class="header-info">
<li class="header-info-text"><a href="https://www.google.com.ar/maps">Av.Rivadavia 1234, CABA </a></li>
<li class="header-info-text">1123456789 (SOLO WHATSAPP)</li>
<li class="header-info-text">Atencion al cliente</li>
</div>

<nav>
<input type="checkbox" id="check">
<label for="check" class="checkbtn"><img src="./assets/icono_menu.png" alt="iconomenu"></label>
<div class="logo">
    <img src="./assets/logo__1_-removebg-preview.png" alt="">
    <div class="nombrelog">
        <a href="./index.html">
            <p class="nombre">GOTT TECH</p>
        </a>
    </div>
</div>


<ul>
    <li><a href="./index.html">Inicio</a></li>
    <li><a href="./procesador.html">Procesadores</a></li>
    <li><a href="./motherboard.html">Motherboard</a></li>
    <li><a href="./placadevideo.html">Placas de Video</a></li>
    <li><a href="./monitores.html">Monitores</a></li>
    <li><a href="./notebooks.html">Notebooks</a></li>
</ul>
</nav>


`
document.getElementById("header").innerHTML = header

let footer = `

<section>
            <div class="col-footer_colum">
                <li>
                    <h2>INFORMACION</h2>
                </li>
                <li>
                    <h3>INICIO</h3>
                </li>
                <li>
                    <h3>SOBRE NOSOTROS</h3>
                </li>
                <li>
                    <h3>CONTACTO</h3>
                </li>
                <li>
                    <h3>¿DONDE ESTAMOS?</h3>
                </li>
                <li>
                    <h3>PREGUNTAS FRECUENTES</h3>
                </li>
                <li>
                    <h3>SERVICIO TECNICO</h3>
                </li>
                <li>
                    <h3>AYUDA</h3>
                </li>
            </div>

            <div class="col-footer_colum">
                <li>
                    <h2>GOTT_TECH</h2>
                </li>
                <li>
                    <h3>EN LAS REDES</h3>
                </li>
                <li class="iconos_redes">
                    <a href="https://www.instagram.com/" target="_blank"><img src="./assets/instagram_108043.png"
                            alt="logo instagram" width="40em"></a>
                    <a href="https://www.facebook.com/?locale=es_LA" target="_blank"><img
                            src="./assets/facebook_108044.png" alt="logo facebook" width="40em"></a>
                    <a href="https://www.youtube.com/" target="_blank"><img src="./assets/youtube_108041.png"
                            alt="logo youtube" width="40em"></a>

                </li>
            </div>
            <div class="col-footer_colum">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52537.82765347111!2d-58.45326868946596!3d-34.61391526063031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1696555227550!5m2!1ses!2sar"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-footer_colum">
                <li>
                    <h2>NEWSLETTER</h2>
                </li>
                <li>
                    <h3>Recibi noticias en tu mail</h3>
                </li>
                <br>
                <li>
                    <h2>RRHH</h2>
                </li>
                <li>
                    <h3><a href="./rrhh.html">Dejanos tu CV</a> </h3>
                </li>
            </div>
</section>

<div class="footerderechos">
            <h1>Gott Tech Store</h1>
            <h3>© 2023 - Todos los derechos reservados.</h3>
            
            <div class="whatsapp_icon">
                <a href="https://www.whatsapp.com/?lang=es_LA" target="_blank"><img
                        src="./assets/whatsapp_logo_icon_147205.png" alt="logo whatsapp" width="50em"></a>
            </div>
        </div>

`
document.getElementById("footer").innerHTML = footer


//  Codigo para el SLIDE
const slider = document.querySelector('.slides');
let isSliding = false;

function nextSlide() {
    if (!isSliding) {
        isSliding = true;
        const firstSlide = document.querySelector('.slide:first-child');
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = 'translateX(-100%)';
        
        setTimeout(() => {
            slider.appendChild(firstSlide);
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            isSliding = false;
        }, 500);
    }
}

setInterval(nextSlide, 4000); // Cambiar slide cada 4 segundos

//-------------------------------Validacion de Formulario

function validarEnviar() {
    if (document.fvalida.nombreyapellido.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombreyapellido.focus()
        return 0
    }

    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0
        }
    }
    
    alert("Muchas gracias por enviar el formulario")
    document.fvalida.submit()
}

function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
    }
}