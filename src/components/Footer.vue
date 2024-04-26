<template>
    <footer class="bg-gray-900 text-white py-12 md:py-16 lg:py-20 xl:py-24">
      <div class="contai mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div class="logo bg-white w-16 h-16 mb-6 rounded-full"></div>
            <p class="text-sm md:text-base">Hola, este es un mensaje de bienvenida.</p>
          </div>
          <div>
            <h3 class="text-xl md:text-2xl font-semibold mb-4">Office</h3>
            <p class="text-sm md:text-base">123 Street, City</p>
            <p class="text-sm md:text-base">Country, Zip Code</p>
          </div>
          <div>
            <h3 class="text-xl md:text-2xl font-semibold mb-4">Links</h3>
            <ul class="text-sm md:text-base">
              <li><a href="#" class="text-white hover:text-blue-300 transition-colors">Home</a></li>
              <li><a href="#" class="text-white hover:text-blue-300 transition-colors">Services</a></li>
              <li><a href="#" class="text-white hover:text-blue-300 transition-colors">About Us</a></li>
              <li><a href="#" class="text-white hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl md:text-2xl font-semibold mb-4">Newsletter</h3>
            <form class="flex mb-4">
              <input type="email" placeholder="Enter your email" required class="bg-transparent text-white border-b border-white outline-none mr-2 focus:outline-none focus:border-blue-300 transition-colors">
              <button type="submit" class="bg-transparent border-none outline-none cursor-pointer">
                <i class="fas fa-arrow-right text-white text-lg"></i>
              </button>
            </form>
            <div class="social-icons flex space-x-4">
              <i class="fab fa-facebook-f text-white hover:text-blue-300 transition-colors"></i>
              <i class="fab fa-twitter text-white hover:text-blue-300 transition-colors"></i>
              <i class="fab fa-instagram text-white hover:text-blue-300 transition-colors"></i>
              <i class="fab fa-pinterest text-white hover:text-blue-300 transition-colors"></i>
            </div>
            <p class="txtD1">Desarollada por:</p>
          <p class="txtD2">Jonathan Baltazar Balderas</p>
          </div>
          
        </div>
        <hr class="border-white my-8">
        <p class="text-center text-sm md:text-base">&copy; Copyright 2024 IEEE </p>
        <p>All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.
A not-for-profit organization, IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
      </div>
    </footer>
  </template>
  
  <style>
    .logoxf {
      background-image: url('/path/to/logo.png');
      background-size: cover;
      background-position: center;
    }
  
    .social-iconsxf i {
      font-size: 1.5rem;
    }

    .txtD1{
      margin-top: 15px;
    }
  
    @media (min-width: 768px) and (max-width: 1023px) {
      /* Estilos para tabletas */
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
  
      .logo {
        width: 50px;
        height: 50px;
      }
  
      .social-icons i {
        font-size: 1.8rem;
      }
    }
  </style>
  