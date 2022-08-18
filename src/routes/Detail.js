import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
			.then((response) => response.json())
			.then((obj) => {
				setMovie(obj.data.movie);
				setLoading(false);
				// console.log('movie obj', obj.data.movie);
			});
	}, []);
	console.log('movie rendering');
	return (
		<div>
			<h1>
				<Link to="/">Home</Link>
			</h1>
			<br />
			{loading ? (
				<h2>Movie loading....</h2>
			) : (
				<div>
					<h2>{movie.title}</h2>
					<img src={movie.large_cover_image} alt={movie.title} />
					<p>{movie.description_full}</p>
				</div>
			)}
		</div>
	);
}

export default Detail;
