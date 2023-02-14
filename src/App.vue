<template>
  <main class="flex h-[100vh] bg-pale-sky-900">
    <section class="w-[20%] flex flex-col items-center justify-center bg-pale-sky-700
    max-sm:w-[100%] relative max-sm:absolute max-sm:h-[100vh] max-md:w-[34599vw] max-lg:w-[45999vw]"
    :class="[{ display38: display == false }]">
    <button class="absolute top-2 right-4 p-2 text-white text-[1.05rem] font-semibold
     bg-pale-sky-600 rounded-2xl justify-center duration-500 items-center hidden max-lg:flex max-md:flex max-sm:flex btntlf"
     v-if="display === true" @click="useDisplays.toggleButton()">
      <span class="material-icons">
        close
    </span>
    </button>
      <div id="character">
        <div id="imgCharacter"
          class="mt-4 relative p-16 rounded-full bg-cover bg-characterImg bg-center bg-no-repeat border-yellow-500 border-4">
        </div>
      </div>
      <h2 class="m-4 text-white font-semibold text-[1.35rem] ">Ivan J. Vasquez A.</h2>
      <h4 class="mb-4 text-white font-medium text-[1.02rem]">Front End Developer</h4>
      <RouterLink class="nav" to="/" @click="useDisplays.toggleButton()">Home</RouterLink>

      <RouterLink class="nav" to="/about" @click="useDisplays.toggleButton()">About</RouterLink>

      <RouterLink class="nav" to="/education" @click="useDisplays.toggleButton()">Education</RouterLink>

      <RouterLink class="nav" to="/portfolio" @click="useDisplays.toggleButton()">Portfolio</RouterLink>

      <RouterLink class="nav" to="/contact" @click="useDisplays.toggleButton()">Contact</RouterLink>
    </section>
    <section class="w-full bg-pale-sky-900">
    <RouterView>
    </RouterView>
  </section>
  </main>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useDisplay } from '@/stores/useDisplay'
import { computed } from '@vue/reactivity';
const  useDisplays = useDisplay()

const display = computed(() => useDisplays.button) 

</script>

<style scoped>

</style>