// const Pagination = require('tui-pagination');
import {defaultSearchForForm,renderTrendMovies,paginationpoisk} from "./renderMovies"
import { TheMoviedbAPI } from './themoviedb-api';
import galleryCardTemplate from '../templates/galleryCard.hbs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const paginationEl=document.querySelector(".tui-pagination")
const galleryEl = document.querySelector('.gallery__list');
const themoviedbApi2 = new TheMoviedbAPI;
const paginationTrend = new Pagination(paginationEl,{
        totalItems: 1000,
        itemsPerPage: 40,
        visiblePages: 5
    })
    

async function renderTrendMovies2(){
    const trendMovies = await themoviedbApi2.fetchTrendMovies();
    
    galleryEl.innerHTML=galleryCardTemplate(trendMovies.data);
}

paginationTrend.on('beforeMove', (event) => {
    themoviedbApi2.page=event.page
    renderTrendMovies2()
    console.log(renderTrendMovies);
});

