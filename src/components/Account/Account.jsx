// eslint-disable-next-line no-restricted-imports
import { Text, Button, Avatar, Heading, Box } from '@primer/react';
import { ArrowSwitchIcon } from '@primer/octicons-react';

function Account() {
  return (
    <Box
      sx={{
        display: 'flex',
        py: 3,
        flexDirection: 'column',
        '@media (max-width: 768px)': {
          py: 2,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Heading
          as='h2'
          sx={{
            fontSize: 2,
            flex: 1,
          }}
        >
          Account
        </Heading>
        <Button
          size='small'
          leadingVisual={ArrowSwitchIcon}
          aria-label='Switch account'
        >
          Switch
        </Button>
      </Box>

      <Box
        sx={{
          display: 'grid',
          paddingTop: 3,
          gridTemplateColumns: 'auto',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: 3,
            fontSize: 1,
            border: '1px solid',
            borderColor: 'border.default',
            borderRadius: 2,
            boxShadow: 'shadow.small',
            gap: 3,

            '@media (max-width: 768px)': {
              gridTemplateColumns: 'auto',
            },
          }}
        >
          <Avatar
            square
            size={40}
            src='https://github.com/primer/react/assets/980622/99c92b77-11ec-4553-a7b4-c5759b70028e'
            sx={{
              boxShadow: 'none',
              flexShrink: 0,
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text
              sx={{
                fontWeight: 600,
              }}
            >
              Mojang
            </Text>
            <Text
              sx={{
                color: 'fg.muted',
              }}
            >
              Mojang Studios Inc. (Stockholm)
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Account;
