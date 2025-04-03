import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import './styles/App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Sidebar 
        darkMode={darkMode} 
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <div className="main-content">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Dashboard darkMode={darkMode} activeTab={activeTab} />
      </div>
    </div>
  )
}

export default App
