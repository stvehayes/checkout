import { Text, Radio, Label, Heading, Box } from '@primer/react';

function BillingPeriod({
  billingPeriod,
  setBillingPeriod,
  monthlyPrice,
  yearlyPrice,
}) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: 3,
        '@media (max-width: 768px)': { py: 2 },
      }}
    >
      <Heading
        sx={{ fontSize: 2, flex: 1 }}
        as='h2'
      >
        Billing period
      </Heading>

      <Box
        sx={{
          display: 'grid',
          paddingTop: 3,
          gridTemplateColumns: 'auto',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: 3,
            gap: 2,
            borderBottom: '1px solid ',
            borderColor: 'border.default',
          }}
        >
          <Radio
            aria-describedby='price-yearly'
            name='cycle'
            value='yearly'
            id='yearly'
            onChange={() => setBillingPeriod('yearly')}
            checked={billingPeriod === 'yearly'}
          />
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              flex: 1,
              '@media (max-width: 768px)': {
                flexDirection: 'column',
                gap: 2,
              },
            }}
          >
            <label htmlFor='yearly'>
              Pay yearly
              <Label
                variant='accent'
                sx={{
                  marginLeft: 2,
                  fontWeight: 600,
                  '@media (max-width: 768px)': {
                    marginLeft: 2,
                  },
                }}
              >
                2 months free
              </Label>
            </label>
            <Text
              id='price-yearly'
              sx={{
                color: 'fg.muted',
                flex: 1,
                textAlign: 'right',
                '@media (max-width: 768px)': { textAlign: 'left' },
              }}
            >
              {formatter.format(yearlyPrice)} per seat / month
            </Text>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            padding: 3,
            gap: 2,
          }}
        >
          <Box>
            <Radio
              aria-describedby='price-monthly'
              name='cycle'
              value='monthly'
              id='monthly'
              onChange={() => setBillingPeriod('monthly')}
              checked={billingPeriod === 'monthly'}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              flex: 1,
              '@media (max-width: 768px)': {
                flexDirection: 'column',
                gap: 2,
              },
            }}
          >
            <label htmlFor='monthly'>Pay monthly</label>
            <Text
              id='price-monthly'
              sx={{
                color: 'fg.muted',
                flex: 1,
                textAlign: 'right',
                '@media (max-width: 768px)': { textAlign: 'left' },
              }}
            >
              {formatter.format(monthlyPrice)} per seat / month
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BillingPeriod;
