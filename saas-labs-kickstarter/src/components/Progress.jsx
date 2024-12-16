import "../styles/Progress.css";

export default function Progress({value}) {

	const numericValue = Number(value);

	let colorClass = 'green';

	if (numericValue < 75) {
		colorClass = 'yellow';
	}

	if (numericValue < 50) {
		colorClass = 'orange';
	}

	if (numericValue < 25) {
		colorClass = 'red';
	}

	return (<div className='progress-container'>
		<span className="label">{value}</span>
		<progress className={colorClass} value={numericValue} max="100"/>
	</div>)
}