import { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  SegmentedControl,
  FormControl,
  TextInput,
} from '@primer/react';
import { InfoIcon } from '@primer/octicons-react';

function EditPaymentMethod({ onSave, onCancel }) {
  const CreditCard = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <FormControl>
        <FormControl.Label required>Card number</FormControl.Label>
        <TextInput
          block
          type='number'
        />
      </FormControl>
      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
        <FormControl sx={{ width: '100%' }}>
          <FormControl.Label required>Expiration</FormControl.Label>
          <TextInput
            block
            type='text'
            placeholder='MM/YYYY'
          />
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <FormControl.Label required>CVV</FormControl.Label>
          <TextInput
            block
            type='text'
          />
        </FormControl>
      </Box>
    </Box>
  );

  const PayPal = () => (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        padding: 3,
        border: '1px solid',
        borderColor: 'border.default',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box>
          <Heading
            as='h3'
            sx={{
              display: 'block',
              fontSize: 2,
              textAlign: 'center',
            }}
          >
            Sign in with PayPal
          </Heading>
          <Text sx={{ color: 'fg.muted', textAlign: 'center' }}>
            You will be securely redirected to sign in.
          </Text>
        </Box>
        <Button
          sx={{
            backgroundColor: '#0079C1 !important',
            alignSelf: 'center',
          }}
          variant='primary'
        >
          PayPal
        </Button>
      </Box>
    </Box>
  );

  const Azure = () => (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        padding: 3,
        border: '1px solid',
        borderColor: 'border.default',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box>
          <Heading
            as='h3'
            sx={{
              display: 'block',
              fontSize: 2,
              textAlign: 'center',
            }}
          >
            Sign in with Azure
          </Heading>
          <Text sx={{ color: 'fg.muted', textAlign: 'center' }}>
            You will be securely redirected to sign in.
          </Text>
        </Box>
        <Button sx={{ alignSelf: 'center' }}>Add Azure subscription</Button>
      </Box>
    </Box>
  );

  const TermsConditions = () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box sx={{ color: 'fg.muted' }}>
        <InfoIcon />
      </Box>
      <Text
        sx={{
          fontSize: 1,
          color: 'fg.muted',
        }}
      >
        You may see an authorization hold on your provided payment method after
        accruing significant usage of metered services. Authorization holds are
        temporary and are released as quickly as possible.
      </Text>
    </Box>
  );

  const [selected, setSelected] = useState('Credit or debit card');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Box>
        <SegmentedControl>
          <SegmentedControl.Button
            onClick={() => setSelected('Credit or debit card')}
            selected={selected === 'Credit or debit card'}
          >
            Credit or debit card
          </SegmentedControl.Button>
          <SegmentedControl.Button
            onClick={() => setSelected('PayPal')}
            selected={selected === 'PayPal'}
          >
            PayPal
          </SegmentedControl.Button>
          <SegmentedControl.Button
            onClick={() => setSelected('Azure')}
            selected={selected === 'Azure'}
          >
            Azure
          </SegmentedControl.Button>
        </SegmentedControl>
      </Box>
      <Box>
        {selected === 'Credit or debit card' ? (
          <CreditCard />
        ) : selected === 'PayPal' ? (
          <PayPal />
        ) : (
          <Azure />
        )}
      </Box>
      <TermsConditions />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'flex-end',
        }}
      >
        <Button
          size='small'
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          size='small'
          variant='primary'
          onClick={onSave}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default EditPaymentMethod;
