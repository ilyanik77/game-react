import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'

function App() {
	return (
		<div className='app'>
            <Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</div>
	)
}

export default App
