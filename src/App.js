import { useState, useEffect } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
			.then((response) => response.json())
			.then((obj) => {
				setMovies(obj.data.movies);
				setLoading(false);
				console.log(movies);
			});
	}, []);
	console.log('rendering.....');
	return (
		<div className="App">
			<h1>Movie Appp</h1>

			{loading ? <h2>Movie Lists loading.....</h2> : null}
		</div>
	);
}

export default App;
