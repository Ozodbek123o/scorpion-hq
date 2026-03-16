import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<section className='page'>
			<div className='container'>
				<h1>404</h1>
				<p>Page not found.</p>
				<Link to='/'>Back to Home</Link>
			</div>
		</section>
	)
}