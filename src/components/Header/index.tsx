import { IoMdSearch } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'
import { SlBasketLoaded } from 'react-icons/sl'
import './header.scss'
import { IoMdHome } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useProductContext } from '../../context/ProductContext'
import Search from '../Search'

const Header = () => {
	const { BooleanSearch, setBooleanSearch } = useProductContext()
	console.log(BooleanSearch)

	return (
		<header>
			<div id='header'>
				<div className='container'>
					<div className='header'>
						<div className='nav'>
							{BooleanSearch ? (
								<Search />
							) : (
								<p>Plantas y Semillas Macetas Accesorios Blog Contacto</p>
							)}
							<div className='buttons'>
								<nav>
									{/* {BooleanSearch ? (
										<button onClick={() => setBooleanSearch(!BooleanSearch)}>
											<IoMdSearch />
										</button>
									) : ( */}
									<button onClick={() => setBooleanSearch(!BooleanSearch)}>
										<IoMdSearch />
									</button>
									{/* )} */}
									<Link to={'/'}>
										<button>
											<IoMdHome />
										</button>
									</Link>

									<Link to={'/admin'}>
										<button>
											<FaUser />
										</button>
									</Link>
								</nav>
							</div>
						</div>
						<h1>Green Land</h1>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
