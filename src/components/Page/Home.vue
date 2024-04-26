<template>
    <body>
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
          <Carousel />
          <br><br><br><br>
        </div>
        <Card />
        <About />
        <Infinite />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  </template>
  
  <script>
  import Navbar from '../Navbar.vue';
  import Carousel from '../main/Carousel.vue';
  import Card from '../main/Card.vue';
  import About from '../main/About.vue';
  import Infinite from '../main/Infinite.vue';
  import Footer from '../Foot.vue';
  import BarLogos from '../BarLogos.vue';
  import BarMenu from '../BarMenu.vue';
  
  export default {
    name: "App",
    components: {
      Navbar,
      Carousel,
      Card,
      About,
      Infinite,
      BarLogos,
      BarMenu,
      Footer
    },
  };
  </script>
  
  <style>
    body{
      overflow-x: hidden;
      background: #eee;
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
  
  
  
