import { Box, Text, Heading, ToggleSwitch, RadioGroup, Radio, FormControl } from '@primer/react';
import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { products } from '../../data/Data';

function AddOns() {
  const { selectedProduct } = useContext(ProductsContext);
  const currentProduct = products[selectedProduct];
  const [addonAccess, setAddonAccess] = useState({});

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        py: 3,
        flexDirection: 'column',
        '@media (max-width: 768px)': { py: 2 },
      }}
    >
      <Heading
        as='h2'
        sx={{ flex: 1, mb: 3, fontSize: 2 }}
      >
        Add-ons
      </Heading>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'border.default',
          borderRadius: 2,
          boxShadow: 'shadow.small',
        }}
      >
        {currentProduct.addons?.map((addon) => (
          <Box
            key={addon}
            sx={{
              display: 'flex',
              padding: 3,
              fontSize: 2,
              gap: 3,
              flexDirection: 'column',
              ...(currentProduct.addons?.indexOf(addon) !== currentProduct.addons?.length - 1 && {
                borderBottom: '1px solid',
                borderColor: 'border.default',
              }),
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                fontSize: 1,
                gap: 3,
              }}
            >
              <Box>
                <Text
                  sx={{
                    fontWeight: 600,
                    display: 'block'
                  }}
                >
                  {addon}
                </Text>
                <Text
                  sx={{
                    color: 'fg.muted',
                  }}
                >
                  {products.find(p => p.name === addon)?.description}
                </Text>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                flexShrink: 0,
              }}>
                <Text
                  sx={{
                    fontWeight: 600,
                    marginTop: 1,
                  }}
                >
                  {formatter.format(products.find(p => p.name === addon)?.price.monthly)} / {products.find(p => p.name === addon)?.license}
                </Text>
                <Text sx={{
                  color: 'fg.muted',
                  fontSize: 0,
                }}>
                  per month
                </Text>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Text
                  sx={{
                    fontSize: 1,
                    fontWeight: 600,
                    width: '100%',
                  }}
                >
                  Enable and select access
                </Text>
                <ToggleSwitch />
              </Box>
              {false && <RadioGroup
                name={`${addon}-access`}
                value={addonAccess[addon] || 'all'}
                onChange={(e) => setAddonAccess(prev => ({
                  ...prev,
                  [addon]: e.target.value
                }))}
              >
                <FormControl>
                  <Radio defaultChecked value="all" />
                  <FormControl.Label>All organizations</FormControl.Label>
                  <FormControl.Caption>Available to all organizations in your enterprise</FormControl.Caption>
                </FormControl>
                <FormControl disabled>
                  <Radio value="select" />
                  <FormControl.Label>Only select organizations</FormControl.Label>
                  <FormControl.Caption>Available only to the organizations that you choose</FormControl.Caption>
                </FormControl>
              </RadioGroup>}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AddOns;