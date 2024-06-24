import { Box, Text } from '@primer/react';
import { Header } from '../../Header/Header';
import { Section } from '../../Section/Section';
import { CreditCardIcon } from '@primer/octicons-react';
import { billing, payment } from '../../../data/Data';

export function Method() {
  return (
    <Section
      title='Payment method'
      hasEdit
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 3,
        }}
      >
        <Box sx={{ display: 'inline-flex', mt: '2px', color: 'fg.muted' }}>
          <CreditCardIcon />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text sx={{ fontWeight: '600', fontSize: 1 }}>
            {payment.card} ending in {payment.number}
          </Text>
          <Text sx={{ fontSize: 0, color: 'fg.muted' }}>
            Expires {payment.expiration}
          </Text>
        </Box>
      </Box>
    </Section>
  );
}
