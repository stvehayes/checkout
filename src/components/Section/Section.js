import { Box as PrimerBox } from '@primer/react';
import { Header } from '../Header/Header';
import { Box } from '../Box/Box';

export function Section({ children, hasEdit, sx, title }) {
  return (
    <PrimerBox sx={{ mb: 5 }}>
      <Header
        title={title}
        hasEdit={hasEdit}
      />
      <Box sx={sx}>{children}</Box>
    </PrimerBox>
  );
}
