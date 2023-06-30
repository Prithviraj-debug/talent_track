import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home/home.component'
import Navbar from './components/navbar/navbar.component'
import SignIn from './components/sign-in/sign-in.component'
import SearchCandidate from './components/search-candidate/search-candidate.component'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path='find' element={<SearchCandidate />} />
      </Route>
    </Routes>
  )
}

export default App;
