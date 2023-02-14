<template>
    <main v-if="display === false"  class="bg-pale-sky-900">
     <section class="mt-14 text-center border-b-[1.5px] border-pale-sky-600 max-sm:mb-5">  
     <span class="aboutTitle text-white">My </span>
     <span class="aboutTitle text-yellow-500">Portfolio</span>
    </section> 
    <section class="flex justify-evenly h-[80vh] bg-pale-sky-900
     max-sm:h-auto max-md:h-auto max-md:flex-col max-md:ml-[270px]  max-sm:flex-col max-sm:ml-[45px]" v-if="display === false" >
     <button class="absolute top-2 right-2 p-2 text-white text-[1.05rem] font-semibold
     bg-pale-sky-600 rounded-2xl justify-center items-center max-lg:flex max-md:flex hidden max-sm:flex duration-500 btntlf"
     v-if="display === false" @click="useDisplays.toggleButton()">
      <span class="material-icons">
        reorder
    </span>
    </button>
        <div class="w-[200px] h-[200px] bg-projectOne bg-cover bg-center border-none rounded-2xl mt-8
        max-sm:mb-5 max-sm:w-[250px] max-sm:h-[250px] shadow-xl shadow-yellow-500
         cursor-pointer hover:scale-125 duration-300"></div>
        <div class="w-[200px] h-[200px] bg-projectTwo bg-cover bg-center border-none rounded-2xl mt-8
        max-sm:mt-5 max-sm:mb-5 max-sm:w-[250px] max-sm:h-[250px] shadow-xl  shadow-yellow-500
         cursor-pointer hover:scale-125 duration-300"></div>
        <div class="w-[200px] h-[200px] bg-white border-none rounded-2xl mt-8
        max-sm:mt-5 max-sm:w-[250px] max-sm:h-[250px] shadow-xl shadow-yellow-500 max-sm:mb-16 
        bg-projectThree bg-cover bg-center cursor-pointer hover:scale-125 duration-300 max-md:mb-[70px]"></div>
    </section>
    </main>
</template>

<script setup>
import { useDisplay } from '../stores/useDisplay'
import { computed } from '@vue/reactivity';

const  useDisplays = useDisplay()
const display = computed(() => useDisplays.button) 

</script>

<style scoped>

</style>