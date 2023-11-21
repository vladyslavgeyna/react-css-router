import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Home from './pages/home/Home'
import NotFound from './pages/not-found/NotFound'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route element={<Home />} index />
					<Route element={<Contacts />} path='contacts' />
					<Route element={<About />} path='about' />
					<Route element={<NotFound />} path='*' />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
