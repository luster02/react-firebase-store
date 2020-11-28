import { Fragment } from 'react';
import { Navigation } from './routes'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/global.styles'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <Navigation />
      <Navbar />
    </Fragment>
  );
}

export default App;
