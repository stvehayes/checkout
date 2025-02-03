import { useState } from 'react';
import { Box, Text, Heading, Button, Octicon } from '@primer/react';
import { CreditCardIcon } from '@primer/octicons-react';
import EditPaymentMethod from './EditPaymentMethod/EditPaymentMethod';

function PaymentMethod() {
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
        paddingTop: 3,
        flexDirection: 'column',
        '@media (max-width: 768px)': { paddingTop: 2 },
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Heading
          as='h2'
          sx={{
            fontSize: 2,
            fontWeight: 600,
            flex: 1,
          }}
        >
          Payment method
        </Heading>
        {!isEditing && (
          <Button
            size='small'
            aria-label='Edit payment method'
            onClick={() => setIsEditing(!isEditing)}
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
            display: 'flex',
            padding: 3,
            fontSize: 2,
            border: '1px solid',
            borderColor: 'border.default',
            borderRadius: 2,
            boxShadow: 'shadow.small',
            gap: 3,
          }}
        >
          {isEditing ? (
            <EditPaymentMethod
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box>
                <Octicon
                  icon={CreditCardIcon}
                  sx={{ color: 'fg.muted' }}
                />
              </Box>
              <Box
                sx={{ fontSize: 1, display: 'flex', flexDirection: 'column' }}
              >
                <Text sx={{ fontWeight: 600 }}>Visa ending 3425</Text>
                <Text sx={{ color: 'fg.muted', fontSize: 1 }}>
                  Expiring: March 2028
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentMethod;
