import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styled/Theme.ts'
import { GlobalStyled } from './styled/Global.styled.ts'
import { AuthContextProvider } from './context/AuthContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <GlobalStyled />
          <App />
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
