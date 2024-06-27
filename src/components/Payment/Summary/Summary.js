import { useContext } from 'react';
import { Box, Button, Heading, Link, Text } from '@primer/react';
import { Section } from '../../Section/Section';
import { SeatsContext } from '../../../context/SeatsContext';
import { Line } from './Line/Line';
import { products } from '../../../data/Data';
import { ConvertToPrice, CalculateSalesTax } from '../../../util/Helpers';
import { CadenceContext } from '../../../context/CadenceContext';
import { ProductsContext } from '../../../context/ProductsContext';

export function Summary() {
  const { selectedProduct } = useContext(ProductsContext);
  const product = products[selectedProduct];
  const { seats } = useContext(SeatsContext);
  const { cadence } = useContext(CadenceContext);

  const currentCadence =
    cadence === 'monthly' ? product.price.monthly : product.price.yearly;
  const total = seats * currentCadence;
  const tax = CalculateSalesTax(total);

  return (
    <Section>
      <Heading
        sx={{
          fontSize: 2,
          pb: 3,
          borderBottom: '1px solid',
          borderColor: 'border.muted',
        }}
      >
        Summary
      </Heading>
      <Line
        title={product.type}
        seats={seats}
        license={product.license}
        price={seats * currentCadence}
        cadence={cadence.charAt(0).toUpperCase() + cadence.slice(1)}
      />
      <Box
        sx={{
          py: 3,
          borderBottom: '1px solid',
          borderColor: 'border.muted',
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
        title={`${cadence.charAt(0).toUpperCase() + cadence.slice(1)} total`}
        price={total + tax}
        description={cadence === 'monthly' ? 'Due on July 1, 2024' : null}
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
          {cadence === 'monthly'
            ? 'Complete purchase'
            : `Pay now (${ConvertToPrice(total + tax)})`}
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
