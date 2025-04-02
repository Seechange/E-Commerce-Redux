import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </div>

  )
}

export default App
