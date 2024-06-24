import { Text, SegmentedControl } from '@primer/react';

export function Control() {
  return (
    <SegmentedControl
      aria-label='Monthly or yearly picker'
      sx={{
        width: 'fit-content',
        mb: 4,
      }}
    >
      <SegmentedControl.Button defaultSelected>Monthly</SegmentedControl.Button>
      <SegmentedControl.Button
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
