import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import GamePage from './pages/GamePage/GamePage'
import OrderPage from './pages/OrderPage/OrderPage'

function App() {
	return (
		<div className='app'>
			<Header />
			<Routes>
				<Route path='/:title' element={<GamePage />} />
				<Route path='/' element={<HomePage />} />
				<Route path='/order' element={<OrderPage />} />
			</Routes>
		</div>
	)
}

export default App
