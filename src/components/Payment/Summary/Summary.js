import { useContext } from 'react';
import { Box, Button, Heading, Link, Text } from '@primer/react';
import { Section } from '../../Section/Section';
import { SeatsContext } from '../../../context/SeatsContext';
import { Line } from './Line/Line';
import { product } from '../../../data/Data';
import { CalculateSalesTax } from '../../../util/Helpers';

export function Summary() {
  const { seats } = useContext(SeatsContext);

  const total = seats * product.price;
  const tax = CalculateSalesTax(total);

  return (
    <Section>
      <Heading
        sx={{
          fontSize: 2,
          pb: 3,
          borderBottom: '1px solid',
          borderColor: 'var(--van-gray-3)',
        }}
      >
        Summary
      </Heading>
      <Line
        title={product.type}
        seats={seats}
        license={product.license}
        price={seats * product.price}
        cadence={
          product.cadence.charAt(0).toUpperCase() + product.cadence.slice(1)
        }
      />
      <Box
        sx={{
          py: 3,
          borderBottom: '1px solid',
          borderColor: 'var(--van-gray-3)',
        }}
      >
        <Line
          condensed
          title='Subtotal'
          price={total}
        />
        <Line
          condensed
          title='Total'
          price={tax}
        />
      </Box>
      <Line
        title='Monthly payment'
        price={total + tax}
        description='Due on July 1, 2024'
        bold
      />
      <Box
        sx={{
          pt: 3,
        }}
      >
        <Button
          variant='primary'
          sx={{
            width: '100%',
            mb: 2,
          }}
        >
          Complete purchase
        </Button>
        <Button
          sx={{
            width: '100%',
            mb: 2,
          }}
        >
          Cancel
        </Button>
        <Text
          sx={{
            mt: 3,
            display: 'block',
            textAlign: 'center',
            color: 'fg.muted',
            fontSize: 0,
          }}
        >
          By clicking complete purchase you agree to our{' '}
          <Link href='/'>Terms of Service</Link> and{' '}
          <Link href='/'>Privacy</Link>.
        </Text>
      </Box>
    </Section>
  );
}
