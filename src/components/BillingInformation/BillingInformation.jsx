import { useState } from 'react';
// eslint-disable-next-line no-restricted-imports
import { Text, Button, Avatar, Heading, Box } from '@primer/react';
import EditBillingInformation from './EditBillingInformation/EditBillingInformation';

function BillingInformation() {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: 3,
        '@media (max-width: 768px)': {
          py: 2,
        },
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Heading
          sx={{ fontSize: 2, flex: 1 }}
          as='h2'
        >
          Billing information
        </Heading>
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(!isEditing)}
            size='small'
            aria-label='Edit billing information'
          >
            Edit
          </Button>
        )}
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
            padding: 3,
            fontSize: 2,
            border: '1px solid',
            borderColor: 'border.default',
            borderRadius: 2,
            boxShadow: 'shadow.small',
          }}
        >
          {isEditing ? (
            <EditBillingInformation
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 3,
                '@media (max-width: 768px)': { gridTemplateColumns: 'auto' },
              }}
            >
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Avatar
                  sx={{ boxShadow: 'none', flexShrink: 0 }}
                  size={40}
                  src='https://avatars.githubusercontent.com/u/92997159?v=4'
                />
                <Box
                  sx={{ fontSize: 1, display: 'flex', flexDirection: 'column' }}
                >
                  <Text sx={{ fontWeight: 600 }}>Mona</Text>
                  <Text sx={{ color: 'fg.muted' }}>Personal account</Text>
                </Box>
              </Box>
              <Box
                sx={{
                  fontSize: 1,
                  display: 'flex',
                  paddingLeft: 32,
                  flexDirection: 'column',
                  borderLeft: '1px solid',
                  borderColor: 'border.default',

                  '@media (max-width: 768px)': {
                    paddingTop: 3,
                    paddingLeft: 0,
                    borderTop: '1px solid',
                    borderColor: 'border.default',
                    borderLeft: 0,
                  },
                }}
              >
                <Text sx={{ fontWeight: 600 }}>Playground Inc.</Text>
                <Text sx={{ color: 'fg.muted' }}>88 Colin P Kelly Jr Way</Text>
                <Text sx={{ color: 'fg.muted' }}>San Francisco, CA 94117</Text>
                <Text sx={{ color: 'fg.muted' }}>United States of America</Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default BillingInformation;
