import Container from '../../utils/Container'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<Container>
			<footer className={styles.footer}>
				<div className={styles.authorBlock}>
					<span>
						Copyright{' '}
						<a
							className={styles.authorLink}
							target='_blank'
							href='https://github.com/vladyslavgeyna'>
							Vladyslav Geyna
						</a>
					</span>
				</div>
			</footer>
		</Container>
	)
}

export default Footer
