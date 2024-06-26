import { useContext, useState } from 'react';
import { DashIcon, PlusIcon } from '@primer/octicons-react';
import { Box, IconButton, TextInput } from '@primer/react';
import { SeatsContext } from '../../context/SeatsContext';

export function Stepper() {
  const { seats, updateSeats } = useContext(SeatsContext);
  const [inputValue, setInputValue] = useState(seats);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      // Ensure the value is numeric
      setInputValue(value);
      updateSeats(Number(value));
    }
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setInputValue(seats); // Reset to current seats if input is empty
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <IconButton
        sx={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
        icon={DashIcon}
        onClick={() => {
          const newSeats = seats - 1;
          setInputValue(newSeats);
          updateSeats(newSeats);
        }}
      />
      <TextInput
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        sx={{
          borderRadius: 0,
          borderLeft: 0,
          borderRight: 0,
          alignContent: 'center',
          maxWidth: '75px',

          input: {
            textAlign: 'center',
          },
        }}
      />
      <IconButton
        onClick={() => {
          const newSeats = seats + 1;
          setInputValue(newSeats);
          updateSeats(newSeats);
        }}
        sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        icon={PlusIcon}
      />
    </Box>
  );
}
