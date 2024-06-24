import { ThemeProvider, BaseStyles } from '@primer/react';
import ColorModeSwitcher from './ColorModeSwitcher';
import { Payment } from './pages/Payment';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <ThemeProvider colorMode='light'>
      <BaseStyles>
        <ColorModeSwitcher />
        <Navigation />
        <Payment />
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
