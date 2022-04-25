import React from "react";

export const MovieCard = ({movie}) => {

    console.log(movie);

    return (
        <>
            <div className="movie-card">
                <img src={`${movie.attributes.thumb}`}></img>
            </div>
        </>
    );
};