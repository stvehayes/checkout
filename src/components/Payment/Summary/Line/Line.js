import { Box, Text } from '@primer/react';
import { ConvertToPrice } from '../../../../util/Helpers';

export function Line({
  bold,
  cadence,
  condensed,
  description,
  price,
  seats,
  title,
  license,
}) {
  return (
    <Box
      sx={{
        fontSize: 1,
        display: 'flex',
        flexDirection: 'column',
        borderBottom: condensed ? 'none' : '1px solid',
        borderColor: condensed ? 'none' : 'border.muted',
        py: condensed ? 0 : 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          sx={{
            fontWeight: '600',
            display: 'inline-block',
          }}
        >
          {title || 'Product'}
        </Text>
        <Text sx={{ fontWeight: bold ? 600 : 'normal' }}>
          {ConvertToPrice(price || 0)}
        </Text>
      </Box>
      {cadence && seats && (
        <Text
          sx={{
            color: 'fg.muted',
            fontSize: 0,
          }}
        >
          {`${cadence} · ${seats} ${seats !== 1 ? license + 's' : license}`}
        </Text>
      )}
      {description && (
        <Text
          sx={{
            color: 'fg.muted',
            fontSize: 0,
          }}
        >
          {description}
        </Text>
      )}
    </Box>
  );
}
