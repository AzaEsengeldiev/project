import { Route, Routes } from 'react-router-dom'
import { IRoutes } from '../types'
// import Home from '../components/Products'
// import Admin from '../admin'
import Home from '../pages/Home'
import Admin from '../components/admin'
import Edit from '../components/Edit'

export default function MainRoutes() {
	const PUBLIC: IRoutes[] = [
		{ link: '/', element: <Home />, id: 1 },
		{ link: '/admin', element: <Admin />, id: 2 },
    {link: '/edit/:id',  element : <Edit/>, id: 2}
	]

	return (
		<Routes>
			{PUBLIC.map((el: any) => (
				<Route path={el.link} element={el.element} key={el.id} />
			))}
		</Routes>
	)
}
