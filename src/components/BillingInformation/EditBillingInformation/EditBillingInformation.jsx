import { Button, FormControl, Select, TextInput, Box } from '@primer/react';

function EditBillingInformation({ onSave, onCancel }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <FormControl>
        <FormControl.Label required>Business name</FormControl.Label>
        <TextInput block />
      </FormControl>
      <FormControl>
        <FormControl.Label required>Address</FormControl.Label>
        <TextInput block />
      </FormControl>
      <FormControl>
        <FormControl.Label>Address line 2</FormControl.Label>
        <TextInput block />
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          gap: 3,
          alignItems: 'center',
          '@media (max-width: 768px)': { flexDirection: 'column' },
        }}
      >
        <FormControl sx={{ width: '100%' }}>
          <FormControl.Label required>City</FormControl.Label>
          <TextInput block />
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <FormControl.Label required>Postal code</FormControl.Label>
          <TextInput block />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          gap: 3,
          alignItems: 'center',
          '@media (max-width: 768px)': { flexDirection: 'column' },
        }}
      >
        <FormControl
          sx={{ width: '100%' }}
          required
        >
          <FormControl.Label>Country/region</FormControl.Label>
          <Select block>
            <Select.Option value='option'> </Select.Option>
          </Select>
        </FormControl>
        <FormControl
          sx={{ width: '100%' }}
          required
        >
          <FormControl.Label>State/province</FormControl.Label>
          <Select block>
            <Select.Option value='option'> </Select.Option>
          </Select>
        </FormControl>
      </Box>
      <FormControl>
        <FormControl.Label>VAT/GST ID</FormControl.Label>
        <TextInput block />
      </FormControl>
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

export default EditBillingInformation;
