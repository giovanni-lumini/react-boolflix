//context
import { createContext, useContext } from 'react';
const GlobalContext = createContext();

//useState
import { useState } from 'react';

//funzione che racchiude costanti e logica per:
//1-accedere all'api_key
//2-accedere all'url
//3-accedere all'array di film richiamando l'url e aggiornando "movies"
//4-accedere al valore scritto nell'imput tramite le funzioni scritte nell'imput in App.jsx, aggiornando "searchText" per la ricerca dei film
function GlobalContextProvider({ children }) {
    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');

    // Calcola dinamicamente l'URL dell'API
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=${searchText}`;

    function HandleSearchTextSubmit(e) {
        e.preventDefault();
        console.log(base_movies_api_url);

        // Chiamata API per aggiornare "movies"
        fetch(base_movies_api_url)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);
                setMovies(results);
            });
    }

    const values = {
        movies,
        setMovies,
        searchText,
        setSearchText,
        base_movies_api_url, // Non è necessario usarlo direttamente, ma lo lasciamo per eventuali utilizzi futuri
        HandleSearchTextSubmit,
        MovieList,
    };

    return (
        <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
    );
}

function MovieList() {
    //non ho ben chiara questa costante
    const { movies } = useGlobalContext();
    console.log(movies);

    return (
        //markup e map per ciclare nell'array di film
        <ul className="movie-list">
            {movies &&
                movies.map((movie, index) => (
                    <li
                        key={index}
                        style={{ borderBottom: '2px solid black', marginBottom: '1rem' }}
                    >
                        {movie.title} <br />
                        {movie.original_title} <br />
                        {movie.original_lenguage} <br />
                        {movie.vote_average} <br />
                    </li>
                ))}
        </ul>
    );
}

//non ho ben chiara questa funzione
function useGlobalContext() {
    return useContext(GlobalContext);
}

//esporto funzioni
export { GlobalContextProvider, useGlobalContext, MovieList };







/*     const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`;
 */

