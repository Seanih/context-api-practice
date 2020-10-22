import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
	const [movieList, setMovieList] = useState([
		{
			name: 'Terminator 2: Judgement Day',
			price: 'priceless',
			id: 800,
		},
		{
			name: 'The Dark Knight',
			price: '9.999',
			id: 10,
		},
		{
			name: 'Captain America: The Winter Soldier',
			price: '15.99',
			id: 2014,
		},
	]);
	return (
		<>
			{movieList.map(movie => (
				<Movie name={movie.name} price={movie.price} key={movie.id} />
			))}
		</>
	);
};

export default MovieList;
