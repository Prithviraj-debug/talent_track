import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home/home.component'
import Navbar from './components/navbar/navbar.component'
import SearchCandidate from './components/search-candidate/search-candidate.component'
import Authentication from './components/authentication/authentication.component'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<Authentication />} />
        <Route path='find' element={<SearchCandidate />} />
      </Route>
    </Routes>
  )
}

export default App;
