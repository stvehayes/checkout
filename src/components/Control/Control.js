import { useContext } from 'react';
import { SegmentedControl } from '@primer/react';
import { CadenceContext } from '../../context/CadenceContext';

export function Control() {
  const { cadence, updateCadence } = useContext(CadenceContext);

  return (
    <SegmentedControl
      aria-label='Monthly or yearly picker'
      sx={{
        width: 'fit-content',
        mb: 4,
      }}
    >
      <SegmentedControl.Button
        onClick={() => updateCadence('monthly')}
        selected={cadence === 'monthly'}
      >
        Monthly
      </SegmentedControl.Button>
      <SegmentedControl.Button
        onClick={() => updateCadence('yearly')}
        selected={cadence === 'yearly'}
        sx={{
          flexGrow: 0,
          button: {
            width: '100px',
          },
        }}
      >
        Yearly
      </SegmentedControl.Button>
    </SegmentedControl>
  );
}

// Comment
