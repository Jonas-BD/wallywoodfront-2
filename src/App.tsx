import './App.scss'
import { MainLayout } from './layout/MainLayout'
import { HomePage } from './pages/HomePage/HomePage'
import { PosterPage } from './pages/PosterPage/PosterPage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PosterDetails } from './components/molecules/PosterDetails/PosterDetails'
import { PosterList } from './components/molecules/PosterList/PosterList'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/posters" element={<PosterPage />}>
          <Route index element={<Navigate to="drama" replace />} />
          <Route path=":genreSlug" element={<PosterList mode="byGenre" />} />
          <Route path=":genreSlug/:posterId" element={<PosterDetails />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
