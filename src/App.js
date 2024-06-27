import { ThemeProvider, BaseStyles, Box } from '@primer/react';
import ColorModeSwitcher from './ColorModeSwitcher';
import { Payment } from './pages/Payment';
import { Navigation } from './components/Navigation/Navigation';
import { ProductSwitcher } from './ProductSwitcher';

function App() {
  return (
    <ThemeProvider colorMode='light'>
      <BaseStyles>
        <Box
          sx={{
            p: 3,
            display: 'flex',
            gap: 2,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        >
          <ProductSwitcher />
          <ColorModeSwitcher />
        </Box>
        <Navigation />
        <Payment />
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
