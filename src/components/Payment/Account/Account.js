import { Avatar, Box, Button, Heading, Text } from '@primer/react';
import { Section } from '../../Section/Section';
import { organization } from '../../../data/Data';
import { ArrowSwitchIcon } from '@primer/octicons-react';

export function Account() {
  return (
    <Section title='Account'>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <Avatar
          size='40'
          sx={{
            flexShrink: 0,
          }}
          square
          src={organization.avatar}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Text
            sx={{
              fontSize: 1,
              mb: 0,
              fontWeight: '600',
              display: 'block',
            }}
          >
            {organization.name}
          </Text>
          <Text sx={{ fontSize: 0, color: 'fg.muted' }}>
            {organization.description}
          </Text>
        </Box>
        <Button
          size='small'
          leadingVisual={ArrowSwitchIcon}
        >
          Switch
        </Button>
      </Box>
    </Section>
  );
}
