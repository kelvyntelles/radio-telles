import { Routes, Route } from 'react-router-dom'
import { Empresa } from './pages/Empresa'
import { Contato } from './pages/Contato'

export function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Empresa />} />
        <Route path='/contato' element={<Contato />} />
    </Routes>
  )
}