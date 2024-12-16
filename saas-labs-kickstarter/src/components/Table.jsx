import { React, useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";
import "../styles/Table.css";

export default function Table ({ fields = {}, data = [], perPageLimit = 5 }) {
	const [currentPage, setCurrentPage] = useState(1);
	const pageCount = Math.ceil(data.length / perPageLimit);

	const handlePageChange = (page) => {
		if (page > 0 && page <= pageCount) {
			setCurrentPage(page);
		}
	};

	const [currentPageData, setCurrentPageData] = useState(() =>
		data.slice(0, perPageLimit)
	);

	useEffect(() => {
		setCurrentPageData(
			data.slice(
				(currentPage - 1) * perPageLimit,
				currentPage * perPageLimit
			)
		);
	}, [currentPage, data, perPageLimit]);

	function TableHead() {
		return (
			<thead>
			<tr>
				{Object.values(fields).map((field) => {
					return <th key={field.title}>{field.title}</th>
				})}
			</tr>
			</thead>
		);
	}

	function TableBody() {
		return (
			<tbody>
			{currentPageData.map((row) => (
				<tr key={row['s.no']}>
					{Object.entries(fields).map((field) => (
						<td key={field[0]}>{field[1].render(row[field[0]])}</td>
					))}
				</tr>
			))}
			</tbody>
		);
	}

	return (
		<div>
			<table className="table">
				<TableHead />
				<TableBody />
			</table>
			<div className="table-footer">
			<Pagination currentPage={currentPage} totalPageCount={pageCount} handlePageChange={handlePageChange} />
			</div>
		</div>
	);
};
