<template>
    <main>
     <button class="absolute top-2 right-2 p-2 text-white text-[1.05rem] font-semibold
     bg-pale-sky-600 rounded-2xl justify-center items-center max-lg:flex max-md:flex hidden max-sm:flex duration-500 btntlf"
     v-if="display === false" @click="useDisplays.toggleButton()">
      <span class="material-icons">
        reorder
    </span>
    </button>  
     <section v-if="display === false" class="mt-14 text-center border-b-[1.5px] border-pale-sky-600">  
     <span class="aboutTitle text-white">My </span>
     <span class="aboutTitle text-yellow-500">Education</span>
    </section> 
    <section v-if="display === false" class="flex justify-evenly h-[80vh] max-sm:h-auto"> 
        <div class="text-white mt-6 max-sm:text-center max-sm:mb-6">
            <span class="material-icons text-[1.5vw] max-sm:text-[1rem] max-sm:mr-3">
            school
            </span>
            <span class="text-[1.5vw]  max-sm:text-[1rem]">2022</span>
            <h3 class="text-[2vw] max-sm:text-[1rem] max-sm:mt-6">Front End Development</h3>
            <p class="text-[1.5vw] max-sm:text-[1rem] max-sm:mx-2 max-sm:mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Alias eveniet id non. Dignissimos, incidunt nobis. Ipsa fuga deserunt voluptatem impedit, 
            consequatur expedita pariatur temporibus cum mollitia repellat recusandae dolor aliquam?</p>
        </div>
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