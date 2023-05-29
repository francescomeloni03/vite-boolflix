<script>
import HeaderSearch from './components/HeaderSearch.vue';
import MainCard from './components/MainCard.vue';

import axios from 'axios';
import { store } from './store';


export default {
    components: {
        HeaderSearch,
        MainCard,
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        axios.get(this.store.urlApiTv).then(films => {
            this.store.film = films.data.results

        })

        axios.get(this.store.urlApiSeries).then(serie => {
            this.store.serieTv = serie.data.results
        })
    }
}
</script>

<template>
    <HeaderSearch />
    <MainCard />
</template>


<style></style>

