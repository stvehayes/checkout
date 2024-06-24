import { Text, SegmentedControl } from '@primer/react';

export function Control() {
  return (
    <SegmentedControl
      aria-label='Monthly or yearly picker'
      sx={{ mb: 4, button: { width: 'auto' } }}
    >
      <SegmentedControl.Button defaultSelected>Monthly</SegmentedControl.Button>
      <SegmentedControl.Button>Yearly</SegmentedControl.Button>
    </SegmentedControl>
  );
}
