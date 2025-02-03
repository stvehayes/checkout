import { ThemeProvider, BaseStyles, Box } from '@primer/react';
import ColorModeSwitcher from './ColorModeSwitcher';
import { Payment } from './pages/Payment';
import { Navigation } from './components/Navigation/Navigation';
import { ProductSwitcher } from './ProductSwitcher';

function App() {
  return (
    <ThemeProvider colorMode='light'>
      <BaseStyles>
        <Box sx={{ bg: 'canvas.default' }}>
          <Navigation />
          <Payment />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
