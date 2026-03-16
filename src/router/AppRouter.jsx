import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import AboutPage from '../pages/AboutPage'
import AuthPage from '../pages/AuthPage'
import DashboardPage from '../pages/DashboardPage'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import TeamPage from '../pages/TeamPage'

export default function AppRouter() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/team' element={<TeamPage />} />
				<Route path='/auth' element={<AuthPage />} />
				<Route path='/dashboard' element={<DashboardPage />} />
			</Route>

			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
