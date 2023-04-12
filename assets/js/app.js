
const { createApp } = Vue

createApp({
    data() {
        return {
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            randomail: null,
            title: 'AXIOS'

        }
    },
    method(){
        /* generate10Mail(){
            
        } */
    },
    mounted() {

        for (let index = 0; index < 10; index++) {
        axios.get(this.url).then(response => {
                // prendo l'intero responso (solo i dati) e lo salvo nell'oggetto vue
                //console.log(response); // contiene un oggetto 
                console.log(response.data);
                //this.my_data = response.data 
                // prendo dal responso solo i dati di cui ho bisogno.
                //console.log(response.data.response);
                this.randomail += response.data.response;
                    //let text = 
                    
                })
                
            }

    }
}).mount('#app')
