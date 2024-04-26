<template>
    <div class="bg-primary min-h-screen relative">
      <!-- Navbar fijo en la parte superior -->
      <div class="z-20 fixed top-0 left-0 w-full bg-background text-color">
        <Navbar />
      </div>
  
      <!-- Contenido principal -->
      <div class="mt-20 pb-20"> <!-- mt-20 para dejar espacio para el Navbar fijo y pb-20 para el Footer -->
        <!-- Contenido de la página aquí -->
        <div class="bg-white opacity-90 rounded-lg p-5">
          <div class="flex justify-between">
            <div class="flex flex-wrap gap-5">
              <img src="https://via.placeholder.com/80" alt="Logo UNAM" class="w-20 h-20 rounded-full" />
              <img src="https://via.placeholder.com/80" alt="Logo FI" class="w-20 h-20 rounded-full" />
              <img src="https://via.placeholder.com/200" alt="Logo EMBS" class="w-40 h-20 rounded-full" />
            </div>
            <img src="https://via.placeholder.com/195" alt="Logo IEEE" class="w-40 h-20 rounded-full" />
          </div>
        </div>
      </div>
  
      <!-- Footer fijo en la parte inferior -->
      <div class="z-1 fixed bottom-0 left-0 w-full bg-blue-600 text-white">
        <Footer />
      </div>
    </div>
  </template>
  