import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'

export default function Features() {
	return (
		<section className='features section'>
			<Container>
				<SectionTitle
					eyebrow='Core Features'
					title='Built for performance and team identity'
					text='The first version focuses on strong architecture and clear user experience.'
				/>

				<div className='features__grid'>
					<div className='card'>
						<h3>Authentication</h3>
						<p>Secure access for members and future role-based control.</p>
					</div>

					<div className='card'>
						<h3>Dashboard</h3>
						<p>Central space for updates, activity and mission overview.</p>
					</div>

					<div className='card'>
						<h3>Profile System</h3>
						<p>Each member gets a digital identity inside Scorpion HQ.</p>
					</div>

					<div className='card'>
						<h3>Team Space</h3>
						<p>Founders, members and elite team sections in one place.</p>
					</div>
				</div>
			</Container>
		</section>
	)
}