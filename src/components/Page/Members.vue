<template>
    <body class="bg-custom-color-2">
      <!-- Contenido de la página -->
      <header>
        <!-- Contenido del encabezado, como el Navbar -->
        <div class="z1">
          <Navbar />
          <BarLogos />
          <BarMenu />
        </div>
      </header>
      <main>
        <div class="z2">
          <br><br><br><br><br>
          <Members />
          <br><br>
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
  import Members from '../Members/Owner.vue';
  
  export default {
    name: "App",
    components: {
      Navbar,
      BarLogos,
      BarMenu,
      Footer,
      Members
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
  </style>
  
  
  
