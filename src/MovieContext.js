import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
	const [movieList, setMovieList] = useState([
		{
			name: 'Terminator 2: Judgement Day',
			price: 'priceless',
			id: 800,
		},
		{
			name: 'The Dark Knight',
			price: '9.99',
			id: 10,
		},
		{
			name: 'Captain America: The Winter Soldier',
			price: '15.99',
			id: 2014,
		},
	]);

	return (
		<MovieContext.Provider value={[movieList, setMovieList]}>
			{props.children}
		</MovieContext.Provider>
	);
};
