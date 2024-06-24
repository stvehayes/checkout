import { Avatar, Box, Text } from '@primer/react';
import { Header } from '../../Header/Header';
import { Section } from '../../Section/Section';
import { billing } from '../../../data/Data';

export function Billing() {
  return (
    <Section
      title='Billing information'
      hasEdit
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', null, 'row'],
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            width: '100%',
          }}
        >
          <Avatar
            size={40}
            src={billing.avatar}
            sx={{ flexShrink: 0 }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text sx={{ fontSize: 1, fontWeight: '600' }}>{billing.name}</Text>
            <Text sx={{ fontSize: 0, color: 'fg.muted' }}>{billing.type}</Text>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            pl: 4,
            borderLeft: [null, null, '1px solid'],
            borderColor: [null, null, 'var(--van-gray-3)'],
          }}
        >
          <Text sx={{ fontSize: 1, fontWeight: '600' }}>{billing.company}</Text>
          <Text sx={{ fontSize: 0, color: 'fg.muted' }}>{billing.address}</Text>
          <Text sx={{ fontSize: 0, color: 'fg.muted' }}>{billing.city}</Text>
          <Text sx={{ fontSize: 0, color: 'fg.muted' }}>{billing.country}</Text>
        </Box>
      </Box>
    </Section>
  );
}
