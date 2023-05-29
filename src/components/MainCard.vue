<script>
import { store } from '../store'
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
    name: "MainCard",
    data() {
        return {
            store
        }
    },
    methods: {


        getFlag(language) {
            if (language == 'en') {
                return 'fi fi-gb';
            } else if (language == 'zh' || language == 'id' || language == 'ja' || language == 'ko') {
                return 'fi fi-un';
            }
            return 'fi fi-' + language;
        },

        // METODO STELLE
        starsMovieFilms(vote) {
            const starsMovieFilm = Math.ceil(vote / 2);
            return starsMovieFilm
        }

    }

}
</script>

<template>
    <main>




        <div class="card">

            <!-- FILM -->
            <h2 class="title">Film</h2>

            <!-- IMG FILM ALTRIMENTI IMG/NOTFOUND -->
            <div class="card-film" v-for="element, i in store.film">
                <img v-show="(element.backdrop_path != null)"
                    :src="`https://image.tmdb.org/t/p/w342/${element.backdrop_path}`" :alt="element.title">
                <img v-show="(element.backdrop_path == null)" src="../assets/img:notFound.png" />

                <!-- INFORMAZIONI FILM -->
                <div class="information">
                    <span>
                        <h3>Titolo:<strong class="titleFilm">{{ element.title }}</strong></h3>
                    </span>
                    <span>
                        <h3>Titolo originale:<strong class="titleFilm">{{ element.original_title }}</strong></h3>
                    </span>

                    <!-- BANDIERE -->
                    <h4 :class="getFlag(element.original_language)"></h4>

                    <!-- VOTO ALTRIMENTI N/A -->
                    <div v-if="element.vote_average > 0">
                        <span>Voto:</span>
                        <span v-for="starsMovieFilm in starsMovieFilms(element.vote_average)">
                            <font-awesome-icon icon="fa-solid fa-star" class="stella" />
                        </span>
                    </div>
                    <div v-else>
                        <h3>Voto: n/a</h3>
                    </div>

                    <!-- DESCRIZIONE FILM CON L'UTILIZZO DI SPLICE FINO A 100 LETTERE -->
                    <p><small>Overview: {{ element.overview.slice(0, 100) }}...</small></p>
                </div>
            </div>





            <!-- SERIE TV -->
            <h2 class="title">SerieTv</h2>

            <!-- IMG SERIETV ALTRIMENTI IMG/NOTFOUND -->
            <div class="card-serie" v-for="element, i in store.serieTv">
                <img v-show="(element.backdrop_path != null)"
                    :src="`https://image.tmdb.org/t/p/w342/${element.backdrop_path}`">
                <img v-show="(element.backdrop_path == null)" src="../assets/img:notFound.png" />

                <!-- INFORMAZIONI SERIETV -->
                <div class="information">
                    <span>
                        <h3>Titolo:<strong class="titleFilm">{{ element.name }}</strong></h3>
                    </span>
                    <span>
                        <h3>Titolo originale:<strong class="titleFilm">{{ element.original_name }}</strong></h3>
                    </span>

                    <!-- BANDIERE -->
                    <h4 :class="getFlag(element.original_language)"></h4>

                    <!-- VOTO ALTRIMENTI N/A -->
                    <div v-if="element.vote_average > 0">
                        <span>Voto:</span>
                        <span v-for="starsMovieFilm in starsMovieFilms(element.vote_average)">
                            <font-awesome-icon icon="fa-solid fa-star" class="stella" />
                        </span>
                    </div>
                    <div v-else>
                        <h3>Voto: n/a</h3>
                    </div>

                    <!-- DESCRIZIONE SERIE TV CON L'UTILIZZO DI SPLICE FINO A 100 LETTERE -->
                    <p><small>Overview: {{ element.overview.slice(0, 100) }}...</small></p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../style.scss' as *;




main {
    background-color: #222;
    margin: 0 auto;
}

.card {
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.card-film,
.card-serie {

    width: 30%;
    height: 300px;
    color: white;
    margin-bottom: 50px;

    &:hover {
        border: 1px solid white;
    }

    &:hover .information {
        display: block;
    }

    &:hover img {
        display: none;
    }
}

h3 {
    padding-bottom: 10px;
}

h4 {
    padding-bottom: 20px;
}


small {
    padding-top: 30px;
}


img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;

}

.information {
    display: none;
    padding: 20px;
}

.stella {
    color: goldenrod;
}

.titleFilm {
    color: grey;
    padding-bottom: 5px;

}
</style>