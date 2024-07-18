<template>
    <header class="headerPL">
        <nav class="navPL">
            <a href="/">Inicio</a>
            <a href="/activities">Actividades</a>
            <a href="/members">Miembros</a>
            <a href="/events">Memorias</a>
        </nav>
        <form action="#" class="search-bar">
            <input type="text" placeholder="Search">
            <button type="submit"><i class='bx bx-search' ></i></button>
        </form>
    </header>
    <div class="backgroundPL">
        
    </div>
    <div class="containerPL">
        <div class="contentPL">
            <h2 class="logo"><i class='bx bxs-label' ></i>UNAM IEEE - EMBS</h2>
            <div class="text-sci">
                <h2>Bienvenido!<br><span>Presentamos nuestro nuevo sitio web.</span></h2>
                <p>La UNAM EMBS es una rama estudiantil del IEEE en la UNAM que se enfoca en la ingeniería biomédica. Organiza conferencias, talleres y eventos para promover la investigación y el desarrollo en biomedicina y biotecnología, facilitando el intercambio de conocimientos entre estudiantes y profesionales.</p>
                <div class="social-icons">
                    <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
                    <a href="#"><i class='bx bxl-facebook-square' ></i></a>
                    <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
                    <a href="#"><i class='bx bxl-tiktok' ></i></a>
                </div>
            </div>
        </div>
        <div ref="logregBoxPL" class="logreg-boxPL">
            <div class="form-boxPL login">
                <form action="#">
                    <h2>Iniciar Sesión</h2>
                    <div class="input-boxPL">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="email" required>
                        <label for="">Correo electrónico</label>
                    </div>

                    <div class="input-boxPL">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" required>
                        <label for="">Contraseña</label>
                    </div>

                    <div class="remember-forgotPL">
                        <label><input type="checkbox">Recuérdame </label>
                        <a href="#">¿Olvidaste tu contraseña? </a>
                    </div>

                    <button type="submit" class="btnPL">Sign In</button>

                    <div class="login-registerPL">
                        <p>¿No tienes una cuenta? <a href="#" class="register-linkPL" ref="registerLinkPL">Regístrate</a></p>
                    </div>

                </form>
            </div>

            <div class="form-boxPL register">
                <form action="#">
                    <h2>Regístrate</h2>

                    <div class="input-boxPL">
                        <span class="icon"><i class='bx bxs-user' ></i></span>
                        <input type="text" required>
                        <label for="">Nombre</label>
                    </div>

                    <div class="input-boxPL">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="email" required>
                        <label for="">Correo electrónico</label>
                    </div>

                    <div class="input-boxPL">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" required>
                        <label for="">Contraseña</label>
                    </div>

                    <div class="remember-forgotPL">
                        <label><input type="checkbox">Acepto los términos & condiciones </label>
                    </div>

                    <button type="submit" class="btnPL">Sign Up</button>

                    <div class="login-registerPL">
                        <p>¿Ya tienes una cuenta? <a href="#" class="login-linkPL" ref="loginLinkPL" >Inicia sesión</a></p>
                    </div>

                </form>
            </div>

        </div>
    </div>
</template>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    input{
        display: unset;
    }

    button{
        display: unset;
        
    }

    body{
        background: #002845; 
    }

    .txtH2{
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .headerPL{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 25px 12.5%;
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
    }

    .navPL a{
       position: relative;
       font-size: 16px; 
       color: #e4e4e4;
       text-decoration: none;
       font-weight: 500;
       margin-right: 30px;
    }

    .navPL a::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 100%;
        height: 2px;
        background: #e4e4e4;
        border-radius: 5px;
        transform: translateY(10px);
        opacity: 0;
        transition: .5s;
    }

    .navPL a:hover::after{
        transform: translateY(0);
        opacity: 1;
    }

    .search-bar{
        width: 250px;
        height: 45px;
        background: transparent;
        border: 2px solid #e4e4e4;
        border-radius: 6px;
        display: flex;    
        align-items: center;
    }

    .search-bar input{
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        color: #e4e4e4;
        padding-left: 10px;
    }

    .search-bar input::placeholder{
        color: #e4e4e4;
    }

    .search-bar button{
        width: 40px;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .search-bar button i{
        font-size: 22px;
        color: #e4e4e4;
    }

    .backgroundPL{
        width: 100%;
        height: 100vh;
        background: url('./../../assets/img/img7.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(10px);
    }

    .containerPL {
        position: absolute;
        width: 75%;
        height: 550px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url('./../../assets/img/img7.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        margin-top: 20px;
    }

    .containerPL .contentPL{
        position: absolute;
        top: 0;
        left: 0;
        width: 58%;
        height: 100%;
        background: transparent;
        padding: 80px;
        color: #e4e4e4;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .contentPL .logo{
        font-size: 30px;
        font-weight: 500; 
    }

    .text-sci h2{
        font-size: 40px;
        line-height: 1;
    }

    .text-sci h2 span{
        font-size: 25px;
    }

    .text-sci p{
        font-size: 16px;
        margin: 20px 0;
    }

    .social-icons a i{
        font-size: 22px;
        color: #e4e4e4;
        margin-right: 10px;
        transition: .5s ease;
    }

    .social-icons a:hover i{
        transform: scale(1.2);
    }

    .containerPL .logreg-boxPL{
        position: absolute;
        top: 0;
        right: 0;
        width: calc(100% - 58%);
        height: 100%;
        overflow: hidden;
    }

    .logreg-boxPL .form-boxPL{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: transparent;
        backdrop-filter: blur(20px);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        color: #e4e4e4;
    }

    .logreg-boxPL .form-boxPL.login{
        transform: translateX(0);
        transition: transform .6s ease;
        transition-delay: .7s;
    }

    .logreg-boxPL.active .form-boxPL.login{
        transform: translateX(600px);
        transition-delay: 0s;
    }

    .logreg-boxPL .form-boxPL.register {
        transform: translateX(600px);
        transition: transform .6s ease;
        transition-delay: 0s;
    }

    .logreg-boxPL.active .form-boxPL.register {
        transform: translateX(0);
        transition-delay: .7s;
    }

    .form-boxPL h2{
        font-size: 32px;
        text-align: center;
    }

    .form-boxPL .input-boxPL{
        position: relative;
        width: 340px;
        height: 50px;
        border-bottom: 2px solid #e4e4e4;
        margin: 30px 0;
    }

    .input-boxPL input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        color: #e4e4e4;
        font-weight: 500;
        padding-right: 28px;
    }

    .input-boxPL label{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        font-size: 16px;
        font-weight: 500;
        pointer-events: none;
        transition: .5s ease;
    }

    .input-boxPL input:focus~label,
    .input-boxPL input:valid~label {
        top: -5px;
    }

    .input-boxPL .icon {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 19px;
    }

    .form-boxPL .remember-forgotPL{
        font-size: 14.5px;
        font-weight: 500;
        margin: -15px 0 15px;
        display: flex; 
        justify-content: space-between;
    }

    .remember-forgotPL label input{
        accent-color: #e4e4e4;
        margin-right: 3px;
    }

    .remember-forgotPL a{
        color: #e4e4e4;
        text-decoration: none;
    }

    .remember-forgotPL a:hover{
        text-decoration: underline;
    }

    .btnPL{
        width: 100%;
        height: 45px;
        /* background: #c4103d; */
        background: #0091F8;
        border: none;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        color: #e4e4e4;
        font-weight: 500;
        box-shadow: 0 0 10px rgba(0,0,0,.5);
    }

    .form-boxPL .login-registerPL{
        font-size: 14.5px;
        font-weight: 500;
        text-align: center;
        margin-top: 25px;
    }

    .login-registerPL p a{
        color: #e4e4e4;
        font-weight: 600;
        text-decoration: none;
    }

    .login-registerPL p a:hover{
        text-decoration: underline;
    }
</style>

<script>
export default {
  mounted() {
    this.$refs.registerLinkPL.addEventListener('click', this.activateLogregBox);
    this.$refs.loginLinkPL.addEventListener('click', this.deactivateLogregBox);
  },
  beforeDestroy() {
    this.$refs.registerLinkPL.removeEventListener('click', this.activateLogregBox);
    this.$refs.loginLinkPL.removeEventListener('click', this.deactivateLogregBox);
  },
  methods: {
    activateLogregBox() {
      this.$refs.logregBoxPL.classList.add('active');
    },
    deactivateLogregBox() {
      this.$refs.logregBoxPL.classList.remove('active');
    }
  }
};
</script>