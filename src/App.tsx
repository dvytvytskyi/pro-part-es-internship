import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { LanguageProvider } from './contexts/LanguageContext'
import './styles/App.scss'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

