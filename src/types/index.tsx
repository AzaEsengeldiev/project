export interface IRoutes {
	link: string
	element: any
	id: number
}

export interface IProduct {
	id: any
	name: string
	price: string
	image: string
}
export interface IInputValue {
	name: string
	price: string
	image: string
}

 export interface PaginationProps {
	DataPerPage: number
	totalDataPages: number
	paginate: (pageNumber: number) => void
}