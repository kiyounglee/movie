import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres }) {
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<p>{summary}</p>
			<ul>
				{genres.map((gen) => (
					<li key={gen}>{gen}</li>
				))}
			</ul>
		</div>
	);
}
export default Movie;
