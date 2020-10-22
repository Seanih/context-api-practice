import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
	const [movieList, setMovieList] = useContext(MovieContext);

	const navStyle = {
		display: 'flex',
		justifyContent: 'space-around',
		background: 'rgb(25, 50, 175)',
		color: 'white',
		padding: '20px 0',
		marginBottom: '20px',
	};
	return (
		<div style={navStyle}>
			<h3>Sean Cold</h3>
			<h3>Number of movies: {movieList.length}</h3>
		</div>
	);
};

export default Nav;
