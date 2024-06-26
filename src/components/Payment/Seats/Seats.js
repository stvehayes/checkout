import { useContext } from 'react';
import { Box, Text } from '@primer/react';
import { Section } from '../../Section/Section';
import { product } from '../../../data/Data';
import { ConvertToPrice } from '../../../util/Helpers';
import { Stepper } from '../../Stepper/Stepper';
import { Control } from '../../Control/Control';
import { CadenceContext } from '../../../context/CadenceContext';

export function Seats() {
  const { cadence } = useContext(CadenceContext);
  return (
    <Section title='Total seats'>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {product.type === 'Enterprise' && <Control />}
          <Text
            sx={{
              fontSize: 1,
              mb: 0,
              fontWeight: '600',
              display: 'block',
            }}
          >
            {product.type}
          </Text>
          <Text sx={{ fontSize: 0, color: 'fg.muted' }}>
            {product.description}
          </Text>
        </Box>
        <Box>
          <Box
            sx={{
              flexDirection: 'column',
              display: 'inline-flex',
              alignItems: 'flex-end',
            }}
          >
            <Text
              sx={{
                fontSize: 1,
                mb: 0,
                fontWeight: '600',
                display: 'inline-block',
                textAlign: 'right',
                flexShrink: 0,
                width: '120px',
              }}
            >
              {ConvertToPrice(
                cadence === 'monthly'
                  ? product.priceMonthly
                  : product.priceYearly,
                0
              )}{' '}
              / {product.license}
            </Text>
            <Text sx={{ fontSize: 0, color: 'fg.muted' }}>
              {product.cadence === 'monthly' ? 'per month' : 'per year'}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'block',
          mt: 4,
        }}
      >
        <Stepper />
      </Box>
    </Section>
  );
}
