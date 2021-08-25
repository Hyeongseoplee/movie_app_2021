import React from "react";
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster }) {
    return (
    <div className='movie__poster'>
        <img src={poster} alt={title} title={title}></img>

        <div className='movie__data'>
            <h2 className='movie__title'>{ title }</h2>
            <h4 className='movie__year'>{ year }</h4>
            <span className='movie__summary'>{ summary }</span>
        </div>
    </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
}

export default Movie;