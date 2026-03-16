import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'

export default function About() {
	return (
		<section className='about section'>
			<Container>
				<SectionTitle
					eyebrow='About Scorpion'
					title='A mission-driven cyber platform'
					text='Scorpion is more than a website. It is a digital HQ designed for collaboration, cyber awareness and elite team identity.'
				/>

				<div className='about__grid'>
					<div className='card'>
						<h3>Mission</h3>
						<p>
							To build a strong cyber-focused team that solves problems,
							prevents attacks and creates impactful solutions.
						</p>
					</div>

					<div className='card'>
						<h3>Vision</h3>
						<p>
							To create a futuristic digital environment where every member
							feels part of an advanced intelligence network.
						</p>
					</div>
				</div>
			</Container>
		</section>
	)
}