import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'

export default function TeamPreview() {
	return (
		<section className='team-preview section'>
			<Container>
				<SectionTitle
					eyebrow='Team'
					title='The minds behind Scorpion'
					text='A powerful unit built by ambitious people who want to shape the future of cyber defense.'
				/>

				<div className='team-preview__grid'>
					<div className='card'>
						<h3>Founder</h3>
						<p>Ozod</p>
					</div>

					<div className='card'>
						<h3>Co-Founder</h3>
						<p>Scorpion Team Partner</p>
					</div>

					<div className='card'>
						<h3>Elite Members</h3>
						<p>Future top-level problem solvers and cyber defenders.</p>
					</div>
				</div>
			</Container>
		</section>
	)
}