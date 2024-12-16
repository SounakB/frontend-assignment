import './App.css'
import Table from "./components/Table.jsx";
import Progress from "./components/Progress.jsx";
import useFetch from "./hooks/useFetch.js";
function App() {
	const DATA_URL = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';

	const {data, loading, error} = useFetch(DATA_URL);

	return (
		<>
			<span className="text-title">Kickstarter Projects</span>
			<div className="card">
				{ loading ? <div className="table-place-holder">Loading...</div> : (
					error ? <div className="table-place-holder text-error">{error}</div> :
						<Table fields={{
						"s.no": {title: "S.No.", render: (value) => value},
						"percentage.funded": {
							title: "Percentage funded",
							render: (value) => <Progress value={value}/>
						},
						"amt.pledged": {title: "Amount pledged", render: (value) => value.toLocaleString()}
					}}
																																						 data={data}/>
				)}

			</div>
		</>
	)
}

export default App
