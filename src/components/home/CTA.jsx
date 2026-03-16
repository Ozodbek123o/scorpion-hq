import Container from '../common/Container'
import Button from '../common/Button'

export default function CTA() {
	return (
		<section className='cta section'>
			<Container>
				<div className='cta__box'>
					<h2>Ready to join the Scorpion universe?</h2>
					<p>
						Start with the first version of the platform and evolve it into a
						full cyber ecosystem.
					</p>
					<Button text='Enter Scorpion' to='/auth' />
				</div>
			</Container>
		</section>
	)
}