import { useContext } from 'react';
import { DashIcon, PlusIcon } from '@primer/octicons-react';
import { Box, IconButton, TextInput } from '@primer/react';
import { product } from '../../data/Data';
import { useState } from 'react';
import { SeatsContext } from '../../context/SeatsContext';

export function Stepper() {
  const { seats, updateSeats } = useContext(SeatsContext);
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
          updateSeats(seats - 1);
        }}
      />
      <TextInput
        value={seats}
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
          updateSeats(seats + 1);
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
