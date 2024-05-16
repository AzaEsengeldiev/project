import React from 'react'
import './pagination.scss'
import { PaginationProps } from '../../types'

const Pagination: React.FC<PaginationProps> = ({
	DataPerPage,
	totalDataPages,
	paginate
}) => {
	const pageNumbers: number[] = []

	for (let i: number = 1; i <= Math.ceil(totalDataPages / DataPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div className='pages'>
			{pageNumbers.map((pageNumber, index) => (
				<button onClick={() => paginate(pageNumber)} key={index}>
					{pageNumber}
				</button>
			))}
			
		</div>
	)
}

export default Pagination
