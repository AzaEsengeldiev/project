import React from 'react';
import { useProductContext } from '../../context/ProductContext';
import { Md10K, MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const SearchCard = () => {
  const { searchValues, deleteProduct } = useProductContext()
  const nav = useNavigate()
  
  console.log(searchValues);
  
  return (
		<div>
			{searchValues && (
				<div className='SearchBlock'>
					<img src={searchValues.image} alt='img' />

					<h1>{searchValues.name}</h1>
					<h2>${searchValues.price}</h2>

					{/* <div className='btns'>
						<button className='delBtn' onClick={() => deleteProduct(searchValues.id)}>
							<MdDelete />
						</button>
						<button  className='EditBtn' onClick={() => nav(`/edit/${searchValues.id}`)}>
            <AiFillEdit />
						</button>
					</div> */}
				</div>
			)}
		</div>
	)
};

export default SearchCard;