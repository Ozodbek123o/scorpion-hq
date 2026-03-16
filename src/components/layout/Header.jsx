import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import Button from '../common/Button'
import Container from '../common/Container'
import Logo from '../common/Logo'

export default function Header() {
	return (
		<header className='header'>
			<Container>
				<div className='header__content'>
					<Link to='/'>
						<Logo />
					</Link>

					<nav className='nav'>
						{navLinks.map(link => (
							<NavLink
								key={link.id}
								to={link.path}
								className={({ isActive }) =>
									isActive ? 'nav__link nav__link--active' : 'nav__link'
								}
							>
								{link.label}
							</NavLink>
						))}
					</nav>

					<Button to='/auth' text='Join Team' />
				</div>
			</Container>
		</header>
	)
}
