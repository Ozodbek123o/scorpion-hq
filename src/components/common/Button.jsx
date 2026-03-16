import { Link } from 'react-router-dom'

export default function Button({ text, to = '/', type = 'primary' }) {
	return (
		<Link to={to} className={`btn btn--${type}`}>
			{text}
		</Link>
	)
}