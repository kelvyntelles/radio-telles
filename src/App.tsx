import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes';

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default';
import { Container } from './AppStyles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Container>
          <AppRoutes />
        </Container>  
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}


