import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Features from '../components/home/Features'
import TeamPreview from '../components/home/TeamPreview'
import CTA from '../components/home/CTA'

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Features />
			<TeamPreview />
			<CTA />
		</>
	)
}