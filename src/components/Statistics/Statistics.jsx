import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export function Statistics ({stats, title}) {
	return ( <section className={css.statistics}>
		{title && (
			<h2 className={css.title}>{title}</h2>
		)}
		<ul className={css.statList}>
			{stats.map(stat => (
				<li key={stat.id} className="item">
				<span className="label">{stat.label} </span>
				<span className="percentage">{stat.percentage}%</span>
				</li>
			))}
		</ul>
	</section> )
}

Statistics.propTypes ={
	label: PropTypes.string,
	title: PropTypes.string.isRequired,
	stats: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,
	}))
}

