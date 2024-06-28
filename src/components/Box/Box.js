import { Box as PrimerBox } from '@primer/react';

export function Box({ children, sx }) {
  return (
    <PrimerBox
      sx={{
        bg: 'canvas.default',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'border.default',
        boxShadow: 'shadow.small',
        p: 3,
        ...sx,
      }}
    >
      {children}
    </PrimerBox>
  );
}
