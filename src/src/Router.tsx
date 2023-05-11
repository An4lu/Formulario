import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Simulations } from './pages/Simulations'
import { Sheets } from './pages/Sheets'
import { Results } from './pages/Results'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Sheets" element={<Sheets />} />
        <Route path="/Simulations" element={<Simulations />} />
        <Route path="/Results" element={<Results />} />
      </Route>
    </Routes>
  )
}
