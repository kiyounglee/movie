import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const response = await fetch(
			'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
		);
		const obj = await response.json();
		setMovies(obj.data.movies);
		setLoading(false);
		// console.log('data : ', obj.data.movies);
	};
	useEffect(() => {
		getMovies();
	}, []);

	// console.log('rendering.....');
	return (
		<div className="App">
			<h1>Movies List Home</h1>

			{loading ? (
				<h2>Movie Lists loading.....</h2>
			) : (
				<div>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
