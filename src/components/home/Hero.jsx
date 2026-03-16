import Container from '../common/Container'
import Button from '../common/Button'

export default function Hero() {
	return (
		<section className='hero'>
			<Container>
				<div className='hero__content'>
					<p className='hero__badge'>Welcome to Scorpion HQ</p>
					<h1 className='hero__title'>
						Enter the world of cyber intelligence and elite teamwork
					</h1>
					<p className='hero__description'>
						Scorpion is a futuristic team platform built for problem solvers,
						cyber defenders and brilliant minds ready to protect the digital
						world.
					</p>

					<div className='hero__actions'>
						<Button text='Get Started' to='/auth' />
						<Button text='Explore Team' to='/team' type='secondary' />
					</div>
				</div>
			</Container>
		</section>
	)
}