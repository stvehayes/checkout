import { useContext } from 'react';
import { Box, Button, Heading, PageLayout } from '@primer/react';
import { products } from '../../data/Data';
import { ArrowLeftIcon } from '@primer/octicons-react';
import { Account } from '../../components/Payment/Account/Account';
import { Seats } from '../../components/Payment/Seats/Seats';
import { Billing } from '../../components/Payment/Billing/Billing';
import { Method } from '../../components/Payment/Method/Method';
import { Summary } from '../../components/Payment/Summary/Summary';
import { ProductsContext } from '../../context/ProductsContext';
import { Form } from './Form/Form';
import { AddOns } from '../AddOns/AddOns';

export function Payment() {
  const { selectedProduct } = useContext(ProductsContext);
  const product = products[selectedProduct];

  return (
    <PageLayout
      sx={{
        height: 'calc(100vh - 66px)',
        display: 'flex',
        flexDirection: 'column',
        bg: 'canvas.default',
        maxWidth: '1080px',
        margin: '0 auto',
      }}
    >
      <PageLayout.Header>
        <Box sx={{ ml: -3, mb: 3 }}>
          <Button
            variant='invisible'
            leadingVisual={ArrowLeftIcon}
          >
            Licensing
          </Button>
        </Box>
        <Heading
          as='h1'
          sx={{
            fontSize: 4,
            pb: 3,
            borderBottom: '1px solid',
            borderColor: 'border.default',
          }}
        >
          {product.type} to GitHub {product.name}
        </Heading>
      </PageLayout.Header>
      <PageLayout.Content
        sx={{
          pr: 4,
        }}
      >
        <Account />
        <Seats />
        {product.name === 'Enterprise' && <AddOns />}
        {product.form ? <Form /> : <Billing />}
        <Method />
      </PageLayout.Content>
      <PageLayout.Pane>
        <Summary />
      </PageLayout.Pane>
    </PageLayout>
  );
}
