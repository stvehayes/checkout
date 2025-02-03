import { Box, Text } from '@primer/react';
import { Section } from '../Section/Section';

export function AddOns() {
  const products = [
    {
      name: 'Advanced Security',
      description: 'Work in progress...',
      price: {
        monthly: 49,
      },
    },
    {
      name: 'Copilot',
      description: 'Work in progress...',
      price: {
        monthly: 19,
      },
    },
  ];

  return (
    <Section
      sx={{ p: 0 }}
      title='Add-ons'
    >
      {products.map((product, index) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            borderBottom: index === products.length - 1 ? 'none' : '1px solid',
            borderColor: 'border.default',
          }}
        >
          <Text
            sx={{
              fontSize: 1,
              mb: 0,
              fontWeight: '600',
              display: 'block',
            }}
          >
            {product.name}
          </Text>
          <Text
            sx={{
              fontSize: 0,
              color: 'fg.muted',
            }}
          >
            {product.description}
          </Text>
        </Box>
      ))}
    </Section>
  );
}
