import { useState, useContext } from 'react';
import { Box, PageLayout, Heading, Button } from '@primer/react';
import { ArrowLeftIcon } from '@primer/octicons-react';
import { ProductsContext } from '../../context/ProductsContext';
import { products } from '../../data/Data';

import Overview from '../Overview/Overview';
import Account from '../Account/Account';
// import BillingPeriod from '../BillingPeriod/BillingPeriod'
import TotalLicenses from '../TotalLicenses/TotalLicenses';
import BillingInformation from '../BillingInformation/BillingInformation';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import AddOns from '../AddOns/AddOns';

const CREDIT = 0;
const TAX = 0.06;

export function Payment() {
  const { selectedProduct } = useContext(ProductsContext);
  const currentProduct = products[selectedProduct];
  const YEARLY_PRICE = currentProduct.price.yearly;
  const MONTHLY_PRICE = currentProduct.price.monthly;
  const PRODUCT = currentProduct.name;

  // Only initialize billingPeriod state if yearly price exists
  const [billingPeriod, setBillingPeriod] = useState(YEARLY_PRICE ? 'monthly' : 'monthly');
  const [licenses, setLicenses] = useState(25);

  return (
    <Box
      sx={{
        display: 'flex',
        paddingBottom: 48,
        flexDirection: 'column',
        background: 'canvas.default',
        justifyContent: 'stretch',
        alignItems: 'stretch',
      }}
    >
      <PageLayout containerWidth='large'>
        <PageLayout.Content
          padding='none'
          sx={{
            p: [0, 0, 4],
            minHeight: ['auto', 'auto', '100vh'],
          }}
        >
          <Box>
            <Button
              as='a'
              variant='invisible'
              href='/'
              leadingVisual={ArrowLeftIcon}
              sx={{
                marginBottom: 48,
                marginLeft: 3 * -1,
                fontSize: 2,
                fontWeight: 500,
                '@media (max-width: 768px)': {
                  marginBottom: 3,
                  marginLeft: -3,
                },
              }}
            >
              Compare plans
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              maxWidth: 'var(--breakpoint-xxlarge)',
              py: 2,
              margin: '0 auto',
              flexDirection: 'column',
              gap: 2,
              '@media (max-width: 768px)': { padding: 0 },
            }}
          >
            <Heading
              as='h1'
              sx={{
                paddingBottom: 3,
                fontSize: 4,
                fontWeight: 600,
                borderBottom: '1px solid ',
                borderColor: 'border.default',
                flex: 1,
                '@media (max-width: 768px)': {
                  fontSize: 3,
                },
              }}
            >
              Subscribe to GitHub {PRODUCT}
            </Heading>
            <Account />
            <TotalLicenses
              billingPeriod={YEARLY_PRICE ? billingPeriod : 'monthly'}
              monthlyPrice={MONTHLY_PRICE}
              yearlyPrice={YEARLY_PRICE}
              setBillingPeriod={YEARLY_PRICE ? setBillingPeriod : undefined}
              licenses={licenses}
              setLicenses={setLicenses}
              product={PRODUCT}
            />
            {currentProduct.addons && <AddOns />}
            <BillingInformation />
            <PaymentMethod />
          </Box>
        </PageLayout.Content>
        <PageLayout.Pane
          position='end'
          sticky
        >
          <Overview
              yearlyPrice={YEARLY_PRICE}
              monthlyPrice={MONTHLY_PRICE}
              credit={CREDIT}
              billingPeriod={YEARLY_PRICE ? billingPeriod : 'monthly'}
              licenses={licenses}
              product={PRODUCT}
              tax={TAX}
            />
        </PageLayout.Pane>
      </PageLayout>
    </Box>
  );
}