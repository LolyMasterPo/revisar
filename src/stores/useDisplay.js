import { defineStore } from 'pinia'
export const useDisplay = defineStore('useDisplay', {
    state: () => {
        return {
          button: false,
         
        }
      },
      actions: {
        toggleButton() {
         if (this.button == false) { 
          return this.button = true;
        }
        
        else {
          return this.button = false
        }
        }
      },  
      getters: {
    },
})