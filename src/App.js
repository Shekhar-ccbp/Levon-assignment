import {ThemeProvider} from './context/ThemeContext'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => (
  <ThemeProvider>
    <div className="app">
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  </ThemeProvider>
)

export default App
