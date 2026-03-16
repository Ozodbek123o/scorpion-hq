export default function SectionTitle({ eyebrow, title, text }) {
	return (
		<div className='section-title'>
			{eyebrow && <span className='section-title__eyebrow'>{eyebrow}</span>}
			<h2 className='section-title__heading'>{title}</h2>
			{text && <p className='section-title__text'>{text}</p>}
		</div>
	)
}