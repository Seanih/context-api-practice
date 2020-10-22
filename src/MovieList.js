import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
	const [movieList, setMovieList] = useContext(MovieContext);
	return (
		<>
			{movieList.map(movie => (
				<Movie name={movie.name} price={movie.price} key={movie.id} />
			))}
		</>
	);
};

export default MovieList;
