import { NavLink } from 'react-router-dom'
import Container from '../../utils/Container'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<Container>
					<div className={styles.block}>
						<NavLink className={styles.navlink} to={'/'}>
							Home
						</NavLink>
					</div>
				</Container>
			</nav>
		</header>
	)
}

export default Header
