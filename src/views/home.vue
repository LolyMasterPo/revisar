<template>
    <button class="absolute top-2 right-2 p-2 text-white text-[1.05rem] font-semibold
     bg-pale-sky-600 rounded-2xl justify-center max-lg:flex max-md:flex items-center hidden max-sm:flex duration-500 btntlf"
     v-if="display === false" @click="useDisplays.toggleButton()">
      <span class="material-icons">
        reorder
    </span>
    </button>
    <main v-if="display === false" class="flex flex-col justify-center items-center w-full h-[100vh]">
     <h2 class="text-white text-[1.5rem] font-medium max-sm:text-[1.1rem]">Hi There!</h2>
     <h1 class="text-white text-[2rem] font-semibold max-sm:text-[1rem]">I'M <span class="text-yellow-500">Ivan J. Vasquez</span></h1>
     <p class="text-white text[1.35rem] font-medium max-sm:text-[0.85rem] max-sm:ml-1">Front-focused programmer who has completed his own and third-party projects. <br>
        I usually work with javascript language frameworks in the creation of mobile apps and web apps.</p>
      <RouterLink to="/contact" tag="button" class="text-[1.05rem] font-semibold flex items-center text-white mt-4
       rounded-2xl py-2 px-12 bg-pale-sky-600  hover:bg-yellow-500 transition duration-300 tracking-[0.2em]
       max-sm:text-[0.95rem] max-sm:px-8">
        Contact
        <span class="material-icons">
        phone
        </span>
    </RouterLink>
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useDisplay } from '../stores/useDisplay'
import { computed } from '@vue/reactivity';

const  useDisplays = useDisplay()
const display = computed(() => useDisplays.button) 

</script>

<style scoped>


</style>