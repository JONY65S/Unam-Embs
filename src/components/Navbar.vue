<template>
    <div class="bg-custom-color-0 text-gray-100 py-0 px-6 shadow justify-between items-center">
      <ul class="flex space-x-4">
        <li class="items-center" v-for="link in links" :key="link.name">
          <a :href="link.link" class="text-xs hover:text-green-500">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import Button from './Button.vue';
  
  export default {
    components: {
      Button
    },
  
    setup() {
      let open = ref(false);
      let links = [
        { name: "IEEE.org", link: "https://www.ieee.org/" },
        { name: "IEEE Xplore Digital Library", link: "https://ieeexplore.ieee.org/Xplore/home.jsp" },
        { name: "IEEE Standars", link: "https://standards.ieee.org/" },
        { name: "IEEE Spectrum", link: "https://spectrum.ieee.org/" },
        { name: "More Sites", link: "https://www.ieee.org/sitemap.html" }
      ];
  
      function MenuOpen() {
        open.value = !open.value;
      }
  
      return { links, open, MenuOpen };
    }
  }
  </script>
  
  <style scoped>
  @media (max-width: 768px) {
    .text-xs {
      font-size: 0.65rem; /* Equivalent to 12px assuming the base font size is 16px */
    }
  
    .px-6 {
      padding-left: 25px;
      padding-right: 25px;
      margin-left: -0.65rem;
      margin-right: -0.65rem;
    }
  
    .py-0 {
      padding-top: 0rem; /* Equivalent to 2px assuming the base font size is 16px */
      padding-bottom: 0.125rem; /* Equivalent to 2px assuming the base font size is 16px */
    }
  }
  
  @media (max-width: 500px) {
    .text-xs {
      font-size: 0.60rem; /* Equivalent to 12px assuming the base font size is 16px */
    }
  
    .px-6 {
      padding-left: 10px;
      padding-right: 10px;
      margin-left: -0.35rem;
      margin-right: -0.35rem;
    }
  
    .py-0 {
      padding-top: 0rem; /* Equivalent to 2px assuming the base font size is 16px */
      padding-bottom: 0.125rem; /* Equivalent to 2px assuming the base font size is 16px */
    }
}

    @media (max-width: 400px) {
    .text-xs {
      font-size: 0.5rem; /* Equivalent to 12px assuming the base font size is 16px */
    }
  
    .px-6 {
      padding-left: 10px;
      padding-right: 10px;
      margin-left: -0.35rem;
      margin-right: -0.35rem;
    }
  
    .py-0 {
      padding-top: 0rem; /* Equivalent to 2px assuming the base font size is 16px */
      padding-bottom: 0.125rem; /* Equivalent to 2px assuming the base font size is 16px */
    }
  }
  </style>
  