import { reactive } from "vue";


export const store = reactive({
    keyApi: "f511429152cd0bade825d0c6256249fb",
    urlApi: "https://api.themoviedb.org/3/search/",
    urlApiTv: "https://api.themoviedb.org/3/search/movie?api_key=aeb9f466c19d1b6c563187701f212a3e&language=it_IT&query=",
    urlApiSeries: "https://api.themoviedb.org/3/search/tv?api_key=aeb9f466c19d1b6c563187701f212a3e&language=it_IT&query=",
    film: [],
    serieTv: [],
})