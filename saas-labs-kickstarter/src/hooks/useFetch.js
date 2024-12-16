import { useState, useEffect } from 'react';

export default function useFetch (url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}

				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				setError(error.message ?? 'Oops! Something went wrong');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { data, loading, error };
};