import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArticlePage from './components/ArticlePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
