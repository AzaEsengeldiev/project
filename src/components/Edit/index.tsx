import React, { useEffect, useState } from 'react'
import { useProductContext } from '../../context/ProductContext'
import '../admin/admin.scss'
import { IInputValue } from '../../types'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
	const { addProduct, getOnProduct, onProduct, editProduct } =
		useProductContext()
	const { id } = useParams()
	const [name, setName] = useState<string>('')
	const [price, setPrice] = useState<string>('')
	const [image, setImage] = useState<string>('')
  const nav = useNavigate()
	const [inputValue, setInputValue] = useState<IInputValue>({
		name: '',
		price: '',
		image: ''
	})

	

	useEffect(() => {
		getOnProduct(id)
	}, [])

	useEffect(() => {
		if (onProduct) {
			setName(onProduct.name)
			setPrice(onProduct.price)
			setImage(onProduct.image)
		}
	}, [onProduct])
	console.log(onProduct)

	function handleSave() {
		const editedProduct = {
			name,
			price,
			image
		}
		editProduct(id, editedProduct)
		setName('')
		setPrice('')
		setImage('')
    nav('/')

	}

	return (
		<div className='admin'>
			{onProduct && (
				<div className='inputs'>
					<input
						value={name}
						onChange={(e: any) => setName(e.target.value)}
						type='text'
						placeholder='name'
					/>
					<input
						value={price}
						onChange={(e: any) => setPrice(e.target.value)}
						type='text'
						placeholder='price'
					/>
					<input
						value={image}
						onChange={(e: any) => setImage(e.target.value)}
						type='text'
						placeholder='url'
					/>
					<button onClick={handleSave}>edit</button>
				</div>
			)}
		</div>
	)
}

export default Edit
