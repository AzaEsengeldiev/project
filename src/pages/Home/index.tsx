import React, { useEffect, useState } from 'react'
import './home.scss'
import { IProduct } from '../../types'
import ProductCard from './ProductCard'
import { useProductContext } from '../../context/ProductContext'
import SearchCard from '../../components/Search/SearchCard'
import Pagination from '../../components/Pagination'

const Home = () => {
	const { data, readProduct, searchValues } =
		useProductContext()
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [DataPerPage] = useState<number>(3)
	// console.log(searchValues)

	useEffect(() => {
		readProduct()
		// setCurrentPage(1)
	}, [])

	// console.log(data)
	const lastDataIndex: number = currentPage + DataPerPage
	const firstDataIndex: number = lastDataIndex - DataPerPage
	const currentData = data.slice(firstDataIndex, lastDataIndex)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
	const nextPage = () => {
		const totalPages = Math.ceil(data.length / DataPerPage)
		if (currentPage < totalPages) {
			setCurrentPage(prev => prev + 1)
		}
	}

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(prev => prev - 1)
		}
	}

	return (
		<div id='home'>
			<div className='container'>
				<div className='home'>
					{searchValues !== null ? (
						<SearchCard />
					) : (
						<>
							<div className='Products'>
								{currentData.map((el: IProduct, idx: number) => (
									<ProductCard el={el} key={idx} />
								))}
							</div>
							<Pagination
								DataPerPage={DataPerPage}
								totalDataPages={data.length}
								paginate={paginate}
							/>
						</>
					)}
					<div className='pagBtn'>
						<button disabled={currentPage === 1} onClick={prevPage}>
							Prev Page
						</button>
						<button disabled={currentPage === data.length} onClick={nextPage}>
							Next Page
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home
