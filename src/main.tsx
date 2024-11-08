import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider as ChakraProvider} from './components/ui/provider.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store/index.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ReduxProvider store={store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </ReduxProvider>
    </Router>
  </StrictMode>,
)
