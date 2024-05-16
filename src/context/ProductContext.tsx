import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { IProduct } from '../types'

const productContext = createContext<any | undefined>(undefined)
export const useProductContext = () => useContext(productContext)

export default function ProductContext({ children }: any) {
	let API = 'http://localhost:3000/data'
	const [searchValues, setSearchValues] = useState<IProduct | null>(null)
	const [data, setData] = useState<IProduct[]>([])
	const [BooleanSearch, setBooleanSearch] = useState<Boolean>(false)
	const [onProduct, setOnProduct] = useState<IProduct | null>(null)
	const [SearchInputValue, setSearchInputValue] = useState<string>('')

	async function addProduct(newProduct: object) {
		await axios.post(API, newProduct)
	}
	async function readProduct() {
		const { data } = await axios.get(API)
		setData(data)
	}
	async function deleteProduct(id: any) {
		try {
			await axios.delete(`${API}/${id}`)
			console.log('All data deleted successfully')
			readProduct()
		} catch (error) {
			console.error('Error deleting data:', error)
		}
	}
	function search(name: string) {
		if (data) {
			const res: IProduct | undefined = data.find(el => el.name === name)
			if (res) {
				console.log(res)
				setSearchValues(res)
			} else {
				console.log('Product not found')
			}
		} else {
			alert('No data available!')
		}

		// console.log();
	}
	async function getOnProduct(id: any) {
		const { data } = await axios(`${API}/${id}`)
		try {
			setOnProduct(data)
		} catch (error) {
			console.error('Error deleting data:', error)
		}
	}
	async function editProduct(id: number, editedProduct: object) {
		await axios.patch(`${API}/${id}`, editedProduct)
	}

	const values = {
		addProduct,
		readProduct,
		data,
		deleteProduct,
		search,
		BooleanSearch,
		setBooleanSearch,
		searchValues,
		onProduct,
		getOnProduct,
		editProduct,
		setSearchInputValue,
		SearchInputValue
	}
	return (
		<productContext.Provider value={values}>{children}</productContext.Provider>
	)
}
