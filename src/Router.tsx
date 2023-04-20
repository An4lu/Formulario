import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Sheets } from './pages/Sheets'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Sheets" element={<Sheets />} />
      </Route>
    </Routes>
  )
}
