import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import loaderContext from './context/LoaderContext'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MoviePage from './pages/movies/MoviePage'

function App() {

  const [loading, setLoading] = useState(false)

  return (
    <loaderContext.Provider value={{ loading, setLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies/:id' element={<MoviePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </loaderContext.Provider>
  )
}

export default App
