import { useState, useEffect } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const response = await fetch(
			'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
		);
		const obj = await response.json();
		setMovies(obj.data.movies);
		setLoading(false);
		console.log('data : ', obj.data.movies);
	};
	useEffect(() => {
		getMovies();
	}, []);

	console.log('rendering.....');
	return (
		<div className="App">
			<h1>Movie Appp</h1>

			{loading ? (
				<h2>Movie Lists loading.....</h2>
			) : (
				<div>
					{movies.map((movie) => (
						<div key={movie.id}>
							<img src={movie.medium_cover_image} alt="movie.title" />
							<h2>{movie.title}</h2>
							<p>{movie.summary}</p>
							<ul>
								{movie.genres.map((gen) => (
									<li key={gen}>{gen}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
