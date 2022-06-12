import React from 'react';


function MovieCard ( {title, poster, genre, rate}) {
    
    
    
    return ( 
    <>
        <div className='Card'>
            <div className='title'>{title}</div>
            <div className='poster'>
                <img src={poster} alt='poster' />
            </div>
            <div className='genre'>{genre}</div>
            <div className='rating'>{rate}</div>

        </div>
    </>
    )
};

export default MovieCard