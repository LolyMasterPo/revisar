<template>
   <button class="absolute top-2 right-2 p-2 text-white text-[1.05rem] font-semibold
     bg-pale-sky-600 rounded-2xl justify-center items-center max-lg:flex max-md:flex hidden max-sm:flex duration-500 btntlf"
     v-if="display === false" @click="useDisplays.toggleButton()">
      <span class="material-icons">
        reorder
    </span>
    </button>
    <main v-if="display === false">
     <section class="mt-14 max-sm:mb-[20px] text-center border-b-[1.5px] border-pale-sky-600">  
     <span class="aboutTitle text-yellow-500 max-sm:text-[1.6rem]">About </span>
     <span class="aboutTitle text-white max-sm:text-[1.6rem]">Me</span>
    </section> 
    <section  class="flex justify-around items-center h-[80vh] max-sm:h-auto max-sm:justify-center max-sm:flex-col
     bg-pale-sky-900">
        <div class="flex flex-col">
            <span class="dataChar max-sm:text-[1rem] max-sm:font-medium ">Name : <span class="text-yellow-500">Ivan Vasquez</span></span>
            <span class="dataChar max-sm:text-[1rem] max-sm:font-medium ">Age: <span class="text-yellow-500">21</span></span>
            <span class="dataChar max-sm:text-[1rem] max-sm:font-medium ">Post: <span class="text-yellow-500">Front End Developer</span></span>
            <span class="dataChar max-sm:text-[1rem] max-sm:font-medium ">Lenguaje: <span class="text-yellow-500">Spanish/English</span></span>
            <button class="flex text-white text-[1.10rem] mt-4 py-[10px] bg-pale-sky-600 justify-center rounded-2xl
            font-semibold hover:bg-amber-500 transition duration-300 tracking-[0.05em] 
            max-sm:mb-8 max-sm:text-[0.9rem] max-sm:font-medium max-sm:tracking-[0.03] max-sm:py-[7px]">
                <a href="http://mega.io/desktop">
                    Donwload CV 
                </a>
                <span class="material-icons">
                download
                </span>
            </button>
        </div>
        <div>
          <section>
            <div class="p-16 max-sm:p-8  bg-pale-sky-600 mb-4 text-center font-semibold rounded-lg max-sm:text-[1rem]">
                <span class="text-yellow-500 text-[1.35rem] max-sm:text-[1rem]">5</span><br>
                <span class="text-white text-[1.35rem] max-sm:text-[1rem]">Months Experience</span>
            </div>
            <div class="p-16 max-sm:p-8 bg-pale-sky-600 text-center font-semibold rounded-lg">
                <span class="text-yellow-500 text-[1.35rem] max-sm:text-[1rem]">4</span><br>
                <span class="text-white text-[1.35rem] max-sm:text-[1rem]">Projects Completed</span>
            </div>
          </section>
        </div>
    </section>
    </main>
</template>

<script setup>
import { useDisplay } from '../stores/useDisplay';
import { computed } from '@vue/reactivity';

const  useDisplays = useDisplay()
const display = computed(() => useDisplays.button) 

</script>

<style scoped>

</style>