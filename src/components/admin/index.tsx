import React, { useState } from 'react'
import { useProductContext } from '../../context/ProductContext'
import './admin.scss'
import { IInputValue } from '../../types'
const Admin = () => {
	const { addProduct } = useProductContext()

	const [inputValue, setInputValue] = useState<IInputValue>({
		name: '',
		price: '',
		image: ''
	})
	// console.log(addProduct(inputValue))
	console.log(inputValue)
	function handleClick() {
		addProduct(inputValue)
		setInputValue({
			name: '',
			price: '',
			image: ''
		})
	}
	function onKeyPress(e: any) {
		if (e.key === 'Enter') {
			handleClick()
		} else {
			console.log('error Enter')
		}
	}

	console.log(inputValue.name)

	return (
		<div className='admin'>
			<div className='inputs'>
				<input
					value={inputValue.name}
					onKeyDown={onKeyPress}
					onChange={(e: any) =>
						setInputValue({ ...inputValue, name: e.target.value })
					}
					type='text'
					placeholder='name'
				/>
				<input
					onKeyDown={onKeyPress}
					value={inputValue.price}
					onChange={(e: any) =>
						setInputValue({ ...inputValue, price: e.target.value })
					}
					type='text'
					placeholder='price'
				/>
				<input
					onKeyDown={onKeyPress}
					value={inputValue.image}
					onChange={(e: any) =>
						setInputValue({ ...inputValue, image: e.target.value })
					}
					type='text'
					placeholder='url'
				/>
			</div>
			<button onClick={handleClick}>create</button>
		</div>
	)
}

export default Admin
