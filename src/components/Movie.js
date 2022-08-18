function Movie({ coverImg, title, summary, genres }) {
	return (
		<div>
			<img src={coverImg} alt="movie.title" />
			<h2>{title}</h2>
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
