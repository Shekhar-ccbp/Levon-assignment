import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import './Header.css'

const Header = () => {
  const {darkMode, toggleTheme} = useContext(ThemeContext)

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <h1>HORIZON FREE</h1>
      <button onClick={toggleTheme} type="button">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  )
}

export default Header
