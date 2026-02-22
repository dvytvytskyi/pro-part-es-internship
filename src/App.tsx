import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { LanguageProvider } from './contexts/LanguageContext'
import { FavoritesProvider } from './contexts/FavoritesContext'
import './styles/App.scss'

function App() {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </FavoritesProvider>
    </LanguageProvider>
  )
}

export default App

