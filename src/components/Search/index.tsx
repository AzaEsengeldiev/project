import React, { useState } from 'react'
import { useProductContext } from '../../context/ProductContext'
import './search.scss'
import { IInputValue, IProduct } from '../../types'

const Search = () => {
	const { search, searchValues, setSearchInputValue} = useProductContext()
	const [searchValue, setSearchValue] = useState<string>('')
	// console.log( typeof searchValue)

	const handleSearch = () => {
		search(searchValue)
setSearchInputValue(searchValue)
	}
	// console.log(typeof searchValues.name)

	let str: IInputValue = {
		name: 'fd',
		price: '',
		image: ''
	}

	return (
		<div className='search'>
			<input onChange={e => setSearchValue(e.target.value)} type='text' />
			<button onClick={handleSearch}>search</button>
		
		</div>
	)
}

export default Search
