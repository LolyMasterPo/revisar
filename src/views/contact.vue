<template>
    <main v-if="display === false" class="bg-pale-sky-900">
    <button class="absolute top-2 right-2 p-2 text-white text-[1.05rem] font-semibold
     bg-pale-sky-600 rounded-2xl justify-center items-center hidden max-sm:flex max-lg:flex max-md:flex duration-500 btntlf"
     v-if="display === false" @click="useDisplays.toggleButton()">
      <span class="material-icons">
        reorder
    </span>
    </button>
     <section  class="mt-14 text-center border-b-[1.5px] border-pale-sky-600">  
     <span class="aboutTitle text-yellow-500">Contact </span>
     <span class="aboutTitle text-white">Me</span>
    </section> 
    <section class="flex justify-around max-md:h-auto max-md:mt-7 max-md:flex-col items-center h-[80vh] max-sm:h-auto max-sm:flex-col
      max-sm:mt-[25px]" v-if="display === false">
        <div class="flex flex-col max-sm:mb-2">
            <h1 class="aboutTitle text-white max-sm:text-[1.5rem]">Contact Info</h1>
            <span class="text-white mt-3 text-[1.35rem] max-sm:text-[1.25rem]">
                <span class="material-icons mr-1 text-yellow-500">
                 email
                 </span>
                vivan4003@gmail.com
            </span>
            <span class="text-white mt-3 text-[1.35rem] max-sm:text-[1.25rem]">
                <span class="material-icons mr-1 text-yellow-500">
                 phone
                 </span>
                (58) 426-912-2239 
            </span>
            <span class="text-white mt-3 text-[1.35rem] max-sm:text-[1.25rem]">
                <span class="material-icons mr-1 text-yellow-500">
                 pin_drop
                 </span>
                Sucre, Venezuela
            </span>
        </div>
        <div class="max-sm:mt-6 max-sm:mb-[70px] max-md:mt-7">
          <section>
            <form action="https://formsubmit.co/e3ff04e722ccb236d41b1ed4cdcdff3d" method="post" class="flex flex-col">
                <input type="text" name="name" placeholder="Name" class="mb-4 border-none outline-none
                rounded-sm bg-opacity-50 bg-pale-sky-600 w-[400px] text-[1.2rem] text-white font-semibold max-sm:w-[300px]">
                <input type="email" name="email" placeholder="Email" class="mb-4 border-none outline-none
                rounded-sm bg-opacity-50 bg-pale-sky-600 w-[400px] text-[1.2rem] text-white font-semibold max-sm:w-[300px]">
                <textarea name="comments" cols="15" rows="5" placeholder="comments" class="mb-4 border-none 
                bg-pale-sky-600 bg-opacity-50 outline-none rounded-sm w-[400px] text-[1.2rem]
                resize-none font-semibold text-white max-sm:w-[300px] max-sm:mb-10"></textarea>
                <button type="submit" class="max-md:mt-4 max-md:ml-[125px] p-2 flex justify-center items-center text-white bg-pale-sky-600 hover:bg-yellow-500
                cursor-pointer duration-300 w-[120px] rounded-2xl text-[1.2rem] font-semibold max-sm:ml-[85px]">
                Send 
                <span class="material-icons ml-2">
                send
                </span>
                </button>
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_next" value="http://127.0.0.1:5173/">
            </form>
          </section>
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