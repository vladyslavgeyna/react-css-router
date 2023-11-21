import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../../../App'
import Container from '../../utils/Container'
import styles from './Header.module.scss'
import './Header.scss'

const Header = () => {
	const currentTheme = useContext(ThemeContext)

	return (
		<header className={styles.header}>
			<nav>
				<Container>
					<div className={styles.headerBlock}>
						<div className={styles.block}>
							<NavLink className={styles.navlink} to={'/'}>
								Home
							</NavLink>
							<NavLink
								className={styles.navlink}
								to={'/contacts'}>
								Contacts
							</NavLink>
							<NavLink className={styles.navlink} to={'/about'}>
								About
							</NavLink>
						</div>
						<div className={styles.themeSwitchWrapper}>
							<p>{currentTheme.theme} mode</p>
							<ReactSwitch
								checked={currentTheme.theme === 'dark'}
								onChange={currentTheme?.toggleTheme}
							/>
						</div>
					</div>
				</Container>
			</nav>
		</header>
	)
}

export default Header
