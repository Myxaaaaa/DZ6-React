import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import './styles/films.css';

const Films = () => {
    const [films, setFilms] = useState([]);
    const [hoveredFilm, setHoveredFilm] = useState(null);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await axios.get('/films.json');
                setFilms(response.data);
            } catch (error) {
                console.error('Ошибка получения данных', error);
            }
        };

        fetchFilms();

        return () => {
            setHoveredFilm(null);
        };
    }, []);

    return (
        <div className='films'>
            {films.map((film) => (
                <div
                    className='film-container'
                    key={film.id}
                    onMouseEnter={() => setHoveredFilm(film)}
                    onMouseLeave={() => setHoveredFilm(null)}
                >
                    {hoveredFilm && hoveredFilm === film ? (
                        <ReactPlayer
                            url={film.ref}
                            playing
                            loop
                            controls={false}
                            width='100%'
                            height='100%'
                            style={{ position: 'absolute', top: 0, left: 0, width: 540, height: 300 }}
                        />
                    ) : null}
                    <img src={film.avatar} alt={film.tittle} className='film-image' width='360px' />
                </div>
            ))}
        </div>
    );
};

export default Films;
