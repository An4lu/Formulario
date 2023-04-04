import { globalStyles } from './styles/global'
import { Sheets } from './pages/Sheets'
import { Sidebar } from './components/Sidebar'
globalStyles()

export function App() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Sidebar />
      <Sheets />
    </div>
  )
}
