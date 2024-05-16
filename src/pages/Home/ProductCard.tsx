import { useEffect } from 'react'
import { useProductContext } from '../../context/ProductContext'
import './home.scss'
import { useNavigate } from 'react-router-dom'
import { Md10K, MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'

const ProductCard = ({ el }: any) => {
	const { deleteProduct } = useProductContext()
	const nav = useNavigate()
  
	if (!el) return null
	return (
		<div className=''>
			<div className='container'>
				<div className='productBlock'>
					<img src={el.image} alt='img' />

					<h1>{el.name}</h1>
					<h2>${el.price}</h2>
					<div className='btns'>
						<button className='delBtn' onClick={() => deleteProduct(el.id)}>
							<MdDelete />
						</button>
						<button className='EditBtn' onClick={() => nav(`/edit/${el.id}`)}>
							<AiFillEdit />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
