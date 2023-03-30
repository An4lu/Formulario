import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Sidebar from './components/Navbar/Sidebar'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx'
import Sheets from './pages/Sheets.jsx'
import { globalStyles } from './styles/global'

function App() {
  globalStyles()

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sheets" element={<Sheets />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
