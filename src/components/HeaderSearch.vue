<script>
import { store } from '../store'
import axios from 'axios';


export default {
    name: "HeaderSearch",

    data() {
        return {
            store,
            inputsearch: ""
        }
    },



    methods: {
        MethSearch() {

            // REQUEST WHIT AXIOS
            axios.get(`${this.store.urlApi}movie?api_key=${this.store.keyApi}&query=${this.inputsearch}`).then(r => {
                this.store.film = r.data.results;

                // console.log("Film", this.store.film);
            })

            axios.get(`${this.store.urlApi}tv?api_key=${this.store.keyApi}&query=${this.inputsearch}`).then(r => {
                this.store.serieTv = r.data.results;

                // console.log("SerieTV", this.store.serieTv)
            })

            this.inputsearch = null;
        }

    },

}
</script>

<template>
    <!-- BOOLFLIX CON INPUT E BUTTON -->
    <header>
        <div class="box-header">
            <h1>BOOLFLIX</h1>

            <div>
                <input type="text" placeholder="Cerca Film o SerieTv..." v-model="inputsearch" @keyup.enter="MethSearch">
                <button @click="MethSearch">Cerca</button>
            </div>

        </div>
    </header>
</template>


<style scoped lang="scss">
@use '../style.scss' as *;



.box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    background-color: $color-black;
}

h1 {
    color: $color-red;
}

input {
    padding: 10px;
    border: 1;
}

button {
    padding: 10px;
    border: 1;
    cursor: pointer;
}
</style>