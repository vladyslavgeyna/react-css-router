import { createContext, useState } from 'react'
import Router from './components/Router'

export const ThemeContext = createContext<{
	theme: ThemeType
	toggleTheme: () => void
}>({ theme: 'light', toggleTheme: () => {} })

type ThemeType = 'light' | 'dark'

function App() {
	const [theme, setTheme] = useState<ThemeType>('light')

	const toggleTheme = () => {
		setTheme(current => (current === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={theme}>
				<Router />
			</div>
		</ThemeContext.Provider>
	)
}

export default App
