import { useState, useEffect } from 'react'
/* import { Link } from 'react-router-dom'; */

export default function FilmList() {

    /* const con useSate vuoto */
    const [filmData, setFilmData] = useState({})

    const url = "https://api.themoviedb.org/3/search/movie?api_key=562680e6b977144414885873994b4099&query=ritorno+al+futuro"

    /*funzione per la chiamata API fetch */
    function fetchData() {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.results);
                setFilmData(data.results)
            })
    }

    /* funzione che richiama la chiamata API, da inserire nell'onClick del button */
    function handleClick(e) {
        fetchData()
    }

    return (
        <>
            <button className="btn btn-outline-success" type="button" onClick={handleClick}>Search</button>

            <section className="film">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {
                            filmData.data ?
                                filmData.data.map(film => (
                                    <div className="col" key={film.id}>
                                        <div className="card text-center">
                                            <h3>{film.title}</h3>
                                            <p>{film.overview}</p>
                                            <p>{film.original_lenguage}</p>
                                        </div>
                                    </div>
                                )) :
                                <p>No results yet</p>
                        }
                    </div>
                </div>
            </section >
        </>
    )

}