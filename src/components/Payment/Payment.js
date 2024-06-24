import { Box, Button, Heading, PageLayout, Text } from '@primer/react';
import { product } from '../../data/Data';
import { ArrowLeftIcon } from '@primer/octicons-react';
import { Account } from '../../components/Payment/Account/Account';
import { Seats } from '../../components/Payment/Seats/Seats';
import { Billing } from '../../components/Payment/Billing/Billing';
import { Method } from '../../components/Payment/Method/Method';
import { Summary } from '../../components/Payment/Summary/Summary';

export function Payment() {
  return (
    <PageLayout
      sx={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
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
          Subscribe to {product.type}
        </Heading>
      </PageLayout.Header>
      <PageLayout.Content
        sx={{
          pr: 4,
        }}
      >
        <Account />
        <Seats />
        <Billing />
        <Method />
      </PageLayout.Content>
      <PageLayout.Pane>
        <Summary />
      </PageLayout.Pane>
    </PageLayout>
  );
}