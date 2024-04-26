<template>
    <body class="bg-custom-color-2">
      <!-- Contenido de la página -->
      <header>
        <!-- Contenido del encabezado, como el Navbar -->
        <div class="z1">
          <Navbar />
          <BarLogos />
          <BarMenu />
          <br>
        </div>
      </header>
      <main>
        <div class="z2">
          <br><br><br><br><br> <br>
          <div class="x2">
            <Calendar />
          </div>
          <PubBlog />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  </template>
  
  <script>
  import Navbar from '../Navbar.vue';
  import Footer from '../Foot.vue';
  import BarLogos from '../BarLogos.vue';
  import BarMenu from '../BarMenu.vue';
  import PubBlog from '../Activities/PubBlog.vue';
import Calendar from '../Activities/Calendar.vue';
  
  export default {
    name: "App",
    components: {
      Navbar,
      BarLogos,
      BarMenu,
      Footer,
      PubBlog,
      Calendar
    },
  };
  </script>
  
  <style>
    body{
      overflow-x: hidden;
    }
  
   .z1{
      z-index: 20;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  
    .z2{
      top: 50%;
      margin-top: 50px;
      z-index: 10;
    } 

    .z2, .x2{
      background: #eee;
    }
  </style>
  
  
  
