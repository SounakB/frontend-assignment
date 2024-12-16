import {React} from "react";
import "../styles/Pagination.css"

export default function Pagination({currentPage, totalPageCount, pageBtnCount = 5, handlePageChange}) {
	let pageNumbers = [];

	const half = Math.floor(pageBtnCount / 2);

	let startPage = Math.max(1, currentPage - half);

	const offset = currentPage + half - totalPageCount;

	if (offset > 0) {
		startPage = startPage - offset;
	}

	pageNumbers = Array.from({length: pageBtnCount}, (_, i) => startPage + i);

	return (
		<div className="pagination">
			<button
				disabled={currentPage === 1}
				onClick={() => handlePageChange(1)}
			>
				{'<<'}	First
			</button>
			<button
				disabled={currentPage === 1}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				{'<'}	Prev
			</button>
			{pageNumbers.map((number) => (
				<button
					key={number}
					className={`page-number ${currentPage === number ? 'active' : ''}`}
					onClick={() => handlePageChange(number)}
				>
					{number}
				</button>
			))}
			<button
				disabled={currentPage === totalPageCount}
				onClick={() => handlePageChange(currentPage + 1)}
			>
				Next {'>'}
			</button>
			<button
				disabled={currentPage === totalPageCount}
				onClick={() => handlePageChange(totalPageCount)}
			>
				Last {'>>'}
			</button>

			<span>
          Jump to page:
          <input
						type="number"
						value={currentPage}
						onChange={(e) => handlePageChange(parseInt(e.target.value))}
						min={0}
						max={totalPageCount}
					/>
        </span>
		</div>
	);
}